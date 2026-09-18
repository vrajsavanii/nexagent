import * as THREE from 'three';
import { QualityTier, SPATIAL_COLORS } from './spatial-language';

/**
 * Procedural geometries for the 3D Autonomous Neural Orchestration Core:
 * - Inner Singularity Core (faceted multi-phase icosahedron)
 * - Inner Energy Seed (octahedron emitting core luminance)
 * - Geodesic Neural Lattice (outer synaptic cage with vertex nodes)
 * - Concentric Precision Gimbal Rings (counter-rotating mathematical tori)
 * - Floating Synaptic Data Packets
 */
export function createNeuralCoreGeometries(qualityTier: QualityTier = 'LEVEL_2_STANDARD'): {
  coreIcosahedron: THREE.IcosahedronGeometry;
  innerEnergySeed: THREE.OctahedronGeometry;
  latticeWireframe: THREE.IcosahedronGeometry;
  gimbalRing1: THREE.TorusGeometry;
  gimbalRing2: THREE.TorusGeometry;
  gimbalRing3: THREE.TorusGeometry;
  vertexMarkerGeo: THREE.SphereGeometry;
  dataPacketGeo: THREE.SphereGeometry;
} {
  const isUltra = qualityTier === 'LEVEL_1_ULTRA';
  const torusSegments = isUltra ? 120 : qualityTier === 'LEVEL_4_MOBILE' ? 48 : 84;

  const coreIcosahedron = new THREE.IcosahedronGeometry(2.35, 1);
  const innerEnergySeed = new THREE.OctahedronGeometry(1.5, 0);
  const latticeWireframe = new THREE.IcosahedronGeometry(3.7, 1);

  const gimbalRing1 = new THREE.TorusGeometry(5.2, 0.045, 12, torusSegments);
  const gimbalRing2 = new THREE.TorusGeometry(5.95, 0.04, 12, torusSegments);
  const gimbalRing3 = new THREE.TorusGeometry(6.65, 0.03, 12, torusSegments);

  const vertexMarkerGeo = new THREE.SphereGeometry(0.12, 10, 10);
  const dataPacketGeo = new THREE.SphereGeometry(0.16, 12, 12);

  return {
    coreIcosahedron,
    innerEnergySeed,
    latticeWireframe,
    gimbalRing1,
    gimbalRing2,
    gimbalRing3,
    vertexMarkerGeo,
    dataPacketGeo,
  };
}

/**
 * Creates physical shaders and materials for the 3D Neural Orchestration Core
 */
export function createNeuralMaterials(darkBackground: boolean = false) {
  // 1. Central Singularity Core: Dark titanium with deep teal specular sheen & clearcoat
  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: darkBackground ? 0x0c1214 : 0x141a1c,
    emissive: 0x1b4a47,
    emissiveIntensity: darkBackground ? 0.45 : 0.35,
    roughness: 0.18,
    metalness: 0.92,
    clearcoat: 0.75,
    clearcoatRoughness: 0.12,
    reflectivity: 0.9,
    wireframe: false,
  });

  // 2. Inner Energy Seed: Glowing pulsating geometric core
  const innerSeedMaterial = new THREE.MeshBasicMaterial({
    color: SPATIAL_COLORS.TEAL,
    wireframe: true,
    transparent: true,
    opacity: darkBackground ? 0.75 : 0.6,
  });

  // 3. Geodesic Neural Lattice: Radiant connecting edges
  const latticeEdgesMaterial = new THREE.LineBasicMaterial({
    color: SPATIAL_COLORS.TEAL,
    transparent: true,
    opacity: darkBackground ? 0.65 : 0.5,
  });

  // 4. Kinetic Gimbal Rings: Machined aerospace titanium & satin champagne
  const gimbalMat1 = new THREE.MeshStandardMaterial({
    color: darkBackground ? 0x222629 : 0x1a1d20,
    roughness: 0.28,
    metalness: 0.88,
  });

  const gimbalMat2 = new THREE.MeshStandardMaterial({
    color: darkBackground ? 0x2a2822 : 0xbfa15f,
    roughness: 0.32,
    metalness: 0.82,
  });

  const gimbalMat3 = new THREE.MeshStandardMaterial({
    color: darkBackground ? 0x182424 : 0x3d9d99,
    roughness: 0.25,
    metalness: 0.85,
  });

  // 5. Synaptic Vertex Nodes
  const vertexNodeMaterial = new THREE.MeshBasicMaterial({
    color: SPATIAL_COLORS.CHAMPAGNE,
    transparent: true,
    opacity: 0.95,
  });

  // 6. Floating Orbital Data Packets
  const dataPacketMaterialTeal = new THREE.MeshBasicMaterial({
    color: SPATIAL_COLORS.TEAL,
  });

  const dataPacketMaterialGold = new THREE.MeshBasicMaterial({
    color: SPATIAL_COLORS.CHAMPAGNE,
  });

  return {
    coreMaterial,
    innerSeedMaterial,
    latticeEdgesMaterial,
    gimbalMat1,
    gimbalMat2,
    gimbalMat3,
    vertexNodeMaterial,
    dataPacketMaterialTeal,
    dataPacketMaterialGold,
  };
}

/**
 * Optical transmission satellite glass materials (NexAgent Teal or Warm Champagne)
 */
export function createSatelliteGlassMaterial(
  type: 'teal' | 'champagne'
): THREE.MeshPhysicalMaterial {
  const isTeal = type === 'teal';
  return new THREE.MeshPhysicalMaterial({
    color: isTeal ? SPATIAL_COLORS.TEAL : SPATIAL_COLORS.CHAMPAGNE,
    metalness: isTeal ? 0.1 : 0.15,
    roughness: isTeal ? 0.1 : 0.12,
    transmission: isTeal ? 0.85 : 0.82,
    thickness: 0.6,
    transparent: true,
    opacity: 0.85,
  });
}

/**
 * Parametric Orbit Ring line material
 */
export function createOrbitRingMaterial(
  color: number,
  opacity: number = 0.25
): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
  });
}

/**
 * Telemetry / Data Node point marker material
 */
export function createDataNodeMaterial(color: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
  });
}

/**
 * Connection beam material for network/pipeline arcs
 */
export function createConnectionBeamMaterial(
  color: number = SPATIAL_COLORS.TEAL,
  opacity: number = 0.6
): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    linewidth: 1,
  });
}

/**
 * Bulletproof resource disposal utility
 * Recursively cleans geometries, materials (and their textures), textures, and WebGL context.
 */
export function disposeThreeResources({
  scene,
  renderer,
  geometries = [],
  materials = [],
  textures = [],
}: {
  scene?: THREE.Scene;
  renderer?: THREE.WebGLRenderer;
  geometries?: THREE.BufferGeometry[];
  materials?: (THREE.Material | THREE.Material[])[];
  textures?: (THREE.Texture | null | undefined)[];
}): void {
  // Dispose explicitly tracked geometries
  geometries.forEach((geo) => {
    try {
      geo.dispose();
    } catch {}
  });

  // Dispose explicitly tracked materials
  materials.forEach((mat) => {
    if (Array.isArray(mat)) {
      mat.forEach((m) => {
        try {
          m.dispose();
        } catch {}
      });
    } else if (mat) {
      try {
        mat.dispose();
      } catch {}
    }
  });

  // Dispose explicitly tracked textures
  textures.forEach((tex) => {
    if (tex) {
      try {
        tex.dispose();
      } catch {}
    }
  });

  // Traverse scene to catch any nested objects
  if (scene) {
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        if (obj.geometry) {
          try {
            obj.geometry.dispose();
          } catch {}
        }
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => {
              try {
                m.dispose();
              } catch {}
            });
          } else {
            try {
              obj.material.dispose();
            } catch {}
          }
        }
      }
    });
  }

  // Dispose WebGLRenderer and force GPU release
  if (renderer) {
    try {
      renderer.dispose();
      renderer.forceContextLoss();
    } catch {}
  }
}
