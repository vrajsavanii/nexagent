import * as THREE from 'three';
import { SPATIAL_COLORS } from './spatial-language';

/**
 * Standard front core physical material utilizing the authentic brand texture map
 */
export function createFrontCoreMaterial(texture: THREE.Texture | null): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    map: texture,
    metalness: 0.72,
    roughness: 0.22,
    clearcoat: 0.45,
    clearcoatRoughness: 0.15,
    reflectivity: 0.9,
  });
}

/**
 * Structural side wall physical material (dark graphite metallic)
 */
export function createSideCoreMaterial(darkBackground: boolean = false): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: darkBackground ? SPATIAL_COLORS.GRAPHITE_DARK : SPATIAL_COLORS.GRAPHITE_SIDE,
    metalness: 0.9,
    roughness: 0.15,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
  });
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
    linewidth: 1, // WebGL standard single-pixel line
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
    } catch {
      // Ignore already disposed
    }
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
