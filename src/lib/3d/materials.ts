import * as THREE from 'three';
import { QualityTier, SPATIAL_COLORS } from './spatial-language';

/**
 * Procedural 2D canvas texture for the Letter "N":
 * Top vibrant tech teal (#52BFB9) down to midnight navy (#162D4A) and satin silver blend
 */
export function createTextureN(): THREE.CanvasTexture {
  if (typeof document === 'undefined') {
    return new THREE.CanvasTexture({} as any);
  }
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Base gradient: top teal down to deep midnight navy
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0, '#52BFB9'); // vibrant tech teal
    grad.addColorStop(0.32, '#2E858A'); // deep teal
    grad.addColorStop(0.7, '#193656'); // midnight navy
    grad.addColorStop(1, '#0E1724'); // deep obsidian navy
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Right stem satin silver blend
    const rightGrad = ctx.createLinearGradient(540, 0, 1024, 1024);
    rightGrad.addColorStop(0, 'rgba(224, 232, 230, 0.96)');
    rightGrad.addColorStop(0.5, 'rgba(182, 192, 189, 0.88)');
    rightGrad.addColorStop(1, 'rgba(48, 62, 74, 0.75)');
    ctx.fillStyle = rightGrad;
    ctx.fillRect(510, 0, 514, 1024);

    // Micro brushed-metal anisotropic streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillRect(0, y, 1024, 1.5);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Procedural 2D canvas texture for the Letter "A" Chevron:
 * Warm satin champagne apex highlight down to titanium shadow
 */
export function createTextureAChevron(): THREE.CanvasTexture {
  if (typeof document === 'undefined') {
    return new THREE.CanvasTexture({} as any);
  }
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const grad = ctx.createLinearGradient(512, 0, 512, 1024);
    grad.addColorStop(0, '#F4EDE1'); // champagne apex glow
    grad.addColorStop(0.38, '#DFD3C0'); // warm satin champagne
    grad.addColorStop(0.85, '#A89B8C'); // shadowed champagne
    grad.addColorStop(1, '#5C544B');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Brushed metal streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillRect(0, y, 1024, 1.5);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Procedural 2D canvas texture for the Letter "A" Bottom Bar:
 * Warm rose-bronze / champagne-taupe metal
 */
export function createTextureABar(): THREE.CanvasTexture {
  if (typeof document === 'undefined') {
    return new THREE.CanvasTexture({} as any);
  }
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    grad.addColorStop(0, '#CCBCB1');
    grad.addColorStop(0.5, '#AF9E9E');
    grad.addColorStop(1, '#786868');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Brushed streaks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillRect(0, y, 1024, 1.5);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Creates the exact authentic "NA" 3D extruded monogram geometries
 * matching logo_overlay_test.png:
 * 1. Letter "N" (9 planar vertices with 45° apex)
 * 2. Letter "A" Chevron (6 planar vertices)
 * 3. Letter "A" Crossbar (4 planar vertices parallelogram)
 */
export function createNAMonogramGeometries(qualityTier: QualityTier = 'LEVEL_2_STANDARD'): {
  geomN: THREE.ExtrudeGeometry;
  geomChevron: THREE.ExtrudeGeometry;
  geomBar: THREE.ExtrudeGeometry;
} {
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.88,
    bevelEnabled: qualityTier !== 'LEVEL_4_MOBILE',
    bevelThickness: 0.085,
    bevelSize: 0.055,
    bevelOffset: 0,
    bevelSegments: qualityTier === 'LEVEL_1_ULTRA' ? 4 : 2,
    steps: 1,
  };

  // 1. LETTER "N" SHAPE
  const shapeN = new THREE.Shape();
  const ptsN: [number, number][] = [
    [-4.5843, -2.8],
    [-3.5961, -2.8],
    [-3.5961, 0.4392],
    [-1.4, -1.6608],
    [-0.2745, 0.0137],
    [-0.2745, 1.8392],
    [-1.2216, 1.8392],
    [-1.2216, -0.5627],
    [-4.5843, 2.8],
  ];
  shapeN.moveTo(ptsN[0][0], ptsN[0][1]);
  for (let i = 1; i < ptsN.length; i++) {
    shapeN.lineTo(ptsN[i][0], ptsN[i][1]);
  }
  shapeN.closePath();

  const geomN = new THREE.ExtrudeGeometry(shapeN, extrudeSettings);
  geomN.translate(0, 0, -0.485); // Center depth at z = 0

  // 2. LETTER "A" CHEVRON SHAPE
  const shapeChevron = new THREE.Shape();
  const ptsChevron: [number, number][] = [
    [-1.2216, -2.7176],
    [-0.0961, -2.7176],
    [1.6882, 0.0549],
    [2.4706, -1.1118],
    [3.5686, -1.1118],
    [1.6882, 1.9216],
  ];
  shapeChevron.moveTo(ptsChevron[0][0], ptsChevron[0][1]);
  for (let i = 1; i < ptsChevron.length; i++) {
    shapeChevron.lineTo(ptsChevron[i][0], ptsChevron[i][1]);
  }
  shapeChevron.closePath();

  const geomChevron = new THREE.ExtrudeGeometry(shapeChevron, extrudeSettings);
  geomChevron.translate(0, 0, -0.485);

  // 3. LETTER "A" BOTTOM BAR SHAPE
  const shapeBar = new THREE.Shape();
  const ptsBar: [number, number][] = [
    [1.8392, -2.7039],
    [4.5843, -2.7039],
    [4.0078, -1.8118],
    [1.249, -1.8118],
  ];
  shapeBar.moveTo(ptsBar[0][0], ptsBar[0][1]);
  for (let i = 1; i < ptsBar.length; i++) {
    shapeBar.lineTo(ptsBar[i][0], ptsBar[i][1]);
  }
  shapeBar.closePath();

  const geomBar = new THREE.ExtrudeGeometry(shapeBar, extrudeSettings);
  geomBar.translate(0, 0, -0.485);

  return { geomN, geomChevron, geomBar };
}

/**
 * Structural side wall physical material (dark machined graphite titanium)
 */
export function createSideCoreMaterial(darkBackground: boolean = false): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: darkBackground ? 0x14171a : 0x1a1d20,
    roughness: 0.32,
    metalness: 0.92,
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
