import * as THREE from 'three';
import { CoreSystemState, QualityTier } from './spatial-language';

export interface DebugStats {
  fps: number;
  frameTimeMs: number;
  drawCalls: number;
  triangles: number;
  textures: number;
  geometries: number;
  state: CoreSystemState;
  qualityTier: QualityTier;
}

export class ThreeDebugTracker {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private frameTimeMs = 16.6;

  public update(
    renderer: THREE.WebGLRenderer | null,
    state: CoreSystemState = 'IDLE',
    tier: QualityTier = 'LEVEL_2_STANDARD'
  ): DebugStats {
    this.frameCount++;
    const now = performance.now();
    const elapsed = now - this.lastTime;

    if (elapsed >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed);
      this.frameTimeMs = Math.round((elapsed / this.frameCount) * 10) / 10;
      this.frameCount = 0;
      this.lastTime = now;
    }

    const renderInfo = renderer?.info?.render;
    const memoryInfo = renderer?.info?.memory;

    return {
      fps: this.fps,
      frameTimeMs: this.frameTimeMs,
      drawCalls: renderInfo?.calls ?? 0,
      triangles: renderInfo?.triangles ?? 0,
      textures: memoryInfo?.textures ?? 0,
      geometries: memoryInfo?.geometries ?? 0,
      state,
      qualityTier: tier,
    };
  }
}
