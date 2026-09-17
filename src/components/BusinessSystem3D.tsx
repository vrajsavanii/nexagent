'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  detectQualityTier,
  QUALITY_PROFILES,
  SPATIAL_COLORS,
} from '@/lib/3d/spatial-language';
import { disposeThreeResources } from '@/lib/3d/materials';

export type TransformationMode = 'FRAGMENTED' | 'ORCHESTRATED';

export interface SystemTierNode {
  id: string;
  name: string;
  category: string;
  latency: string;
  throughput: string;
  description: string;
  // Target coordinates in Fragmented mode (scattered, misaligned)
  fragmentedPos: [number, number, number];
  // Target coordinates in Orchestrated mode (harmonious, aligned)
  orchestratedPos: [number, number, number];
}

export const SYSTEM_NODES: SystemTierNode[] = [
  {
    id: 'customer',
    name: 'CUSTOMER / TOUCHPOINT',
    category: 'INPUT',
    latency: 'Real-time',
    throughput: 'Omnichannel Ingestion',
    description: 'Web clients, mobile apps, enterprise portals, and voice interfaces.',
    fragmentedPos: [-4.5, 2.5, -1.2],
    orchestratedPos: [-5.0, 0.0, 0.0],
  },
  {
    id: 'interface',
    name: 'COMMUNICATION MESH',
    category: 'INTERFACE',
    latency: '< 15ms',
    throughput: 'Event Stream',
    description: 'Conversational voice, natural language parsing, and streaming WebSockets.',
    fragmentedPos: [-2.2, 3.2, 0.8],
    orchestratedPos: [-3.2, 1.4, 0.2],
  },
  {
    id: 'intelligence',
    name: 'NEXAGENT REASONING CORE',
    category: 'INTELLIGENCE',
    latency: '< 80ms',
    throughput: 'Multi-Modal Inference',
    description: 'Proprietary fine-tuned foundation models and autonomous multi-agent consensus.',
    fragmentedPos: [0.2, -2.8, -0.6],
    orchestratedPos: [0.0, 0.0, 0.4],
  },
  {
    id: 'automation',
    name: 'TRANSACTIONAL EVENT BUS',
    category: 'AUTOMATION',
    latency: '< 5ms',
    throughput: '50k+ events/sec',
    description: 'Idempotent state execution, dynamic routing, and automated tool invocations.',
    fragmentedPos: [2.5, 2.6, -1.5],
    orchestratedPos: [2.8, 1.2, 0.2],
  },
  {
    id: 'systems',
    name: 'ENTERPRISE ERP & CRM',
    category: 'BUSINESS SYSTEMS',
    latency: '< 18ms',
    throughput: 'Two-Way Sync',
    description: 'Legacy databases, SAP, Salesforce, custom corporate APIs, and internal tools.',
    fragmentedPos: [4.2, -1.8, 1.2],
    orchestratedPos: [4.8, -0.8, 0.0],
  },
  {
    id: 'infrastructure',
    name: 'SOVEREIGN CLOUD & EDGE',
    category: 'INFRASTRUCTURE',
    latency: '< 10ms',
    throughput: 'Global Dedicated Mesh',
    description: 'Isolated private GPU enclaves, VPC peering, and zero-trust security mesh.',
    fragmentedPos: [-3.8, -2.4, 1.4],
    orchestratedPos: [1.2, -2.2, -0.2],
  },
];

export interface BusinessSystem3DProps {
  className?: string;
  initialMode?: TransformationMode;
  onNodeSelect?: (node: SystemTierNode) => void;
}

export default function BusinessSystem3D({
  className = '',
  initialMode = 'ORCHESTRATED',
  onNodeSelect,
}: BusinessSystem3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<TransformationMode>(initialMode);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(2); // Center Core by default
  const [webglFailed, setWebglFailed] = useState(false);

  const modeRef = useRef<TransformationMode>(mode);
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const activeNodeRef = useRef<number>(activeNodeIndex);
  useEffect(() => {
    activeNodeRef.current = activeNodeIndex;
  }, [activeNodeIndex]);

  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof window === 'undefined') return;

    const qualityTier = detectQualityTier();
    const quality = QUALITY_PROFILES[qualityTier];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : container.clientWidth || 640;
    const height = rect.height > 0 ? rect.height : container.clientHeight || 360;
    const aspect = width / height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    camera.position.set(0, 0, 11);
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

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Node Meshes tracking
    interface NodeVisual {
      mesh: THREE.Mesh;
      ring: THREE.Mesh;
      targetPos: THREE.Vector3;
      currentPos: THREE.Vector3;
      node: SystemTierNode;
      index: number;
    }

    const nodeVisuals: NodeVisual[] = [];

    SYSTEM_NODES.forEach((node, idx) => {
      const isCore = node.id === 'intelligence';
      const sphereGeo = new THREE.SphereGeometry(isCore ? 0.38 : 0.22, 16, 16);
      allGeometries.push(sphereGeo);

      const sphereMat = new THREE.MeshBasicMaterial({
        color: isCore ? SPATIAL_COLORS.TEAL : SPATIAL_COLORS.CHARCOAL,
      });
      allMaterials.push(sphereMat);

      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      const initialPos = new THREE.Vector3(...(mode === 'ORCHESTRATED' ? node.orchestratedPos : node.fragmentedPos));
      mesh.position.copy(initialPos);
      rootGroup.add(mesh);

      const ringGeo = new THREE.RingGeometry(isCore ? 0.52 : 0.32, isCore ? 0.58 : 0.36, 24);
      allGeometries.push(ringGeo);

      const ringMat = new THREE.MeshBasicMaterial({
        color: isCore ? SPATIAL_COLORS.CHAMPAGNE : SPATIAL_COLORS.TEAL,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });
      allMaterials.push(ringMat);

      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(initialPos);
      rootGroup.add(ring);

      nodeVisuals.push({
        mesh,
        ring,
        targetPos: initialPos.clone(),
        currentPos: initialPos.clone(),
        node,
        index: idx,
      });
    });

    // Connection Vectors
    // Sequential chain: 0 -> 1 -> 2 -> 3 -> 4, and 2 -> 5 (Infrastructure)
    const connectionPairs: Array<[number, number]> = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 5],
      [5, 4],
    ];

    interface VectorLink {
      line: THREE.Line;
      fromIdx: number;
      toIdx: number;
      geo: THREE.BufferGeometry;
      mat: THREE.LineBasicMaterial;
    }

    const vectorLinks: VectorLink[] = [];

    connectionPairs.forEach(([from, to]) => {
      const p1 = nodeVisuals[from].currentPos;
      const p2 = nodeVisuals[to].currentPos;
      const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      allGeometries.push(geo);

      const mat = new THREE.LineBasicMaterial({
        color: SPATIAL_COLORS.TEAL,
        transparent: true,
        opacity: 0.3,
      });
      allMaterials.push(mat);

      const line = new THREE.Line(geo, mat);
      rootGroup.add(line);

      vectorLinks.push({ line, fromIdx: from, toIdx: to, geo, mat });
    });

    // Mouse Tracking
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
      const nw = r.width > 0 ? r.width : container.clientWidth || 640;
      const nh = r.height > 0 ? r.height : container.clientHeight || 360;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.maxDpr));
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Observers
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

      const mouse = mousePosRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      rootGroup.rotation.y = mouse.x * 0.15;
      rootGroup.rotation.x = -mouse.y * 0.1;

      const isOrchestrated = modeRef.current === 'ORCHESTRATED';
      const curSelected = activeNodeRef.current;

      // Interpolate Node positions toward their target state
      nodeVisuals.forEach((nv) => {
        const target = isOrchestrated ? nv.node.orchestratedPos : nv.node.fragmentedPos;
        nv.targetPos.set(...target);

        // Lerp position
        nv.currentPos.lerp(nv.targetPos, 0.06);
        nv.mesh.position.copy(nv.currentPos);
        nv.ring.position.copy(nv.currentPos);

        const isSelected = nv.index === curSelected;
        const scale = isSelected
          ? 1.15 + Math.sin(time * 3 + nv.index) * 0.12
          : 1.0 + Math.sin(time * 1.5 + nv.index) * 0.05;
        nv.ring.scale.set(scale, scale, scale);

        // Highlight colors
        const meshMat = nv.mesh.material as THREE.MeshBasicMaterial;
        const ringMat = nv.ring.material as THREE.MeshBasicMaterial;

        if (!isOrchestrated) {
          // Fragmented: Erratic amber/red warnings
          meshMat.color.lerp(new THREE.Color(isSelected ? 0xd97706 : 0x17191a), 0.1);
          ringMat.color.lerp(new THREE.Color(0xd97706), 0.1);
          ringMat.opacity = isSelected ? 0.8 : 0.25;
        } else {
          // Orchestrated: Pure technical teal/champagne
          const isCore = nv.node.id === 'intelligence';
          const highlightCol = isCore ? SPATIAL_COLORS.CHAMPAGNE : SPATIAL_COLORS.TEAL;
          meshMat.color.lerp(new THREE.Color(isSelected || isCore ? highlightCol : SPATIAL_COLORS.CHARCOAL), 0.1);
          ringMat.color.lerp(new THREE.Color(highlightCol), 0.1);
          ringMat.opacity = isSelected ? 0.85 : 0.35;
        }
      });

      // Update Connection Vectors
      vectorLinks.forEach((vl) => {
        const p1 = nodeVisuals[vl.fromIdx].currentPos;
        const p2 = nodeVisuals[vl.toIdx].currentPos;
        const posAttr = vl.geo.attributes.position as THREE.BufferAttribute;
        posAttr.setXYZ(0, p1.x, p1.y, p1.z);
        posAttr.setXYZ(1, p2.x, p2.y, p2.z);
        posAttr.needsUpdate = true;

        if (!isOrchestrated) {
          // Fragmented: Dim, high-friction, erratic lines
          vl.mat.opacity = 0.12 + Math.sin(time * 6 + vl.fromIdx) * 0.08;
          vl.mat.color.setHex(0xd97706);
        } else {
          // Orchestrated: Smooth, synchronized data channels
          vl.mat.opacity = 0.45 + Math.sin(time * 2 + vl.fromIdx) * 0.15;
          vl.mat.color.setHex(SPATIAL_COLORS.TEAL);
        }
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
  }, []);

  const selectedNode = SYSTEM_NODES[activeNodeIndex];

  return (
    <div className={`relative w-full flex flex-col bg-surface border border-outline-variant/40 rounded overflow-hidden shadow-sm ${className}`}>
      {/* Top Transformation Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-outline-variant/30 bg-surface-container-lowest">
        <div className="flex items-center gap-3">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              mode === 'ORCHESTRATED' ? 'bg-primary animate-pulse' : 'bg-amber-500 animate-ping'
            }`}
          />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-on-surface">
            BUSINESS ARCHITECTURE // {mode} STATE
          </span>
        </div>

        {/* Transformation Toggle Buttons */}
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded border border-outline-variant/40">
          <button
            onClick={() => setMode('FRAGMENTED')}
            className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
              mode === 'FRAGMENTED'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            BEFORE: Fragmented Silos
          </button>
          <button
            onClick={() => setMode('ORCHESTRATED')}
            className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
              mode === 'ORCHESTRATED'
                ? 'bg-primary text-white font-semibold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            AFTER: NexAgent Orchestrated
          </button>
        </div>
      </div>

      {/* 3D Visualizer Canvas */}
      <div className="relative w-full h-72 sm:h-96 bg-[#F7F7F5] flex items-center justify-center overflow-hidden">
        {webglFailed ? (
          <div className="p-8 text-center space-y-2">
            <span className="font-mono text-xs text-primary font-semibold uppercase">
              Transformation Architecture // Semantic View
            </span>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Hardware-accelerated graphics disabled. Structured transformation view active.
            </p>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="w-full h-full cursor-default"
            role="img"
            aria-label={`3D Business System architecture in ${mode} state.`}
          />
        )}

        {/* Ambient Mode Overlay Note */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-outline uppercase tracking-wider pointer-events-none">
          {mode === 'FRAGMENTED'
            ? '⚠ LATENCY SPIKES // ISOLATED DATA // MANUAL BOTTLENECKS'
            : '✓ 0ms ORCHESTRATION // SINGLE POINT OF CONSENSUS // REAL-TIME EVENT BUS'}
        </div>
      </div>

      {/* Interactive Node Inspection Bar */}
      <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 space-y-4">
        {/* Node Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {SYSTEM_NODES.map((node, idx) => (
            <button
              key={node.id}
              onClick={() => {
                setActiveNodeIndex(idx);
                onNodeSelect?.(node);
              }}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap ${
                activeNodeIndex === idx
                  ? 'bg-on-background text-inverse-on-surface font-semibold shadow-xs'
                  : 'bg-surface-container-lowest text-outline hover:text-on-surface border border-outline-variant/30'
              }`}
            >
              {node.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Node Detail Card */}
        {selectedNode && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase text-primary font-semibold">
                  [{selectedNode.category}]
                </span>
                <h4 className="font-display text-sm uppercase font-semibold text-on-surface">
                  {selectedNode.name}
                </h4>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                {selectedNode.description}
              </p>
            </div>
            <div className="flex flex-col justify-center border-l md:border-outline-variant/30 md:pl-4 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between">
                <span className="text-outline">RESPONSE LATENCY:</span>
                <span className="font-semibold text-on-surface">{selectedNode.latency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">THROUGHPUT:</span>
                <span className="font-semibold text-primary">{selectedNode.throughput}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
