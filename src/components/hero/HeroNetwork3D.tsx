"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export interface NodeData {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
}

export const HERO_NODES_DATA: NodeData[] = [
  {
    id: "ai",
    name: "AI & REASONING",
    category: "Cognitive Tier",
    description: "Reasoning, classification, generation and intelligent decision support.",
    color: "#317F94"
  },
  {
    id: "automation",
    name: "AUTOMATION",
    category: "Execution Tier",
    description: "Turn repetitive workflows into automated, fault-tolerant systems.",
    color: "#4F9CB0"
  },
  {
    id: "software",
    name: "SOFTWARE",
    category: "Application Tier",
    description: "Build the bespoke applications and unified portals businesses actually need.",
    color: "#1A3B46"
  },
  {
    id: "data",
    name: "DATA & BI",
    category: "Intelligence Tier",
    description: "Turn fragmented information into usable, real-time business intelligence.",
    color: "#A7866F"
  },
  {
    id: "voice",
    name: "VOICE AI",
    category: "Telephony Tier",
    description: "Deploy conversational voice experiences for real-time customer calls.",
    color: "#BDA28B"
  },
  {
    id: "workflows",
    name: "WORKFLOWS",
    category: "Coordination Tier",
    description: "Orchestrate multi-step execution graphs and approvals across teams.",
    color: "#26677A"
  },
  {
    id: "systems",
    name: "BUSINESS SYSTEMS",
    category: "Integration Tier",
    description: "Connect CRM, ERP, and databases into a single cohesive interface.",
    color: "#334155"
  }
];

interface HeroNetwork3DProps {
  onNodeHover?: (node: NodeData | null) => void;
  activeNodeId?: string;
}

export function HeroNetwork3D({ onNodeHover, activeNodeId }: HeroNetwork3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const isRenderingRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent to blend with light theme

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 11.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x4f9cb0, 2.0);
    dirLight1.position.set(6, 8, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbda28b, 1.6);
    dirLight2.position.set(-6, -6, 6);
    scene.add(dirLight2);

    // Center Core: NexAgent Intelligence
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const coreGeo = new THREE.IcosahedronGeometry(1.25, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x1a3b46,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Core Wireframe overlay
    const coreWireGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x4f9cb0,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    coreGroup.add(coreWireMesh);

    // Satellites
    const nodeMeshes: { mesh: THREE.Mesh; data: NodeData; initialAngle: number; radius: number; height: number }[] = [];
    const lineGeometries: THREE.BufferGeometry[] = [];
    const packetMeshes: THREE.Mesh[] = [];

    const radius = 4.2;
    const totalNodes = HERO_NODES_DATA.length;

    HERO_NODES_DATA.forEach((node, i) => {
      const angle = (i / totalNodes) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.65);
      const z = (Math.sin(i * 1.5) * 0.8);

      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, y, z);
      scene.add(nodeGroup);

      // Node Geometry
      const nodeGeo = new THREE.DodecahedronGeometry(0.48, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.3,
        metalness: 0.7,
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.userData = { nodeData: node };
      nodeGroup.add(mesh);

      // Node Ring
      const ringGeo = new THREE.RingGeometry(0.62, 0.68, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.lookAt(camera.position);
      nodeGroup.add(ringMesh);

      nodeMeshes.push({ mesh, data: node, initialAngle: angle, radius, height: z });

      // Connecting line to core
      const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      lineGeometries.push(lineGeo);

      const lineMat = new THREE.LineBasicMaterial({
        color: 0x94a3b8,
        transparent: true,
        opacity: 0.35
      });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);

      // Data Packet travelling along connection
      const packetGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0x317f94 });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      scene.add(packet);
      packet.userData = { targetPos: new THREE.Vector3(x, y, z), offset: i * 0.3 };
      packetMeshes.push(packet);
    });

    // Particle Cloud in background
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x82bdcb,
      size: 0.05,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    const mouse = new THREE.Vector2();
    const targetCameraPos = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetCameraPos.x = mouse.x * 0.7;
      targetCameraPos.y = mouse.y * 0.45;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData.nodeData as NodeData;
        if (onNodeHover) onNodeHover(hit);
        container.style.cursor = "pointer";
      } else {
        if (onNodeHover) onNodeHover(null);
        container.style.cursor = "default";
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData.nodeData as NodeData;
        if (onNodeHover) onNodeHover(hit);
      }
    };

    container.addEventListener("mousemove", handlePointerMove, { passive: true });
    container.addEventListener("click", handleClick);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Visibility Observer to pause rendering when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isRenderingRef.current = entry.isIntersecting;
        });
      },
      { rootMargin: "150px" }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isRenderingRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Core rotation
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;
      coreWireMesh.rotation.y = -elapsedTime * 0.3;
      coreWireMesh.rotation.z = elapsedTime * 0.2;

      // Parallax smoothing
      camera.position.x += (targetCameraPos.x - camera.position.x) * 0.05;
      camera.position.y += (targetCameraPos.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Pulse data packets along lines
      packetMeshes.forEach((packet) => {
        const target = packet.userData.targetPos as THREE.Vector3;
        const progress = ((elapsedTime * 0.6) + packet.userData.offset) % 1;
        packet.position.lerpVectors(new THREE.Vector3(0, 0, 0), target, progress);
        const scale = 0.5 + Math.sin(progress * Math.PI) * 0.6;
        packet.scale.set(scale, scale, scale);
      });

      // Subtle node floating
      nodeMeshes.forEach((item, idx) => {
        item.mesh.rotation.y = elapsedTime * 0.4 + idx;
        item.mesh.rotation.x = elapsedTime * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("click", handleClick);

      // Dispose Three.js objects
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
      });
      lineGeometries.forEach((g) => g.dispose());
      packetMeshes.forEach((p) => {
        p.geometry.dispose();
        (p.material as THREE.Material).dispose();
      });

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onNodeHover]);

  if (!webglSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] overflow-hidden rounded-2xl touch-none select-none"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto none auto 540px" }}
      aria-label="Interactive 3D NexAgent Intelligence Network"
    />
  );
}
