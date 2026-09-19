"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, Activity, Radio, Cpu } from "lucide-react";
import { HERO_NODES_DATA, NodeData } from "./HeroNetwork3D";
import { HeroFallback2D } from "./HeroFallback2D";

// Dynamically import Three.js scene with SSR disabled for optimal Core Web Vitals
const HeroNetwork3D = dynamic(
  () => import("./HeroNetwork3D").then((mod) => mod.HeroNetwork3D),
  {
    ssr: false,
    loading: () => <HeroFallback2D />
  }
);

export function HeroSection() {
  const [selectedNode, setSelectedNode] = useState<NodeData>(HERO_NODES_DATA[0]);

  // Memoized callback so reference never changes across re-renders
  const handleNodeHover = useCallback((node: NodeData | null) => {
    if (node) {
      setSelectedNode(node);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 bg-gradient-to-b from-white via-surface-ground to-white">
      {/* Premium Atmospheric Lighting Background (Replaces canvas grid with executive light auras) */}
      <div className="absolute -top-32 right-0 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-gradient-to-bl from-brand-200/35 via-brand-100/20 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-[480px] sm:w-[700px] h-[480px] sm:h-[700px] bg-gradient-to-tr from-titanium-200/30 via-titanium-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(79,156,176,0.08)_0%,_rgba(189,162,139,0.05)_40%,_transparent_75%)] pointer-events-none" />

      {/* Subtle Aerospace Precision Orbital Rings (Technical minimal accent) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[750px] h-[750px] pointer-events-none opacity-40 hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-slate-300">
          <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 12" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 9" />
          <circle cx="400" cy="400" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="400" y1="10" x2="400" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="400" y1="760" x2="400" y2="790" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="400" x2="40" y2="400" stroke="currentColor" strokeWidth="1" />
          <line x1="760" y1="400" x2="790" y2="400" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Eyebrow */}
            <div className="mb-4">
              <Badge variant="teal" size="md">
                NEXAGENT / INTELLIGENT TECHNOLOGY
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.1] mb-6">
              BUILDING <span className="text-brand-800">INTELLIGENT SYSTEMS</span> FOR THE BUSINESSES OF THE WORLD.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              NexAgent builds AI-powered software, automation and digital systems that help businesses reduce operational friction, connect workflows and operate more intelligently.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Button
                href="/strategy-call"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                BOOK A STRATEGY CALL
              </Button>
              <Button
                href="/technology"
                variant="outline"
                size="lg"
              >
                EXPLORE OUR TECHNOLOGY
              </Button>
            </div>

            {/* System Status Indicators */}
            <div className="w-full pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                <span>FOUNDER-LED ENGINEERING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span>HYBRID TECHNOLOGY MODEL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-titanium-500" />
                <span>GLOBAL ORIENTATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Intelligence Network */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center">
            {/* Visual Luxury Stage with Double-layer Glass Border */}
            <div className="w-full relative rounded-3xl p-[1px] bg-gradient-to-br from-white via-brand-200/50 to-titanium-200/50 shadow-[0_20px_50px_rgba(26,59,70,0.07),0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="w-full relative rounded-[23px] bg-gradient-to-b from-white/95 via-surface-ground/75 to-white/95 backdrop-blur-xl overflow-hidden p-2 sm:p-3">
                {/* Radial spotlight behind the 3D core */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,156,176,0.12)_0%,_transparent_70%)] pointer-events-none" />

                {/* Top Ambient Bar */}
                <div className="relative flex items-center justify-between px-3 pt-2 pb-1 text-slate-400 text-[10px] font-mono border-b border-slate-100/80">
                  <span className="flex items-center gap-1.5 text-brand-700 font-medium">
                    <Cpu className="w-3 h-3 text-brand-600" />
                    NEXUS GRAPH ENGINE v2.4
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Radio className="w-2.5 h-2.5 text-emerald-500 animate-pulse" />
                    LIVE TELEMETRY
                  </span>
                </div>

                <HeroNetwork3D onNodeHover={handleNodeHover} />

                {/* Real-time Telemetry Overlay Card with Dynamic Accent Border */}
                <div
                  className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs p-4 bg-white/95 backdrop-blur-md rounded-xl border shadow-elevated transition-all duration-300 z-30"
                  style={{
                    borderColor: `${selectedNode.color}45`,
                    boxShadow: `0 12px 30px -10px ${selectedNode.color}30, 0 2px 6px rgba(0,0,0,0.03)`
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider font-bold flex items-center gap-1.5"
                      style={{ color: selectedNode.color }}
                    >
                      <Activity className="w-3 h-3 animate-pulse-subtle" />
                      {selectedNode.name}
                    </span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 font-medium">
                      {selectedNode.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-700 leading-relaxed">
                    {selectedNode.description}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      Interactive WebGL Scene
                    </span>
                    <span>Hover or tap nodes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
