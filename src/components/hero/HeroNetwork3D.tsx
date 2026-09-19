"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

export interface NodeData {
  id: string;
  name: string;
  shortLabel: string;
  category: string;
  description: string;
  color: string;
}

export const HERO_NODES_DATA: NodeData[] = [
  {
    id: "ai",
    name: "AI & REASONING",
    shortLabel: "AI",
    category: "Cognitive Tier",
    description: "Reasoning, classification, generation and intelligent decision support.",
    color: "#317F94"
  },
  {
    id: "automation",
    name: "AUTOMATION",
    shortLabel: "AUTO",
    category: "Execution Tier",
    description: "Turn repetitive workflows into automated, fault-tolerant systems.",
    color: "#4F9CB0"
  },
  {
    id: "software",
    name: "SOFTWARE",
    shortLabel: "SWR",
    category: "Application Tier",
    description: "Build the bespoke applications and unified portals businesses actually need.",
    color: "#1A3B46"
  },
  {
    id: "data",
    name: "DATA & BI",
    shortLabel: "DATA",
    category: "Intelligence Tier",
    description: "Turn fragmented information into usable, real-time business intelligence.",
    color: "#A7866F"
  },
  {
    id: "voice",
    name: "VOICE AI",
    shortLabel: "VOICE",
    category: "Telephony Tier",
    description: "Deploy conversational voice experiences for real-time customer calls.",
    color: "#BDA28B"
  },
  {
    id: "workflows",
    name: "WORKFLOWS",
    shortLabel: "FLOW",
    category: "Coordination Tier",
    description: "Orchestrate multi-step execution graphs and approvals across teams.",
    color: "#26677A"
  },
  {
    id: "systems",
    name: "BUSINESS SYSTEMS",
    shortLabel: "BIZ",
    category: "Integration Tier",
    description: "Connect CRM, ERP, and databases into a single cohesive interface.",
    color: "#334155"
  }
];

// Creates a billboarding text Sprite from a Canvas texture
function makeNodeLabelSprite(text: string, color: string): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 192;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  // Clear
  ctx.clearRect(0, 0, 192, 64);

  // Pill background
  const r = 28;
  ctx.beginPath();
  ctx.moveTo(r, 4);
  ctx.lineTo(192 - r, 4);
  ctx.arcTo(192 - 4, 4, 192 - 4, 32, r);
  ctx.lineTo(192 - 4, 32);
  ctx.arcTo(192 - 4, 60, 192 - r, 60, r);
  ctx.lineTo(r, 60);
  ctx.arcTo(4, 60, 4, 32, r);
  ctx.lineTo(4, 32);
  ctx.arcTo(4, 4, r, 4, r);
  ctx.closePath();

  // Semi-transparent fill derived from node color
  ctx.fillStyle = color + "CC";
  ctx.fill();

  // White border
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Text
  ctx.font = "bold 26px 'Inter', 'Helvetica Neue', Arial, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.letterSpacing = "2px";
  ctx.fillText(text, 96, 32);

  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  // Scale: world-unit size of the sprite billboard
  sprite.scale.set(1.3, 0.44, 1);
  return sprite;
}

interface HeroNetwork3DProps {
  onNodeHover?: (node: NodeData | null) => void;
  activeNodeId?: string;
}

export function HeroNetwork3D({ onNodeHover, activeNodeId }: HeroNetwork3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const isRenderingRef = useRef(true);

  // Store onNodeHover in a ref so changes never cause the Three.js scene to tear down
  const onNodeHoverRef = useRef(onNodeHover);
  useEffect(() => {
    onNodeHoverRef.current = onNodeHover;
  }, [onNodeHover]);

  const currentHoveredIdRef = useRef<string | null>(null);

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
    const height = container.clientHeight || 520;
    const initialAspect = width / height;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent to blend with light theme

    // Camera: Adaptive distance calculation to guarantee NO CLIPPING on any screen
    // baseDistance is calibrated so satellite nodes and rings have ample breathing room
    const baseDistance = 14.8;
    const calculateCameraZ = (aspect: number) => {
      // If container is narrower than square (aspect < 1), pull camera back proportionally
      return aspect < 1.0 ? baseDistance / Math.max(0.65, aspect) : baseDistance;
    };

    const camera = new THREE.PerspectiveCamera(38, initialAspect, 0.1, 1000);
    camera.position.set(0, 0, calculateCameraZ(initialAspect));

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Multi-source studio lighting for vibrant metallic & specular sheen
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    // Key Light: Crisp Cyan-White highlight
    const dirLight1 = new THREE.DirectionalLight(0xe0f7fa, 2.4);
    dirLight1.position.set(8, 10, 8);
    scene.add(dirLight1);

    // Fill Light: Soft Champagne Titanium warmth
    const dirLight2 = new THREE.DirectionalLight(0xffedd5, 1.8);
    dirLight2.position.set(-8, -6, 6);
    scene.add(dirLight2);

    // Rim Light: Top back light to define sphere silhouettes
    const rimLight = new THREE.DirectionalLight(0x4f9cb0, 1.6);
    rimLight.position.set(0, 8, -6);
    scene.add(rimLight);

    // Core internal point light
    const coreLight = new THREE.PointLight(0x4f9cb0, 3.0, 12, 1.5);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Center Core: NexAgent Intelligence Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // High-spec metallic crystal core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1a404e,
      roughness: 0.2,
      metalness: 0.75,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
      emissive: 0x0e2832,
      emissiveIntensity: 0.5,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Core Wireframe cyber-cage
    const coreWireGeo = new THREE.IcosahedronGeometry(1.36, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x67d4eb,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    coreGroup.add(coreWireMesh);

    // Inner pulsing core light
    const innerPulseGeo = new THREE.SphereGeometry(0.65, 16, 16);
    const innerPulseMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85
    });
    const innerPulseMesh = new THREE.Mesh(innerPulseGeo, innerPulseMat);
    coreGroup.add(innerPulseMesh);

    // Satellites Setup: Calibrated elliptical radius so all nodes stay safely inside bounds
    const nodeMeshes: {
      group: THREE.Group;
      mesh: THREE.Mesh;
      ringMesh: THREE.Mesh;
      labelSprite: THREE.Sprite;
      data: NodeData;
      initialAngle: number;
    }[] = [];

    const lineGeometries: THREE.BufferGeometry[] = [];
    const packetMeshes: THREE.Mesh[] = [];

    // Compact elliptical radius: X fits within +-3.5, Y fits within +-2.3
    const radiusX = 3.5;
    const radiusY = 2.3;
    const totalNodes = HERO_NODES_DATA.length;

    HERO_NODES_DATA.forEach((node, i) => {
      const angle = (i / totalNodes) * Math.PI * 2;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const z = Math.sin(i * 1.5) * 0.45;

      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, y, z);
      scene.add(nodeGroup);

      // High-resolution sphere with vibrant metallic & specular sheen
      const nodeGeo = new THREE.SphereGeometry(0.44, 28, 28);
      const nodeColor = new THREE.Color(node.color);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: nodeColor,
        roughness: 0.22,
        metalness: 0.5,
        clearcoat: 0.85,
        clearcoatRoughness: 0.15,
        emissive: nodeColor,
        emissiveIntensity: 0.35
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.userData = { nodeData: node, parentGroup: nodeGroup };
      nodeGroup.add(mesh);

      // Node Orbital Ring
      const ringGeo = new THREE.RingGeometry(0.56, 0.63, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: nodeColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.lookAt(camera.position);
      nodeGroup.add(ringMesh);

      // Shortform billboard label below the sphere
      const labelSprite = makeNodeLabelSprite(node.shortLabel, node.color);
      // Position: slightly below the sphere center (sphere radius 0.44, offset 0.72 below)
      labelSprite.position.set(0, -0.82, 0);
      nodeGroup.add(labelSprite);

      nodeMeshes.push({ group: nodeGroup, mesh, ringMesh, labelSprite, data: node, initialAngle: angle });

      // Connecting neural line to core
      const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      lineGeometries.push(lineGeo);

      const lineMat = new THREE.LineBasicMaterial({
        color: 0x8ec5d2,
        transparent: true,
        opacity: 0.38
      });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);

      // Data Packet travelling along line
      const packetGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      scene.add(packet);
      packet.userData = { targetPos: new THREE.Vector3(x, y, z), offset: i * 0.28 };
      packetMeshes.push(packet);
    });

    // Ambient floating star-dust particles
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x4f9cb0,
      size: 0.055,
      transparent: true,
      opacity: 0.45
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    const mouse = new THREE.Vector2();
    const targetCameraOffset = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Gentle parallax that does not shift the scene out of view
      targetCameraOffset.x = mouse.x * 0.35;
      targetCameraOffset.y = mouse.y * 0.25;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData.nodeData as NodeData;
        if (currentHoveredIdRef.current !== hit.id) {
          currentHoveredIdRef.current = hit.id;
          container.style.cursor = "pointer";
          onNodeHoverRef.current?.(hit);
        }
      } else {
        if (currentHoveredIdRef.current !== null) {
          currentHoveredIdRef.current = null;
          container.style.cursor = "default";
        }
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
        currentHoveredIdRef.current = hit.id;
        onNodeHoverRef.current?.(hit);
      }
    };

    container.addEventListener("mousemove", handlePointerMove, { passive: true });
    container.addEventListener("click", handleClick);

    // Responsive Resize Handler with dynamic aspect-ratio compensation
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 520;
      const aspect = w / h;
      camera.aspect = aspect;
      camera.position.z = calculateCameraZ(aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // IntersectionObserver to pause rendering when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isRenderingRef.current = entry.isIntersecting;
        });
      },
      { rootMargin: "150px" }
    );
    observer.observe(container);

    // High-performance 60fps / 120fps Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isRenderingRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Center Core continuous rotations
      coreMesh.rotation.y = elapsedTime * 0.22;
      coreMesh.rotation.x = elapsedTime * 0.12;
      coreWireMesh.rotation.y = -elapsedTime * 0.28;
      coreWireMesh.rotation.z = elapsedTime * 0.18;

      // Subtle pulse on inner core
      const pulse = 1.0 + Math.sin(elapsedTime * 3) * 0.08;
      innerPulseMesh.scale.set(pulse, pulse, pulse);

      // Smooth camera parallax easing
      camera.position.x += (targetCameraOffset.x - camera.position.x) * 0.06;
      camera.position.y += (targetCameraOffset.y - camera.position.y) * 0.06;
      camera.lookAt(0, 0, 0);

      // Data packets smooth motion along links
      packetMeshes.forEach((packet) => {
        const target = packet.userData.targetPos as THREE.Vector3;
        const progress = ((elapsedTime * 0.5) + packet.userData.offset) % 1;
        packet.position.lerpVectors(new THREE.Vector3(0, 0, 0), target, progress);
        const scale = 0.5 + Math.sin(progress * Math.PI) * 0.65;
        packet.scale.set(scale, scale, scale);
      });

      // Smooth GPU Lerping on satellite nodes scale & ring glow
      nodeMeshes.forEach((item, idx) => {
        const isHovered = currentHoveredIdRef.current === item.data.id;
        const targetScale = isHovered ? 1.28 : 1.0;

        // Smooth physics-like scale lerp on hover with 0 lag
        item.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.14);

        // Ring opacity and look-at
        const targetRingOpacity = isHovered ? 0.95 : 0.45;
        const ringMat = item.ringMesh.material as THREE.MeshBasicMaterial;
        ringMat.opacity += (targetRingOpacity - ringMat.opacity) * 0.18;
        item.ringMesh.lookAt(camera.position);

        // Gentle node floating rotation
        item.mesh.rotation.y = elapsedTime * 0.35 + idx;
        item.mesh.rotation.x = elapsedTime * 0.18;
      });

      // Gentle drift for particles
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup: Only executes when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("click", handleClick);

      // Dispose geometries and materials cleanly
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      innerPulseGeo.dispose();
      innerPulseMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
        n.ringMesh.geometry.dispose();
        (n.ringMesh.material as THREE.Material).dispose();
        (n.labelSprite.material as THREE.SpriteMaterial).map?.dispose();
        (n.labelSprite.material as THREE.SpriteMaterial).dispose();
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
  }, []); // EMPTY DEPENDENCIES: Never tears down or recreates Three.js scene during user hover!

  if (!webglSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] overflow-hidden rounded-2xl touch-none select-none"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto none auto 520px" }}
      aria-label="Interactive 3D NexAgent Intelligence Network"
    />
  );
}
