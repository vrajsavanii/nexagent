'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  detectQualityTier,
  QUALITY_PROFILES,
  SPATIAL_COLORS,
} from '@/lib/3d/spatial-language';
import { disposeThreeResources } from '@/lib/3d/materials';

export interface GlobalNetworkHub {
  id: string;
  name: string;
  location: string;
  latency: string;
  pos: [number, number, number];
}

export const GLOBAL_HUBS: GlobalNetworkHub[] = [
  { id: 'us', name: 'USA', location: 'San Francisco & New York', latency: '< 14ms', pos: [-4.6, 1.3, 0.5] },
  { id: 'uk', name: 'UNITED KINGDOM', location: 'London, UK', latency: '< 18ms', pos: [-0.6, 2.2, 0.9] },
  { id: 'uae', name: 'UAE', location: 'DIFC, Dubai', latency: '< 22ms', pos: [1.8, 0.7, 0.7] },
  { id: 'in', name: 'INDIA', location: 'Bengaluru', latency: '< 24ms', pos: [3.8, -0.5, 0.3] },
];

export interface GlobalNetwork3DProps {
  className?: string;
  activeHubIndex?: number;
  onSelectHub?: (index: number) => void;
}

export default function GlobalNetwork3D({
  className = '',
  activeHubIndex = 0,
  onSelectHub,
}: GlobalNetwork3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const activeHubRef = useRef(activeHubIndex);

  useEffect(() => {
    activeHubRef.current = activeHubIndex;
  }, [activeHubIndex]);

  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window === 'undefined') return;

    const qualityTier = detectQualityTier();
    const quality = QUALITY_PROFILES[qualityTier];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Viewport dimensions
    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : container.clientWidth || 600;
    const height = rect.height > 0 ? rect.height : container.clientHeight || 280;
    const aspect = width / height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
    camera.position.set(0, 0, 11.5);
    scene.add(camera);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: quality.antialias && !prefersReducedMotion,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.maxDpr));
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    container.innerHTML = '';
    container.appendChild(canvas);

    const allGeometries: THREE.BufferGeometry[] = [];
    const allMaterials: THREE.Material[] = [];

    // Root Network Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // 1. Abstract Latitude/Longitude Tech Field (Refined background lines)
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x17191a,
      transparent: true,
      opacity: 0.08,
    });
    allMaterials.push(gridMat);

    for (let y = -2.5; y <= 3; y += 1.2) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-6.5, y, -0.5),
        new THREE.Vector3(6.5, y, -0.5),
      ]);
      allGeometries.push(lineGeo);
      networkGroup.add(new THREE.Line(lineGeo, gridMat));
    }

    for (let x = -6; x <= 6; x += 2.0) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, -3, -0.5),
        new THREE.Vector3(x, 3.5, -0.5),
      ]);
      allGeometries.push(lineGeo);
      networkGroup.add(new THREE.Line(lineGeo, gridMat));
    }

    // 2. Hub Nodes (Beacon spheres and pulsating beacon rings)
    const nodeMeshes: Array<{
      ring: THREE.Mesh;
      sphere: THREE.Mesh;
      hub: GlobalNetworkHub;
      index: number;
    }> = [];

    GLOBAL_HUBS.forEach((hub, idx) => {
      const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);
      allGeometries.push(sphereGeo);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: idx === activeHubIndex ? SPATIAL_COLORS.TEAL : SPATIAL_COLORS.CHARCOAL,
      });
      allMaterials.push(sphereMat);
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(...hub.pos);
      networkGroup.add(sphere);

      const ringGeo = new THREE.RingGeometry(0.26, 0.32, 24);
      allGeometries.push(ringGeo);
      const ringMat = new THREE.MeshBasicMaterial({
        color: SPATIAL_COLORS.TEAL,
        transparent: true,
        opacity: idx === activeHubIndex ? 0.8 : 0.25,
        side: THREE.DoubleSide,
      });
      allMaterials.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(...hub.pos);
      networkGroup.add(ring);

      nodeMeshes.push({ ring, sphere, hub, index: idx });
    });

    // 3. Geodesic Connection Arcs between hubs
    const connections: Array<[number, number]> = [
      [0, 1], // USA <-> UK
      [1, 2], // UK <-> UAE
      [2, 3], // UAE <-> India
      [0, 3], // USA <-> India (global backbone)
      [0, 2], // USA <-> UAE
    ];

    interface ConnectionArc {
      curve: THREE.CubicBezierCurve3;
      line: THREE.Line;
      packet: THREE.Mesh;
      packetT: number;
      speed: number;
      fromIdx: number;
      toIdx: number;
    }

    const arcData: ConnectionArc[] = [];

    const packetGeo = new THREE.SphereGeometry(0.08, 12, 12);
    allGeometries.push(packetGeo);
    const packetMat = new THREE.MeshBasicMaterial({ color: SPATIAL_COLORS.TEAL_LIGHT });
    allMaterials.push(packetMat);

    connections.forEach(([fromIdx, toIdx], cIdx) => {
      const p1 = new THREE.Vector3(...GLOBAL_HUBS[fromIdx].pos);
      const p2 = new THREE.Vector3(...GLOBAL_HUBS[toIdx].pos);

      // Compute elevated control points for graceful geodesic arc
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      const elevation = Math.min(1.4, dist * 0.28);

      const cp1 = new THREE.Vector3(
        p1.x * 0.65 + p2.x * 0.35,
        p1.y * 0.65 + p2.y * 0.35 + elevation,
        p1.z + 0.6
      );
      const cp2 = new THREE.Vector3(
        p1.x * 0.35 + p2.x * 0.65,
        p1.y * 0.35 + p2.y * 0.65 + elevation,
        p2.z + 0.6
      );

      const curve = new THREE.CubicBezierCurve3(p1, cp1, cp2, p2);
      const points = curve.getPoints(quality.orbitSegments);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      allGeometries.push(curveGeo);

      const arcMat = new THREE.LineBasicMaterial({
        color: SPATIAL_COLORS.TEAL,
        transparent: true,
        opacity: 0.25,
      });
      allMaterials.push(arcMat);

      const line = new THREE.Line(curveGeo, arcMat);
      networkGroup.add(line);

      // Data packet traveling along the arc
      const packet = new THREE.Mesh(packetGeo, packetMat);
      networkGroup.add(packet);

      arcData.push({
        curve,
        line,
        packet,
        packetT: (cIdx * 0.22) % 1.0,
        speed: 0.35 + (cIdx % 3) * 0.08,
        fromIdx,
        toIdx,
      });
    });

    // Pointer Parallax
    const onPointerMove = (e: MouseEvent) => {
      if (!quality.enableMouseParallax || prefersReducedMotion) return;
      const r = container.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      mousePosRef.current.targetX = ((e.clientX - r.left) / r.width) * 2 - 1;
      mousePosRef.current.targetY = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };

    const onPointerLeave = () => {
      mousePosRef.current.targetX = 0;
      mousePosRef.current.targetY = 0;
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mouseleave', onPointerLeave, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const r = container.getBoundingClientRect();
      const nw = r.width > 0 ? r.width : container.clientWidth || 600;
      const nh = r.height > 0 ? r.height : container.clientHeight || 280;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.maxDpr));
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Viewport Intersection & Tab Visibility Observers
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let isTabActive = !document.hidden;
    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isIntersecting || !isTabActive) return;

      const delta = clock.getDelta();
      time += delta;

      // Mouse inertia
      const mouse = mousePosRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      networkGroup.rotation.y = mouse.x * 0.12;
      networkGroup.rotation.x = -mouse.y * 0.08;

      const curHub = activeHubRef.current;

      // Pulse hub beacons
      nodeMeshes.forEach((nm) => {
        const isCurrent = nm.index === curHub;
        const scale = isCurrent
          ? 1.0 + Math.sin(time * 3 + nm.index) * 0.18
          : 0.9 + Math.sin(time * 1.5 + nm.index) * 0.08;
        nm.ring.scale.set(scale, scale, scale);

        const targetColor = isCurrent ? SPATIAL_COLORS.TEAL : SPATIAL_COLORS.CHARCOAL;
        (nm.sphere.material as THREE.MeshBasicMaterial).color.lerp(new THREE.Color(targetColor), 0.1);
        (nm.ring.material as THREE.MeshBasicMaterial).opacity = isCurrent ? 0.85 : 0.2;
      });

      // Advance data packets and illuminate active connection arcs
      arcData.forEach((arc) => {
        if (!prefersReducedMotion) {
          arc.packetT = (arc.packetT + delta * arc.speed) % 1.0;
        }
        const pt = arc.curve.getPoint(arc.packetT);
        arc.packet.position.copy(pt);

        const isLinkedToActive = arc.fromIdx === curHub || arc.toIdx === curHub;
        const targetOpacity = isLinkedToActive ? 0.55 : 0.18;
        const mat = arc.line.material as THREE.LineBasicMaterial;
        mat.opacity += (targetOpacity - mat.opacity) * 0.08;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mouseleave', onPointerLeave);

      disposeThreeResources({
        scene,
        renderer,
        geometries: allGeometries,
        materials: allMaterials,
      });

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [activeHubIndex]);

  return (
    <div className={`relative w-full h-full min-h-[220px] sm:min-h-[280px] overflow-hidden ${className}`}>
      {webglFailed ? (
        // Semantic Accessible SVG Fallback
        <div className="w-full h-full flex items-center justify-center p-6 bg-surface-container-lowest border border-outline-variant/30">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase block">
              Global Mesh Infrastructure // Topology Map
            </span>
            <p className="font-mono text-[11px] text-outline">
              Active Edge Nodes: USA (14ms) • UK (18ms) • UAE (22ms) • INDIA (24ms)
            </p>
          </div>
        </div>
      ) : (
        <>
          <div
            ref={containerRef}
            className="w-full h-full"
            role="img"
            aria-label="3D Global Technology Network mesh connecting the United States, United Kingdom, United Arab Emirates, and India with sub-25ms latency."
          />
          {/* Subtle Hub Selector Overlay */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between gap-1 pointer-events-auto">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {GLOBAL_HUBS.map((hub, idx) => (
                <button
                  key={hub.id}
                  onClick={() => onSelectHub?.(idx)}
                  className={`px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                    activeHubIndex === idx
                      ? 'bg-primary text-white shadow-xs font-semibold'
                      : 'bg-surface/80 backdrop-blur-xs text-outline hover:text-on-surface border border-outline-variant/30'
                  }`}
                >
                  {hub.name} ({hub.latency})
                </button>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>EDGE MESH ACTIVE</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
