'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/MotionWrapper';
import NexAgentCore3D from '@/components/NexAgentCore3D';
import ScrollNarrative3D from '@/components/ScrollNarrative3D';
import BusinessSystem3D from '@/components/BusinessSystem3D';

export default function CorePage() {
  const engineeringSpecs = [
    {
      id: 'geometry',
      title: 'Precision Monogram Geometry',
      desc: 'Vector-perfect extruded planar geometries matching the authentic corporate monogram. Features a 45° acute apex tip, parallel diagonal cuts, and a detached horizontal parallelogram crossbar with 0.85 depth extrusion.',
      details: ['Vertices: 19 Extruded Nodes', 'Bevel Thickness: 0.12', 'Bevel Segments: 3', 'Normals: Face Computed'],
    },
    {
      id: 'materials',
      title: 'Dual-Layer Physical Shader Pipeline',
      desc: 'Custom MeshPhysicalMaterial configuration combining UV planar image projection from master brand assets with dark graphite metallic side walls (#161A20) and real-time ACES tone-mapped specular highlights.',
      details: ['Metalness: 0.72', 'Roughness: 0.22', 'Clearcoat: 0.45', 'Clearcoat Roughness: 0.15'],
    },
    {
      id: 'orbits',
      title: 'Mathematical Orbit Field',
      desc: 'Dual nested parametric tori dynamically configured with radii 7.3 and 7.7. Features automatic camera distance adaptation ensuring zero edge-clipping across any viewport or responsive column aspect ratio.',
      details: ['Tori Radii: 7.3 & 7.7', 'Segment Fidelity: 120 (Ultra)', 'Z-Rotation Speed: Adaptive rad/s', 'State Multiplier: Active'],
    },
    {
      id: 'lighting',
      title: '4-Point Studio Luminescence',
      desc: 'Three-point key/fill/rim illumination supplemented by hemisphere ambient lighting and camera-locked directional beams for consistent visual depth across light and dark user interface modes.',
      details: ['Key Light: 2.8 Intensity', 'Fill Light: 1.9 Intensity', 'Rim Backlight: 2.5 Intensity', 'Ambient Baseline: 1.4'],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-24">
      {/* SECTION 01: HERO SECTION WITH LIVE 3D CANVAS & INTERACTIVE STATE SWITCHER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 border-b border-[#17191A]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Header */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                  Phase 8 // 3D Spatial Computing Engine
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.05]">
                NEXAGENT CORE //{' '}
                <span className="italic font-light text-[#3D9D99]">SPATIAL LAB.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#57595B] leading-relaxed">
                The intersection of brand identity, spatial computing, and high-performance WebGL graphics. Built with Three.js, physical transmission shaders, and responsive mathematical framing.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/technology"
                  className="px-6 py-2.5 bg-[#17191A] hover:bg-[#3D9D99] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all shadow"
                >
                  Enterprise Technology Stack →
                </Link>
                <Link
                  href="/book-a-strategy-call"
                  className="px-6 py-2.5 bg-white hover:bg-black/05 border border-[#17191A]/15 text-[#17191A] font-mono text-xs uppercase tracking-wider font-medium rounded transition-all"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Live 3D Canvas */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <FadeIn direction="left" delay={0.2} className="w-full">
              <div className="relative w-full h-[480px] sm:h-[540px] flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-[#3D9D99]/15 via-transparent to-transparent pointer-events-none blur-3xl opacity-70"></div>
                <NexAgentCore3D
                  frameless={true}
                  transparent={true}
                  showOrbit={true}
                  showHud={true}
                  showStateSelector={true}
                  autoRotateSpeed={0.65}
                  className="w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 02: 8-SCENE SPATIAL NARRATIVE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#17191A]/10 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                SCROLL & INTERACTIVE NARRATIVE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#17191A] font-medium mt-1">
                The 8-Scene Spatial Journey
              </h2>
            </div>
            <p className="font-sans text-sm text-[#57595B] max-w-md">
              A synchronized 3D narrative mapping enterprise transformation from core cognition to global network convergence.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <ScrollNarrative3D />
        </FadeIn>
      </section>

      {/* SECTION 03: BUSINESS SYSTEM TRANSFORMATION VISUALIZATION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#17191A]/10 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                SYSTEMS ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#17191A] font-medium mt-1">
                Before & After Orchestration
              </h2>
            </div>
            <p className="font-sans text-sm text-[#57595B] max-w-md">
              Toggle between fragmented legacy operating silos and the unified NexAgent autonomous orchestration layer.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <BusinessSystem3D />
        </FadeIn>
      </section>

      {/* SECTION 04: TECHNICAL SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              ENGINEERING MATRIX
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
            Real-Time Graphics Pipeline Architecture
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engineeringSpecs.map((spec, idx) => (
            <FadeIn key={spec.id} direction="up" delay={idx * 0.1}>
              <div className="p-8 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#17191A] mb-2">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-sm text-[#57595B] leading-relaxed mb-6">
                    {spec.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#17191A]/10 grid grid-cols-2 gap-2">
                  {spec.details.map((d, i) => (
                    <div key={i} className="font-mono text-[11px] text-[#57595B]">
                      • {d}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
