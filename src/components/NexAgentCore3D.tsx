'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  CoreSystemState,
  CORE_STATES,
  detectQualityTier,
  QUALITY_PROFILES,
  QualityTier,
  SPATIAL_COLORS,
} from '@/lib/3d/spatial-language';
import {
  createNeuralCoreGeometries,
  createNeuralMaterials,
  disposeThreeResources,
} from '@/lib/3d/materials';
import { ThreeDebugTracker, DebugStats } from '@/lib/3d/debug';

export type LegacyOrNewSystemState =
  | CoreSystemState
  | 'INTELLIGENCE'
  | 'AGENTS'
  | 'AUTOMATION'
  | 'SOFTWARE'
  | 'INFRASTRUCTURE'
  | 'BUSINESS'
  | 'SCALE'
  | 'ECOSYSTEM'
  | 'CONVERGENCE';

export interface NexAgentCore3DProps {
  className?: string;
  darkBackground?: boolean;
  transparent?: boolean;
  frameless?: boolean;
  showOrbit?: boolean;
  allowFullscreen?: boolean;
  showHud?: boolean;
  cameraDistance?: number;
  autoRotateSpeed?: number;
  expansionLevel?: number; // 0 (compact) to 1 (expanded)
  systemState?: LegacyOrNewSystemState;
  showStateSelector?: boolean;
  isStatic?: boolean; // When true: stationary 3D logo with fixed perspective, zero animation/rotation
}

/**
 * Check if WebGL is supported by the client browser / hardware
 */
function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Normalize system state prop to canonical CoreSystemState
 */
function mapToCanonicalState(state: LegacyOrNewSystemState): CoreSystemState {
  if (state in CORE_STATES) return state as CoreSystemState;
  switch (state) {
    case 'INTELLIGENCE':
      return 'IDLE';
    case 'AGENTS':
      return 'ANALYZING';
    case 'AUTOMATION':
    case 'SOFTWARE':
      return 'PROCESSING';
    case 'INFRASTRUCTURE':
    case 'BUSINESS':
      return 'ORCHESTRATING';
    case 'SCALE':
      return 'DEPLOYING';
    case 'ECOSYSTEM':
    case 'CONVERGENCE':
      return 'CONNECTED';
    default:
      return 'IDLE';
  }
}

export default function NexAgentCore3D({
  className = '',
  darkBackground = false,
  transparent = false,
  frameless = false,
  showOrbit = true,
  allowFullscreen = true,
  showHud = true,
  cameraDistance,
  autoRotateSpeed = 0.65,
  expansionLevel = 0,
  systemState = 'IDLE',
  showStateSelector = false,
  isStatic = false,
}: NexAgentCore3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const [activeState, setActiveState] = useState<CoreSystemState>(mapToCanonicalState(systemState));
  const [showDebug, setShowDebug] = useState(false);
  const [debugStats, setDebugStats] = useState<DebugStats | null>(null);

  // Sync external prop changes
  useEffect(() => {
    setActiveState(mapToCanonicalState(systemState));
  }, [systemState]);

  const wireframeRef = useRef(false);
  useEffect(() => {
    wireframeRef.current = wireframe;
  }, [wireframe]);

  const expansionRef = useRef(expansionLevel);
  useEffect(() => {
    expansionRef.current = expansionLevel;
  }, [expansionLevel]);

  const activeStateRef = useRef<CoreSystemState>(activeState);
  useEffect(() => {
    activeStateRef.current = activeState;
  }, [activeState]);

  // Pointer smoothing state
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!isWebGLSupported()) {
      setWebglFailed(true);
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const qualityTier: QualityTier = detectQualityTier();
    const quality = QUALITY_PROFILES[qualityTier];

    const onPointerMove = (e: MouseEvent) => {
      if (isStatic || !quality.enableMouseParallax || prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePosRef.current.targetX = Math.max(-1, Math.min(1, nx));
      mousePosRef.current.targetY = Math.max(-1, Math.min(1, ny));
    };

    const onPointerLeave = () => {
      mousePosRef.current.targetX = 0;
      mousePosRef.current.targetY = 0;
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mouseleave', onPointerLeave, { passive: true });

    // Dimension calculation
    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : container.clientWidth || 540;
    const height = rect.height > 0 ? rect.height : container.clientHeight || 480;
    const aspect = width / height;

    function computeOptimalCamDist(a: number, withOrbit: boolean) {
      const tanHalfFov = Math.tan(THREE.MathUtils.degToRad(38 / 2));
      const targetSpan = withOrbit ? 14.8 * 1.25 : 11.2 * 1.18;
      const reqH = Math.max(targetSpan, targetSpan / Math.max(a, 0.4));
      return reqH / (2 * tanHalfFov);
    }

    const effectiveCamDist = cameraDistance ?? computeOptimalCamDist(aspect, showOrbit);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 1000);
    camera.position.set(0, 0, effectiveCamDist);
    scene.add(camera);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: quality.antialias && !prefersReducedMotion,
        powerPreference: qualityTier === 'LEVEL_4_MOBILE' ? 'low-power' : 'high-performance',
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    renderer.setSize(width, height);
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, quality.maxDpr) : 1;
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = darkBackground ? 1.35 : 1.22;
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    container.innerHTML = '';
    container.appendChild(canvas);

    const onContextLost = (event: Event) => {
      event.preventDefault();
      setWebglFailed(true);
    };
    canvas.addEventListener('webglcontextlost', onContextLost, false);

    // Root architectural groups for the 3D Neural Orchestration Core
    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    const allMaterials: THREE.Material[] = [];
    const allGeometries: THREE.BufferGeometry[] = [];
    const allTextures: THREE.Texture[] = [];

    // Instantiate precision neural core geometries & physical shaders
    const geoms = createNeuralCoreGeometries(qualityTier);
    allGeometries.push(
      geoms.coreIcosahedron,
      geoms.innerEnergySeed,
      geoms.latticeWireframe,
      geoms.gimbalRing1,
      geoms.gimbalRing2,
      geoms.gimbalRing3,
      geoms.vertexMarkerGeo,
      geoms.dataPacketGeo
    );

    const mats = createNeuralMaterials(darkBackground);
    allMaterials.push(
      mats.coreMaterial,
      mats.innerSeedMaterial,
      mats.latticeEdgesMaterial,
      mats.gimbalMat1,
      mats.gimbalMat2,
      mats.gimbalMat3,
      mats.vertexNodeMaterial,
      mats.dataPacketMaterialTeal,
      mats.dataPacketMaterialGold
    );

    // 1. Central Singularity Core Mesh (Faceted Titanium Icosahedron)
    const coreMesh = new THREE.Mesh(geoms.coreIcosahedron, mats.coreMaterial);
    coreRoot.add(coreMesh);

    // 2. Inner Pulsing Energy Seed
    const innerSeedMesh = new THREE.Mesh(geoms.innerEnergySeed, mats.innerSeedMaterial);
    coreRoot.add(innerSeedMesh);

    // 3. Geodesic Synaptic Lattice Cage
    const wireframeGeo = new THREE.WireframeGeometry(geoms.latticeWireframe);
    allGeometries.push(wireframeGeo);
    const latticeEdges = new THREE.LineSegments(wireframeGeo, mats.latticeEdgesMaterial);
    coreRoot.add(latticeEdges);

    // 4. Glowing Synaptic Vertex Nodes (Cognitive Agent Decision Points)
    const vertexGroup = new THREE.Group();
    coreRoot.add(vertexGroup);
    const posAttr = geoms.latticeWireframe.attributes.position;
    const vertexMap = new Set<string>();
    for (let i = 0; i < posAttr.count; i++) {
      const x = Number(posAttr.getX(i).toFixed(2));
      const y = Number(posAttr.getY(i).toFixed(2));
      const z = Number(posAttr.getZ(i).toFixed(2));
      const key = `${x},${y},${z}`;
      if (!vertexMap.has(key)) {
        vertexMap.add(key);
        const nodeMesh = new THREE.Mesh(geoms.vertexMarkerGeo, mats.vertexNodeMaterial);
        nodeMesh.position.set(x, y, z);
        vertexGroup.add(nodeMesh);
      }
    }

    // 5. Kinetic Precision Gimbal Rings (Counter-Rotating Mathematical Horizon)
    const gimbalGroup = new THREE.Group();
    coreRoot.add(gimbalGroup);

    const ring1 = new THREE.Mesh(geoms.gimbalRing1, mats.gimbalMat1);
    gimbalGroup.add(ring1);

    const ring2 = new THREE.Mesh(geoms.gimbalRing2, mats.gimbalMat2);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    gimbalGroup.add(ring2);

    const ring3 = new THREE.Mesh(geoms.gimbalRing3, mats.gimbalMat3);
    ring3.rotation.x = -Math.PI / 2.6;
    ring3.rotation.z = Math.PI / 4;
    gimbalGroup.add(ring3);

    // 6. Floating Kinetic Data Packets traversing telemetry rails
    const packet1 = new THREE.Mesh(geoms.dataPacketGeo, mats.dataPacketMaterialTeal);
    ring1.add(packet1);

    const packet2 = new THREE.Mesh(geoms.dataPacketGeo, mats.dataPacketMaterialGold);
    ring2.add(packet2);

    const packet3 = new THREE.Mesh(geoms.dataPacketGeo, mats.dataPacketMaterialTeal);
    ring3.add(packet3);

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, darkBackground ? 1.0 : 1.25);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfffbf5, 0x162d4a, 0.85);
    scene.add(hemiLight);

    const camLight = new THREE.DirectionalLight(0xffffff, 1.3);
    camLight.position.set(0, 0, 10);
    camera.add(camLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, darkBackground ? 2.3 : 2.5);
    keyLight.position.set(10, 12, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd9f6f4, darkBackground ? 1.4 : 1.6);
    fillLight.position.set(-10, -8, 8);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x3d9d99, darkBackground ? 2.0 : 2.2);
    rimLight.position.set(0, 8, -12);
    scene.add(rimLight);

    // Responsive Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const r = container.getBoundingClientRect();
      const nw = r.width > 0 ? r.width : container.clientWidth || 540;
      const nh = r.height > 0 ? r.height : container.clientHeight || 480;
      const na = nw / nh;
      camera.aspect = na;
      camera.position.z = cameraDistance ?? computeOptimalCamDist(na, showOrbit);
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      const curDpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, quality.maxDpr) : 1;
      renderer.setPixelRatio(curDpr);
    };
    window.addEventListener('resize', onResize, { passive: true });

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

    let animId: number;
    let time = 0;
    const clock = new THREE.Clock();
    const debugTracker = new ThreeDebugTracker();
    let currentSatelliteExp = expansionRef.current;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isIntersecting || !isTabActive) {
        return;
      }

      const delta = clock.getDelta();
      const cState = activeStateRef.current;
      const stateCfg = CORE_STATES[cState] || CORE_STATES.IDLE;

      if (!prefersReducedMotion) {
        time += delta * autoRotateSpeed * stateCfg.rotationSpeedMultiplier;
      }

      // Smooth mouse interpolation
      const mouse = mousePosRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Central core harmonic rotation
      coreMesh.rotation.y = time * 0.45 + mouse.x * 0.15;
      coreMesh.rotation.x = Math.sin(time * 0.35) * 0.25 - mouse.y * 0.1;
      coreMesh.rotation.z = Math.cos(time * 0.28) * 0.15;

      // Inner seed counter-rotation and breathing pulse
      innerSeedMesh.rotation.y = -time * 0.8;
      innerSeedMesh.rotation.x = time * 0.55;
      const pulseScale = 1.0 + Math.sin(time * 3 * stateCfg.pulseFrequency) * 0.12;
      innerSeedMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Outer synaptic lattice
      latticeEdges.rotation.y = time * 0.22;
      latticeEdges.rotation.z = -time * 0.18;
      vertexGroup.rotation.copy(latticeEdges.rotation);

      // Expansion handling based on system state
      const targetExp = Math.max(stateCfg.satelliteExpansion, expansionRef.current);
      currentSatelliteExp += (targetExp - currentSatelliteExp) * 0.08;
      const latticeScale = 1.0 + currentSatelliteExp * 0.25;
      latticeEdges.scale.set(latticeScale, latticeScale, latticeScale);
      vertexGroup.scale.copy(latticeEdges.scale);

      // Gimbal Rings rotation
      ring1.rotation.z = time * 0.32 * stateCfg.orbitSpeedMultiplier;
      ring2.rotation.z = -time * 0.26 * stateCfg.orbitSpeedMultiplier;
      ring3.rotation.z = time * 0.22 * stateCfg.orbitSpeedMultiplier;

      // Data packets gliding along radii
      const angle1 = time * 0.9 * stateCfg.orbitSpeedMultiplier;
      packet1.position.set(Math.cos(angle1) * 5.2, Math.sin(angle1) * 5.2, 0);

      const angle2 = -time * 0.75 * stateCfg.orbitSpeedMultiplier;
      packet2.position.set(Math.cos(angle2) * 5.95, Math.sin(angle2) * 5.95, 0);

      const angle3 = time * 0.65 * stateCfg.orbitSpeedMultiplier;
      packet3.position.set(Math.cos(angle3) * 6.65, Math.sin(angle3) * 6.65, 0);

      // Camera parallax
      camera.position.x = mouse.x * 0.4;
      camera.position.y = mouse.y * 0.3;
      camera.lookAt(0, 0, 0);

      // Color lerping for state responsiveness
      mats.coreMaterial.emissive.lerp(new THREE.Color(stateCfg.accentColor), 0.05);
      mats.innerSeedMaterial.color.lerp(new THREE.Color(stateCfg.accentColor), 0.05);
      mats.latticeEdgesMaterial.color.lerp(new THREE.Color(stateCfg.accentColor), 0.05);
      mats.dataPacketMaterialTeal.color.lerp(new THREE.Color(stateCfg.accentColor), 0.05);

      // Wireframe toggle
      const isWire = wireframeRef.current;
      if (mats.coreMaterial.wireframe !== isWire) {
        mats.coreMaterial.wireframe = isWire;
      }

      renderer.render(scene, camera);

      if (process.env.NODE_ENV === 'development' && showDebug) {
        setDebugStats(debugTracker.update(renderer, cState, qualityTier));
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mouseleave', onPointerLeave);
      canvas.removeEventListener('webglcontextlost', onContextLost);

      disposeThreeResources({
        scene,
        renderer,
        geometries: allGeometries,
        materials: allMaterials,
        textures: allTextures,
      });

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [showOrbit, cameraDistance, autoRotateSpeed, darkBackground, showDebug, isStatic]);

  const isPlainBg = frameless || transparent;
  const currentCfg = CORE_STATES[activeState] || CORE_STATES.IDLE;

  return (
    <div
      className={`relative w-full h-full flex flex-col cursor-default select-none ${
        isPlainBg
          ? 'bg-transparent border-0'
          : darkBackground
          ? 'bg-[#0D1012] rounded border border-white/10 overflow-hidden'
          : 'bg-[#F0EFEA] rounded border border-[#17191A]/10 overflow-hidden'
      } ${className}`}
    >
      {/* Top Status Header */}
      {!frameless && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#17191A]/10 bg-white/60 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse transition-colors"
              style={{ backgroundColor: `#${currentCfg.accentColor.toString(16).padStart(6, '0')}` }}
            />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#17191A] font-medium">
              NexAgent Core // {activeState}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#57595B]">
            {currentCfg.code}
          </span>
        </div>
      )}

      {/* 3D Canvas or Accessible Fallback */}
      {webglFailed ? (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8">
          <div className="relative flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#17191A] to-[#2A2E32] flex items-center justify-center shadow-lg border border-[#9E7B78]/30">
              <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                <path d="M16 46V18H21.5L31.5 35.5V18H37V46H31.5L21.5 28.5V46H16Z" fill="#F7F7F5" />
                <path d="M37 46L43.5 18H49.5L56 46H50.5L49 39H44L42.5 46H37ZM44.8 34.5H48.2L46.5 26.5L44.8 34.5Z" fill="#9E7B78" />
                <circle cx="53" cy="18" r="2.5" fill="#BFA15F" />
              </svg>
            </div>
            <div className="space-y-1 max-w-xs">
              <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase block">
                NexAgent Core Engine
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Hardware-accelerated rendering fallback active. Full system capabilities remain operational.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full h-full min-h-[inherit] overflow-hidden cursor-default"
          role="img"
          aria-label={`Interactive 3D visualization of the NexAgent Core in ${activeState} state: ${currentCfg.description}`}
        >
          <span className="sr-only">
            NexAgent Core 3D engine ({activeState}): {currentCfg.label}. {currentCfg.description}
          </span>
        </div>
      )}

      {/* State Selector Pills */}
      {showStateSelector && !isStatic && !webglFailed && (
        <div className="absolute top-12 left-4 right-4 flex items-center gap-1.5 overflow-x-auto py-1 z-20 pointer-events-auto">
          {(Object.keys(CORE_STATES) as CoreSystemState[]).map((st) => (
            <button
              key={st}
              onClick={() => setActiveState(st)}
              className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                activeState === st
                  ? 'bg-primary text-white shadow-sm font-semibold'
                  : 'bg-surface-container-lowest/80 backdrop-blur-md text-on-surface-variant hover:text-on-surface border border-outline-variant/30'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      )}

      {/* Control Dock */}
      {showHud && !isStatic && !webglFailed && (
        <div className="absolute bottom-2 right-2 flex items-center gap-2 z-20">
          {process.env.NODE_ENV === 'development' && (
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="px-2 py-1 text-[10px] font-mono uppercase bg-surface-container-lowest/80 backdrop-blur-md hover:bg-surface-container-lowest border border-outline-variant/40 text-on-surface shadow-sm rounded-sm transition-all cursor-pointer"
              title="Toggle WebGL performance stats"
            >
              DEBUG
            </button>
          )}
          <button
            onClick={() => setWireframe(!wireframe)}
            className="px-2.5 py-1 text-[10px] font-mono uppercase bg-surface-container-lowest/80 backdrop-blur-md hover:bg-surface-container-lowest border border-outline-variant/40 text-on-surface shadow-sm rounded-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={`Toggle ${wireframe ? 'Solid' : 'Wireframe'} mode`}
          >
            {wireframe ? 'Solid' : 'Wireframe'}
          </button>
          {allowFullscreen && (
            <button
              onClick={() => setIsFullscreen(true)}
              className="px-2 py-1 text-[10px] font-mono bg-surface-container-lowest/80 backdrop-blur-md hover:bg-surface-container-lowest border border-outline-variant/40 text-on-surface shadow-sm rounded-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
              title="Full screen view"
              aria-label="Enter full screen 3D view"
            >
              ⛶
            </button>
          )}
        </div>
      )}

      {/* Dev Debug Telemetry Overlay */}
      {showDebug && debugStats && (
        <div className="absolute top-2 left-2 z-30 p-2.5 bg-black/85 backdrop-blur-md rounded border border-white/10 text-white font-mono text-[10px] space-y-1 pointer-events-none">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">FPS:</span>
            <span className={debugStats.fps >= 55 ? 'text-green-400' : 'text-amber-400'}>{debugStats.fps} ({debugStats.frameTimeMs}ms)</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">DRAWS:</span>
            <span>{debugStats.drawCalls}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">TRIS:</span>
            <span>{debugStats.triangles.toLocaleString()}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">TIER:</span>
            <span className="text-teal-400">{debugStats.qualityTier}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">STATE:</span>
            <span className="text-amber-300">{debugStats.state}</span>
          </div>
        </div>
      )}

      {/* Fullscreen Modal View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#0D1012] flex flex-col p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: `#${currentCfg.accentColor.toString(16).padStart(6, '0')}` }}
              />
              <span className="font-mono text-sm uppercase text-white font-medium tracking-wider">
                NexAgent // Fullscreen Core View — {activeState}
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-4 py-1.5 text-xs font-mono uppercase bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 transition-all cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
          <div className="flex-1 w-full h-full relative">
            <NexAgentCore3D
              darkBackground={true}
              allowFullscreen={false}
              showHud={true}
              showOrbit={showOrbit}
              systemState={activeState}
              showStateSelector={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
