'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
import {
  detectQualityTier,
  interpolateScrollScene,
  QUALITY_PROFILES,
  SPATIAL_COLORS,
} from '@/lib/3d/spatial-language';
import {
  createTextureN,
  createTextureAChevron,
  createTextureABar,
  createNAMonogramGeometries,
  createSideCoreMaterial,
  createSatelliteGlassMaterial,
  disposeThreeResources,
} from '@/lib/3d/materials';

export interface NarrativeSceneConfig {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  camPos: [number, number, number];
  camTarget: [number, number, number];
  coreExpansion: number;
  rotationSpeed: number;
  accentColor: number;
  highlightCategory: string;
}

export const NARRATIVE_SCENES: NarrativeSceneConfig[] = [
  {
    id: 'core',
    code: 'SCENE 01 // FOUNDATION',
    title: 'NEXAGENT CORE',
    subtitle: 'The Central Intelligence Layer',
    description:
      'Domain-adapted neural models and fine-tuned weights acting as the unified reasoning foundation for the entire enterprise.',
    camPos: [0, 0, 8.8],
    camTarget: [0, 0, 0],
    coreExpansion: 0.1,
    rotationSpeed: 0.5,
    accentColor: SPATIAL_COLORS.TEAL,
    highlightCategory: 'REASONING',
  },
  {
    id: 'connect',
    code: 'SCENE 02 // SYNAPSE',
    title: 'INTEGRATED SYSTEMS',
    subtitle: 'Connecting Fragmented Operations',
    description:
      'Radiant connection pathways link the Core to databases, APIs, ERP systems, and communication channels, ending isolated data silos.',
    camPos: [1.8, 0.8, 10.2],
    camTarget: [0.5, 0.2, 0],
    coreExpansion: 0.3,
    rotationSpeed: 0.7,
    accentColor: SPATIAL_COLORS.TECH_BLUE,
    highlightCategory: 'INTEGRATION',
  },
  {
    id: 'understand',
    code: 'SCENE 03 // COGNITION',
    title: 'DYNAMIC COMPREHENSION',
    subtitle: 'Workflows & Data Become Visible',
    description:
      'Unstructured enterprise context—documents, calls, tickets, transactions—is parsed in sub-200ms into deterministic action graphs.',
    camPos: [-2.0, 1.6, 10.8],
    camTarget: [-0.4, 0.4, 0],
    coreExpansion: 0.45,
    rotationSpeed: 0.85,
    accentColor: SPATIAL_COLORS.CHAMPAGNE,
    highlightCategory: 'SYNTHESIS',
  },
  {
    id: 'automate',
    code: 'SCENE 04 // EXECUTION',
    title: 'AUTONOMOUS PIPELINES',
    subtitle: 'From Manual Tasks to Orchestrated Flows',
    description:
      'Deterministic event buses trigger cross-system actions: Input → Understand → Decide → Execute → Verify → Learn with zero human delay.',
    camPos: [2.5, -0.6, 11.2],
    camTarget: [0.8, -0.2, 0],
    coreExpansion: 0.6,
    rotationSpeed: 1.1,
    accentColor: SPATIAL_COLORS.TEAL,
    highlightCategory: 'AUTOMATION',
  },
  {
    id: 'scale',
    code: 'SCENE 05 // VELOCITY',
    title: 'ORGANIZATIONAL SCALE',
    subtitle: 'Expanding Across Teams & Functions',
    description:
      'Multi-agent consensus validation allows hundreds of specialized agents to coordinate simultaneously without operational degradation.',
    camPos: [0, 2.4, 13.0],
    camTarget: [0, 0, 0],
    coreExpansion: 0.8,
    rotationSpeed: 1.25,
    accentColor: SPATIAL_COLORS.TECH_BLUE,
    highlightCategory: 'CAPACITY',
  },
  {
    id: 'network',
    code: 'SCENE 06 // GLOBAL',
    title: 'PLANETARY MESH',
    subtitle: 'Distributed Edge Infrastructure',
    description:
      'Global coordination across USA, UK, UAE, and India with sovereign compliance and sub-25ms roundtrip edge routing.',
    camPos: [-3.0, -1.2, 11.8],
    camTarget: [-0.5, -0.2, 0],
    coreExpansion: 0.7,
    rotationSpeed: 0.9,
    accentColor: SPATIAL_COLORS.CHAMPAGNE,
    highlightCategory: 'GLOBAL TOPOLOGY',
  },
  {
    id: 'ecosystem',
    code: 'SCENE 07 // UNIFICATION',
    title: 'CONVERGENT ECOSYSTEM',
    subtitle: 'Technology, Products & Ventures',
    description:
      'Every capability, product line (Model-010, Event Mesh), and future enterprise venture operates as a harmonious whole.',
    camPos: [2.0, 1.8, 12.0],
    camTarget: [0.4, 0.4, 0],
    coreExpansion: 0.85,
    rotationSpeed: 0.75,
    accentColor: SPATIAL_COLORS.TEAL,
    highlightCategory: 'ECOSYSTEM',
  },
  {
    id: 'next',
    code: 'SCENE 08 // CONVERGENCE',
    title: 'THE NEXT HORIZON',
    subtitle: 'Built for Enterprise Transformation',
    description:
      'The architecture resolves into immediate execution. Prepare your organization for the next era of intelligent business.',
    camPos: [0, 0, 9.6],
    camTarget: [0, 0, 0],
    coreExpansion: 0.25,
    rotationSpeed: 0.6,
    accentColor: SPATIAL_COLORS.CHAMPAGNE,
    highlightCategory: 'ACTIVATION',
  },
];

export interface ScrollNarrative3DProps {
  className?: string;
  onSceneChange?: (sceneIndex: number) => void;
}

export default function ScrollNarrative3D({
  className = '',
  onSceneChange,
}: ScrollNarrative3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [normalizedProgress, setNormalizedProgress] = useState(0);
  const [webglFailed, setWebglFailed] = useState(false);

  const progressRef = useRef(0);
  useEffect(() => {
    progressRef.current = normalizedProgress;
  }, [normalizedProgress]);

  // Set scene handler
  const setScene = (idx: number) => {
    const clamped = Math.max(0, Math.min(NARRATIVE_SCENES.length - 1, idx));
    setCurrentSceneIdx(clamped);
    const p = clamped / (NARRATIVE_SCENES.length - 1);
    setNormalizedProgress(p);
    onSceneChange?.(clamped);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof window === 'undefined') return;

    const qualityTier = detectQualityTier();
    const quality = QUALITY_PROFILES[qualityTier];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : container.clientWidth || 720;
    const height = rect.height > 0 ? rect.height : container.clientHeight || 450;
    const aspect = width / height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    const initialScene = NARRATIVE_SCENES[0];
    camera.position.set(...initialScene.camPos);
    camera.lookAt(...initialScene.camTarget);
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

    // Root groups
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    const satellitesGroup = new THREE.Group();
    rootGroup.add(satellitesGroup);

    const networkGroup = new THREE.Group();
    rootGroup.add(networkGroup);

    // 1. Procedural Textures & Materials for NA Monogram
    const texN = createTextureN();
    const texChevron = createTextureAChevron();
    const texBar = createTextureABar();

    const sideMat = createSideCoreMaterial(false);
    allMaterials.push(sideMat);

    const matNFront = new THREE.MeshPhysicalMaterial({
      map: texN,
      roughness: 0.22,
      metalness: 0.88,
      clearcoat: 0.45,
      clearcoatRoughness: 0.12,
    });
    allMaterials.push(matNFront);

    const matChevronFront = new THREE.MeshPhysicalMaterial({
      map: texChevron,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 0.45,
      clearcoatRoughness: 0.12,
    });
    allMaterials.push(matChevronFront);

    const matBarFront = new THREE.MeshPhysicalMaterial({
      map: texBar,
      roughness: 0.24,
      metalness: 0.85,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
    });
    allMaterials.push(matBarFront);

    // 2. Extruded NA Monogram Geometries
    const { geomN, geomChevron, geomBar } = createNAMonogramGeometries(qualityTier);
    allGeometries.push(geomN, geomChevron, geomBar);

    const meshN = new THREE.Mesh(geomN, [matNFront, sideMat]);
    const meshChevron = new THREE.Mesh(geomChevron, [matChevronFront, sideMat]);
    const meshBar = new THREE.Mesh(geomBar, [matBarFront, sideMat]);

    coreGroup.add(meshN);
    coreGroup.add(meshChevron);
    coreGroup.add(meshBar);

    // 3. Satellites
    const glassMatTeal = createSatelliteGlassMaterial('teal');
    allMaterials.push(glassMatTeal);

    const glassMatChampagne = createSatelliteGlassMaterial('champagne');
    allMaterials.push(glassMatChampagne);

    const satelliteDefs = [
      { base: new THREE.Vector3(-4.8, 3.2, -0.4), dir: new THREE.Vector3(-1.4, 0.8, -0.4), mat: glassMatTeal },
      { base: new THREE.Vector3(4.8, -3.2, 0.4), dir: new THREE.Vector3(1.4, -0.8, 0.4), mat: glassMatChampagne },
      { base: new THREE.Vector3(4.2, 3.5, -0.3), dir: new THREE.Vector3(1.1, 1.0, -0.3), mat: glassMatTeal },
      { base: new THREE.Vector3(-4.2, -3.5, 0.3), dir: new THREE.Vector3(-1.1, -1.0, 0.3), mat: glassMatChampagne },
    ];

    const satelliteMeshes: Array<{ mesh: THREE.Mesh; base: THREE.Vector3; dir: THREE.Vector3 }> = [];

    satelliteDefs.forEach((d) => {
      const boxGeo = new THREE.BoxGeometry(0.6, 1.3, 0.5);
      allGeometries.push(boxGeo);
      const mesh = new THREE.Mesh(boxGeo, d.mat);
      mesh.position.copy(d.base);
      satellitesGroup.add(mesh);
      satelliteMeshes.push({ mesh, base: d.base.clone(), dir: d.dir.clone() });
    });

    // 4. Orbital rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: SPATIAL_COLORS.TEAL,
      transparent: true,
      opacity: 0.25,
    });
    allMaterials.push(ringMat);

    const torusGeo = new THREE.TorusGeometry(7.5, 0.03, 8, quality.orbitSegments);
    allGeometries.push(torusGeo);
    const orbitRing = new THREE.Mesh(torusGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    rootGroup.add(orbitRing);

    // Studio Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff5e8, 2.6);
    dirLight1.position.set(10, 14, 14);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xccf0ee, 1.8);
    dirLight2.position.set(-14, -8, 10);
    scene.add(dirLight2);

    // Dynamic Camera Interpolation Variables
    const currentCamPos = new THREE.Vector3(...initialScene.camPos);
    const targetCamPos = new THREE.Vector3(...initialScene.camPos);
    const currentLookAt = new THREE.Vector3(...initialScene.camTarget);
    const targetLookAt = new THREE.Vector3(...initialScene.camTarget);

    // Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const r = container.getBoundingClientRect();
      const nw = r.width > 0 ? r.width : container.clientWidth || 720;
      const nh = r.height > 0 ? r.height : container.clientHeight || 450;
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
    let smoothExpansion = 0.1;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isIntersecting || !isTabActive) return;

      const delta = clock.getDelta();
      const p = progressRef.current;
      const { sceneIndex, nextSceneIndex, t } = interpolateScrollScene(p, NARRATIVE_SCENES.length);

      const s1 = NARRATIVE_SCENES[sceneIndex];
      const s2 = NARRATIVE_SCENES[nextSceneIndex];

      if (!prefersReducedMotion) {
        const speed = THREE.MathUtils.lerp(s1.rotationSpeed, s2.rotationSpeed, t);
        time += delta * speed;
      }

      // Smooth camera interpolation
      targetCamPos.set(
        THREE.MathUtils.lerp(s1.camPos[0], s2.camPos[0], t),
        THREE.MathUtils.lerp(s1.camPos[1], s2.camPos[1], t),
        THREE.MathUtils.lerp(s1.camPos[2], s2.camPos[2], t)
      );
      currentCamPos.lerp(targetCamPos, 0.07);
      camera.position.copy(currentCamPos);

      targetLookAt.set(
        THREE.MathUtils.lerp(s1.camTarget[0], s2.camTarget[0], t),
        THREE.MathUtils.lerp(s1.camTarget[1], s2.camTarget[1], t),
        THREE.MathUtils.lerp(s1.camTarget[2], s2.camTarget[2], t)
      );
      currentLookAt.lerp(targetLookAt, 0.07);
      camera.lookAt(currentLookAt);

      // Core rotation & gentle float
      coreGroup.rotation.y = time * 0.55;
      coreGroup.position.y = Math.sin(time * 0.9) * 0.12;

      // Smooth satellite expansion
      const targetExp = THREE.MathUtils.lerp(s1.coreExpansion, s2.coreExpansion, t);
      smoothExpansion += (targetExp - smoothExpansion) * 0.08;

      satelliteMeshes.forEach((sat, i) => {
        const wobble = Math.sin(time * 0.7 + i) * 0.06;
        sat.mesh.position.x = sat.base.x + sat.dir.x * smoothExpansion + wobble;
        sat.mesh.position.y = sat.base.y + sat.dir.y * smoothExpansion;
        sat.mesh.position.z = sat.base.z + sat.dir.z * smoothExpansion;
      });

      orbitRing.rotation.z = time * 0.18;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();

      disposeThreeResources({
        scene,
        renderer,
        geometries: allGeometries,
        materials: allMaterials,
        textures: [texN, texChevron, texBar],
      });

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  const activeScene = NARRATIVE_SCENES[currentSceneIdx];

  return (
    <div className={`relative w-full flex flex-col bg-surface border border-outline-variant/40 rounded overflow-hidden shadow-sm ${className}`}>
      {/* Top Narrative Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-outline-variant/30 bg-surface-container-lowest">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-on-surface">
            {activeScene.code}
          </span>
        </div>

        {/* Scene Steps Indicator */}
        <div className="flex items-center gap-1">
          {NARRATIVE_SCENES.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setScene(idx)}
              className={`w-6 h-6 flex items-center justify-center font-mono text-[10px] rounded transition-all cursor-pointer ${
                currentSceneIdx === idx
                  ? 'bg-primary text-white font-bold shadow-xs'
                  : 'bg-surface-container-low text-outline hover:text-on-surface'
              }`}
              title={sc.title}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Spatial Canvas */}
      <div className="relative w-full h-80 sm:h-[420px] bg-[#F7F7F5] flex items-center justify-center overflow-hidden">
        {webglFailed ? (
          <div className="p-8 text-center space-y-2">
            <span className="font-mono text-xs text-primary font-semibold uppercase">
              Narrative Spatial View Active
            </span>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Hardware graphics unavailable. Standard architectural view engaged.
            </p>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="w-full h-full cursor-default"
            role="img"
            aria-label={`3D Spatial Narrative scene ${currentSceneIdx + 1}: ${activeScene.title}.`}
          />
        )}

        {/* Floating Narrative Text Card (Overlay) */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-surface/90 backdrop-blur-md p-5 rounded border border-outline-variant/40 shadow-md space-y-2 pointer-events-auto">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
              [{activeScene.highlightCategory}]
            </span>
            <span className="font-mono text-[10px] text-outline">
              0{currentSceneIdx + 1} / 08
            </span>
          </div>
          <h3 className="font-display text-lg uppercase tracking-tight font-bold text-on-surface">
            {activeScene.title}
          </h3>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            {activeScene.description}
          </p>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
            <button
              onClick={() => setScene(currentSceneIdx - 1)}
              disabled={currentSceneIdx === 0}
              className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-on-surface rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Previous
            </button>

            {currentSceneIdx === NARRATIVE_SCENES.length - 1 ? (
              <Link
                href="/book-a-strategy-call"
                className="px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider bg-primary hover:bg-secondary text-white font-semibold rounded transition-all"
              >
                Book Strategy Call →
              </Link>
            ) : (
              <button
                onClick={() => setScene(currentSceneIdx + 1)}
                className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider bg-[#17191A] hover:bg-[#3D9D99] text-white rounded cursor-pointer"
              >
                Next Scene →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
