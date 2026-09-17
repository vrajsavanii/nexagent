/**
 * NEXAGENT // OFFICIAL 3D LOGO CORE ENGINE
 * Extruded & Beveled 3D Geometric Monogram of the NexAgent "NA" Brand Identity.
 * Materials: Technical Teal to Midnight Navy (N), Satin Champagne (A Chevron),
 * Brushed Rose-Bronze (A Bar), and Dark Machined Graphite Titanium (Beveled Sides).
 */

(function () {
  const container = document.getElementById('threejs-container-NEXUS_CORE');
  if (!container) return;

  // Global state
  let isRotating = true;
  let isWireframe = false;
  let camera, scene, renderer, logoGroup, ambientLight, keyLight, fillLight, rimLight, camLight;
  let allMaterials = [];
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  let clock = new THREE.Clock();

  // Procedural 2D canvas gradient textures matching the official logo
  function createTextureN() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Base gradient: top teal (#4DB5B0) down to deep midnight navy (#162D4A)
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0, '#52BFB9');     // vibrant tech teal
    grad.addColorStop(0.32, '#2E858A'); // deep teal
    grad.addColorStop(0.70, '#193656'); // midnight navy
    grad.addColorStop(1, '#0E1724');    // deep obsidian navy
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

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 8;
    return tex;
  }

  function createTextureAChevron() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Champagne gradient: apex highlight down to titanium shadow
    const grad = ctx.createLinearGradient(512, 0, 512, 1024);
    grad.addColorStop(0, '#F4EDE1');    // champagne apex glow
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

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 8;
    return tex;
  }

  function createTextureABar() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Warm rose-bronze / champagne-taupe metal
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

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 8;
    return tex;
  }

  function init() {
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16.5);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Preserve HUD overlays (dock buttons and coordinates) without overwriting innerHTML
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) existingCanvas.remove();
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '1';
    container.insertBefore(renderer.domElement, container.firstChild);

    // Ensure container has relative positioning for HUD absolute placement
    container.style.position = 'relative';

    // Root Group for 3D Logo
    logoGroup = new THREE.Group();
    // Start with slight initial angle facing the camera cleanly
    logoGroup.rotation.y = 0.12;
    logoGroup.rotation.x = 0.05;
    scene.add(logoGroup);

    // Side Extrusion & Bevel Material (dark machined graphite titanium with high specular reflectivity)
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1D20,
      roughness: 0.32,
      metalness: 0.92,
      wireframe: false
    });
    allMaterials.push(sideMaterial);

    // Common Extrusion Settings: Solid machined depth with crisp bevel
    const extrudeSettings = {
      depth: 0.88,
      bevelEnabled: true,
      bevelThickness: 0.085,
      bevelSize: 0.055,
      bevelOffset: 0,
      bevelSegments: 4
    };

    // ------------------------------------------------------------------------
    // 1. LETTER "N" MESH
    // ------------------------------------------------------------------------
    const shapeN = new THREE.Shape();
    // CCW vertices matching exact logo geometry
    const ptsN = [
      [-4.5843, -2.8],     // 1. Bottom-left corner
      [-3.5961, -2.8],     // 2. Bottom of inner left stem
      [-3.5961, 0.4392],   // 3. Inner left stem junction with diagonal
      [-1.4, -1.6608],     // 4. Underside bottom cut of diagonal
      [-0.2745, 0.0137],   // 5. Outer edge of right stem
      [-0.2745, 1.8392],   // 6. Top-right corner of right stem
      [-1.2216, 1.8392],   // 7. Top-left corner of right stem
      [-1.2216, -0.5627],  // 8. Junction of right stem inner vertical & diagonal
      [-4.5843, 2.8]       // 9. Sharp top-left acute peak
    ];
    shapeN.moveTo(ptsN[0][0], ptsN[0][1]);
    for (let i = 1; i < ptsN.length; i++) {
      shapeN.lineTo(ptsN[i][0], ptsN[i][1]);
    }
    shapeN.closePath();

    const geomN = new THREE.ExtrudeGeometry(shapeN, extrudeSettings);
    geomN.translate(0, 0, -0.485); // Center extrusion depth at z = 0

    const matNFront = new THREE.MeshPhysicalMaterial({
      map: createTextureN(),
      roughness: 0.22,
      metalness: 0.88,
      clearcoat: 0.45,
      clearcoatRoughness: 0.12,
      wireframe: false
    });
    allMaterials.push(matNFront);

    const meshN = new THREE.Mesh(geomN, [matNFront, sideMaterial]);
    logoGroup.add(meshN);

    // ------------------------------------------------------------------------
    // 2. LETTER "A" CHEVRON MESH
    // ------------------------------------------------------------------------
    const shapeChevron = new THREE.Shape();
    const ptsChevron = [
      [-1.2216, -2.7176], // 1. Outer left foot
      [-0.0961, -2.7176], // 2. Inner left baseline
      [1.6882, 0.0549],   // 3. Inner apex
      [2.4706, -1.1118],  // 4. Inner right horizontal step
      [3.5686, -1.1118],  // 5. Outer right leg step
      [1.6882, 1.9216]    // 6. Top apex
    ];
    shapeChevron.moveTo(ptsChevron[0][0], ptsChevron[0][1]);
    for (let i = 1; i < ptsChevron.length; i++) {
      shapeChevron.lineTo(ptsChevron[i][0], ptsChevron[i][1]);
    }
    shapeChevron.closePath();

    const geomChevron = new THREE.ExtrudeGeometry(shapeChevron, extrudeSettings);
    geomChevron.translate(0, 0, -0.485);

    const matChevronFront = new THREE.MeshPhysicalMaterial({
      map: createTextureAChevron(),
      roughness: 0.20,
      metalness: 0.90,
      clearcoat: 0.45,
      clearcoatRoughness: 0.12,
      wireframe: false
    });
    allMaterials.push(matChevronFront);

    const meshChevron = new THREE.Mesh(geomChevron, [matChevronFront, sideMaterial]);
    logoGroup.add(meshChevron);

    // ------------------------------------------------------------------------
    // 3. LETTER "A" BOTTOM BAR MESH
    // ------------------------------------------------------------------------
    const shapeBar = new THREE.Shape();
    const ptsBar = [
      [1.8392, -2.7039], // 1. Bottom-left
      [4.5843, -2.7039], // 2. Bottom-right
      [4.0078, -1.8118], // 3. Top-right
      [1.249, -1.8118]   // 4. Top-left
    ];
    shapeBar.moveTo(ptsBar[0][0], ptsBar[0][1]);
    for (let i = 1; i < ptsBar.length; i++) {
      shapeBar.lineTo(ptsBar[i][0], ptsBar[i][1]);
    }
    shapeBar.closePath();

    const geomBar = new THREE.ExtrudeGeometry(shapeBar, extrudeSettings);
    geomBar.translate(0, 0, -0.485);

    const matBarFront = new THREE.MeshPhysicalMaterial({
      map: createTextureABar(),
      roughness: 0.24,
      metalness: 0.85,
      clearcoat: 0.40,
      clearcoatRoughness: 0.15,
      wireframe: false
    });
    allMaterials.push(matBarFront);

    const meshBar = new THREE.Mesh(geomBar, [matBarFront, sideMaterial]);
    logoGroup.add(meshBar);

    // ------------------------------------------------------------------------
    // 4. SUBTLE ARCHITECTURAL TELEMETRY ACCENTS
    // ------------------------------------------------------------------------
    // Tight elegant orbital trajectory ring (champagne)
    const orbitRingGeo = new THREE.TorusGeometry(5.2, 0.018, 16, 120);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0xD7CBB8,
      transparent: true,
      opacity: 0.42,
      wireframe: false
    });
    allMaterials.push(orbitRingMat);
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI * 0.40;
    orbitRing.rotation.y = Math.PI * 0.06;
    logoGroup.add(orbitRing);

    // Subtle counter-ring (teal)
    const orbitRing2Geo = new THREE.TorusGeometry(5.6, 0.014, 16, 120);
    const orbitRing2Mat = new THREE.MeshBasicMaterial({
      color: 0x3D9D99,
      transparent: true,
      opacity: 0.32,
      wireframe: false
    });
    allMaterials.push(orbitRing2Mat);
    const orbitRing2 = new THREE.Mesh(orbitRing2Geo, orbitRing2Mat);
    orbitRing2.rotation.x = -Math.PI * 0.38;
    orbitRing2.rotation.z = Math.PI * 0.12;
    logoGroup.add(orbitRing2);

    // ------------------------------------------------------------------------
    // 5. STUDIO LIGHTING RIG
    // ------------------------------------------------------------------------
    // Ambient baseline
    ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Hemisphere sky/ground light for rich contrast
    const hemiLight = new THREE.HemisphereLight(0xfffbf5, 0x162d4a, 0.85);
    scene.add(hemiLight);

    // Camera light: Front spotlight tracking with view to ensure front faces stay illuminated
    camLight = new THREE.DirectionalLight(0xffffff, 1.4);
    camLight.position.set(0, 0, 10);
    camera.add(camLight);

    // Key Light: Warm champagne studio spotlight from top-right
    keyLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
    keyLight.position.set(10, 12, 10);
    scene.add(keyLight);

    // Fill Light: Cool teal laboratory fill from bottom-left
    fillLight = new THREE.DirectionalLight(0xd9f6f4, 1.6);
    fillLight.position.set(-10, -8, 8);
    scene.add(fillLight);

    // Rim Light: Sharp specular back-light for edge definition
    rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, 8, -12);
    scene.add(rimLight);

    // Event Listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // Run animation loop
    animate();
  }

  function onMouseMove(e) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX = (clientX / rect.width - 0.5) * 1.5;
    mouseY = (clientY / rect.height - 0.5) * 1.5;
  }

  function onResize() {
    if (!container || !renderer || !camera) return;
    const w = container.clientWidth || 600;
    const h = container.clientHeight || 520;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    if (isRotating) {
      // Continuous turntable 3D rotation with subtle organic tilt
      logoGroup.rotation.y = time * 0.30 + targetX;
      logoGroup.rotation.x = Math.sin(time * 0.20) * 0.10 + targetY * 0.32;
      logoGroup.rotation.z = Math.cos(time * 0.16) * 0.035;
    } else {
      // Parallax-only when orbit is paused
      logoGroup.rotation.y += (targetX - logoGroup.rotation.y) * 0.06;
      logoGroup.rotation.x += (targetY * 0.32 - logoGroup.rotation.x) * 0.06;
    }

    renderer.render(scene, camera);
  }

  // Window Controls
  window.toggleCoreRotation = function () {
    isRotating = !isRotating;
    const btn = document.getElementById('btn-core-orbit');
    if (btn) {
      btn.innerText = isRotating ? 'ORBIT ACTIVE' : 'ORBIT PAUSED';
    }
  };

  window.toggleCoreWireframe = function () {
    isWireframe = !isWireframe;
    allMaterials.forEach(mat => {
      if (mat) mat.wireframe = isWireframe;
    });

    const btn = document.getElementById('btn-core-wireframe');
    if (btn) {
      btn.innerText = isWireframe ? 'WIREFRAME ON' : 'SOLID RENDER';
    }
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
