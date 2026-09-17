'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NexAgentCore3D from './NexAgentCore3D';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';

export default function FutureConvergence() {
  const convergenceVectors = [
    { label: 'INDIVIDUAL SYSTEMS', sub: 'Autonomous AI, Voice, Models & Infrastructure', icon: 'memory' },
    { label: 'CONNECTED SYSTEMS', sub: 'Event Bus, CRM, ERP, Cloud & Payments', icon: 'hub' },
    { label: 'TECHNOLOGY ECOSYSTEM', sub: '13 Interconnected Engineering Disciplines', icon: 'polyline' },
    { label: 'GLOBAL NETWORK', sub: 'Planetary Infrastructure & Sovereign Compliance', icon: 'public' },
  ];

  return (
    <section className="w-full py-28 bg-[#0D1012] text-white border-b border-white/10 relative overflow-hidden" id="future">
      {/* Background Subtle Tech Lattice for Dark Vault */}
      <div className="absolute inset-0 tech-grid opacity-08 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10 space-y-16">
        {/* Editorial Future Statement in Dark Vault */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/05 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                THE CONVERGENCE HORIZON
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-white tracking-tight mt-4">
              THIS IS ONLY THE BEGINNING.
            </h2>
            <p className="font-body-lg text-body-lg text-white/70 leading-relaxed max-w-2xl mx-auto mt-3">
              “Today, we build intelligent systems for businesses. Tomorrow, we intend to build the technology
              infrastructure that powers how businesses operate.”
            </p>
          </FadeIn>
        </div>

        {/* The 3D Convergence Centerpiece */}
        <div className="relative w-full max-w-5xl mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left System Convergence Stack */}
            <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block">
                SYNTHESIS ARCHITECTURE
              </span>
              <StaggerContainer delay={0.1} stagger={0.08}>
                <div className="space-y-3">
                  {convergenceVectors.map((v, i) => (
                    <StaggerItem key={v.label}>
                      <div className="p-4 bg-white/05 border border-white/10 hover:border-[#3D9D99] transition-colors flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#3D9D99] text-[20px] mt-0.5">
                          {v.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#D7CBB8]">0{i + 1}</span>
                            <h4 className="font-label-code text-xs uppercase font-semibold text-white">
                              {v.label}
                            </h4>
                          </div>
                          <p className="font-body-sm text-[12px] text-white/60 mt-0.5">
                            {v.sub}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

            {/* Center 3D Core Monogram Visualizer in Dark Mode */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center order-1 lg:order-2">
              <FadeIn direction="up" delay={0.2} className="w-full">
                <div className="relative w-full h-[440px] sm:h-[500px] flex items-center justify-center">
                  {/* Ambient Deep Radial Glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#3D9D99]/15 via-transparent to-transparent pointer-events-none blur-3xl opacity-60"></div>

                  {/* 3D WebGL Core in Dark Vault */}
                  <NexAgentCore3D
                    frameless={true}
                    darkBackground={true}
                    showOrbit={true}
                    showHud={false}
                    autoRotateSpeed={0.55}
                    systemState="CONVERGENCE"
                    expansionLevel={0.2}
                    className="w-full h-full"
                  />

                  {/* Engineering Coordinates Overlay */}
                  <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/50 uppercase tracking-wider bg-black/60 px-2.5 py-1 border border-white/10 backdrop-blur-sm pointer-events-none">
                    SYS.CONVERGENCE // LATENCY &lt; 8MS // SOVEREIGN
                  </div>
                  <div className="absolute top-3 right-4 font-mono text-[10px] text-[#3D9D99] uppercase tracking-wider bg-black/60 px-2.5 py-1 border border-[#3D9D99]/30 backdrop-blur-sm pointer-events-none">
                    NEXAGENT // DIGITAL HEADQUARTERS
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Declaration & Grounding Bridge */}
        <FadeIn direction="up" delay={0.3}>
          <div className="pt-10 border-t border-white/10 text-center space-y-4">
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-white font-semibold block">
              NEXAGENT — THE FUTURE IS UNDER CONSTRUCTION.
            </span>
            <p className="font-body-md text-body-md text-white/70 max-w-xl mx-auto">
              We engineer sovereign systems designed to outlast market hype and power the next century of enterprise intelligence.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#0D1012] font-label-code text-label-code uppercase tracking-widest px-8 py-4 hover:bg-[#D7CBB8] transition-all shadow-md group"
              >
                <span>Book a Strategy Call</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/05 border border-white/15 text-white font-label-code text-label-code uppercase tracking-widest px-7 py-4 hover:bg-white/10 transition-colors shadow-sm"
              >
                <span>Explore Parent Group</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
