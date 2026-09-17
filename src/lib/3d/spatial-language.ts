/**
 * NexAgent Spatial Computing Language Specification
 * 
 * Formal definitions of the NexAgent 3D system:
 * - Nodes: capabilities (AI, Automation, Data, Cloud, Edge, Systems)
 * - Connections: relationships (data flow, latency, governance)
 * - Flows: automated business pipelines
 * - Layers: architectural tiering
 * - Orbital Systems: distributed multi-agent orchestration
 * - Networks: global infrastructure
 * - Core: central intelligence engine
 * - States: transformation stages (IDLE -> ANALYZING -> PROCESSING -> ORCHESTRATING -> DEPLOYING -> CONNECTED)
 */

export type CoreSystemState =
  | 'IDLE'
  | 'ANALYZING'
  | 'PROCESSING'
  | 'ORCHESTRATING'
  | 'DEPLOYING'
  | 'CONNECTED';

export interface CoreStateConfig {
  name: CoreSystemState;
  label: string;
  code: string;
  description: string;
  rotationSpeedMultiplier: number;
  satelliteExpansion: number; // 0 to 1
  orbitSpeedMultiplier: number;
  pulseFrequency: number;
  beaconIntensity: number;
  accentColor: number;
  secondaryColor: number;
}

export const CORE_STATES: Record<CoreSystemState, CoreStateConfig> = {
  IDLE: {
    name: 'IDLE',
    label: 'Ready State // Baseline Equilibrium',
    code: 'SYS-ST-00',
    description: 'System at rest. Harmonic breathing, gentle orbital drift, baseline monitoring active.',
    rotationSpeedMultiplier: 0.65,
    satelliteExpansion: 0.05,
    orbitSpeedMultiplier: 0.5,
    pulseFrequency: 0.8,
    beaconIntensity: 1.0,
    accentColor: 0x3d9d99, // NexAgent Teal
    secondaryColor: 0xbfa15f, // Champagne
  },
  ANALYZING: {
    name: 'ANALYZING',
    label: 'Topology Scanning // Node Alignment',
    code: 'SYS-ST-01',
    description: 'Input streams sampled. Satellites orient along coordinate axes. Data nodes emit locator pings.',
    rotationSpeedMultiplier: 0.9,
    satelliteExpansion: 0.25,
    orbitSpeedMultiplier: 0.9,
    pulseFrequency: 1.4,
    beaconIntensity: 1.4,
    accentColor: 0x2563eb, // Technical Blue
    secondaryColor: 0x3d9d99,
  },
  PROCESSING: {
    name: 'PROCESSING',
    label: 'Cognitive Synthesis // Pathway Activation',
    code: 'SYS-ST-02',
    description: 'Neural models and inference vectors active. Energy pulses traverse orbital pathways.',
    rotationSpeedMultiplier: 1.25,
    satelliteExpansion: 0.45,
    orbitSpeedMultiplier: 1.4,
    pulseFrequency: 2.2,
    beaconIntensity: 1.8,
    accentColor: 0x3d9d99,
    secondaryColor: 0x2563eb,
  },
  ORCHESTRATING: {
    name: 'ORCHESTRATING',
    label: 'Distributed Agent Consensus // Sync',
    code: 'SYS-ST-03',
    description: 'Multi-agent orchestration in progress. Counter-rotating tori achieve phase synchronization.',
    rotationSpeedMultiplier: 1.1,
    satelliteExpansion: 0.7,
    orbitSpeedMultiplier: 1.2,
    pulseFrequency: 1.8,
    beaconIntensity: 2.0,
    accentColor: 0xbfa15f,
    secondaryColor: 0x3d9d99,
  },
  DEPLOYING: {
    name: 'DEPLOYING',
    label: 'Infrastructure Vector Expansion',
    code: 'SYS-ST-04',
    description: 'Autonomous workflows radiating outward. Connection beams lock to peripheral capabilities.',
    rotationSpeedMultiplier: 1.4,
    satelliteExpansion: 0.95,
    orbitSpeedMultiplier: 1.7,
    pulseFrequency: 2.6,
    beaconIntensity: 2.4,
    accentColor: 0x2563eb,
    secondaryColor: 0xbfa15f,
  },
  CONNECTED: {
    name: 'CONNECTED',
    label: 'Planetary Mesh Locked // Coherence',
    code: 'SYS-ST-05',
    description: 'Full architectural integration. Enterprise systems synchronized across global network.',
    rotationSpeedMultiplier: 0.75,
    satelliteExpansion: 0.35,
    orbitSpeedMultiplier: 0.75,
    pulseFrequency: 1.0,
    beaconIntensity: 1.6,
    accentColor: 0x3d9d99,
    secondaryColor: 0xbfa15f,
  },
};

/**
 * Quality Tier Architecture
 * Device-aware rendering profiles balancing visual fidelity and thermal/battery efficiency
 */
export type QualityTier = 'LEVEL_1_ULTRA' | 'LEVEL_2_STANDARD' | 'LEVEL_3_TABLET' | 'LEVEL_4_MOBILE';

export interface QualityProfile {
  tier: QualityTier;
  maxDpr: number;
  antialias: boolean;
  orbitSegments: number;
  enableMouseParallax: boolean;
  particleDensity: number; // multiplier 0 to 1
  shadows: boolean;
  targetFps: number;
}

export const QUALITY_PROFILES: Record<QualityTier, QualityProfile> = {
  LEVEL_1_ULTRA: {
    tier: 'LEVEL_1_ULTRA',
    maxDpr: 1.6,
    antialias: true,
    orbitSegments: 120,
    enableMouseParallax: true,
    particleDensity: 1.0,
    shadows: false, // Architectural lighting is preferred over expensive shadow maps
    targetFps: 60,
  },
  LEVEL_2_STANDARD: {
    tier: 'LEVEL_2_STANDARD',
    maxDpr: 1.25,
    antialias: true,
    orbitSegments: 90,
    enableMouseParallax: true,
    particleDensity: 0.75,
    shadows: false,
    targetFps: 60,
  },
  LEVEL_3_TABLET: {
    tier: 'LEVEL_3_TABLET',
    maxDpr: 1.0,
    antialias: true,
    orbitSegments: 64,
    enableMouseParallax: false,
    particleDensity: 0.5,
    shadows: false,
    targetFps: 60,
  },
  LEVEL_4_MOBILE: {
    tier: 'LEVEL_4_MOBILE',
    maxDpr: 1.0,
    antialias: false,
    orbitSegments: 48,
    enableMouseParallax: false,
    particleDensity: 0.25,
    shadows: false,
    targetFps: 30,
  },
};

/**
 * Detect client hardware & viewport to determine optimal quality tier
 */
export function detectQualityTier(): QualityTier {
  if (typeof window === 'undefined') return 'LEVEL_2_STANDARD';

  const width = window.innerWidth;
  const isMobile = width < 640 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isTablet = width >= 640 && width < 1024;
  const concurrency = navigator.hardwareConcurrency || 4;

  if (isMobile) return 'LEVEL_4_MOBILE';
  if (isTablet) return 'LEVEL_3_TABLET';
  if (concurrency >= 8 && width >= 1440) return 'LEVEL_1_ULTRA';
  return 'LEVEL_2_STANDARD';
}

/**
 * Color Palette Constants (RGB Hex integers for Three.js)
 */
export const SPATIAL_COLORS = {
  CHARCOAL: 0x17191a,
  GRAPHITE_SIDE: 0x1a1d20,
  GRAPHITE_DARK: 0x22272e,
  TEAL: 0x3d9d99,
  TEAL_LIGHT: 0x5eb6b2,
  CHAMPAGNE: 0xbfa15f,
  CHAMPAGNE_LIGHT: 0xd4af37,
  TECH_BLUE: 0x2563eb,
  TECH_BLUE_LIGHT: 0x60a5fa,
  WARM_WHITE: 0xf7f7f5,
  WHITE: 0xffffff,
  LINE_MUTED: 0x57595b,
} as const;

/**
 * Normalized scroll progress mapping helper for multi-scene 3D narratives
 */
export interface SceneInterpolation {
  sceneIndex: number;
  nextSceneIndex: number;
  t: number; // 0 to 1 local progress with smoothstep easing
}

export function interpolateScrollScene(
  normalizedProgress: number,
  totalScenes: number
): SceneInterpolation {
  const clamped = Math.max(0, Math.min(1, normalizedProgress));
  const segmentLength = 1 / Math.max(1, totalScenes - 1);
  const rawIndex = clamped / segmentLength;
  const sceneIndex = Math.min(Math.floor(rawIndex), totalScenes - 1);
  const nextSceneIndex = Math.min(sceneIndex + 1, totalScenes - 1);
  const localRaw = (clamped - sceneIndex * segmentLength) / segmentLength;
  
  // Hermite / Smoothstep easing: 3t^2 - 2t^3
  const t = Math.max(0, Math.min(1, localRaw));
  const easedT = t * t * (3 - 2 * t);

  return { sceneIndex, nextSceneIndex, t: easedT };
}
