"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, Sparkles, Terminal, Activity } from "lucide-react";
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

  return (
    <section className="relative w-full overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 bg-gradient-to-b from-white via-surface-ground to-white">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-fade bg-gradient-to-b from-brand-100/40 via-transparent to-transparent pointer-events-none" />

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
            {/* Visual Canvas Container */}
            <div className="w-full relative rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md shadow-premium p-1 sm:p-2">
              <HeroNetwork3D
                onNodeHover={(node) => {
                  if (node) setSelectedNode(node);
                }}
              />

              {/* Real-time Telemetry Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs p-4 bg-white/95 backdrop-blur-md rounded-xl border border-brand-200/80 shadow-elevated transition-all duration-200 z-30">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-700 font-bold flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-brand-500 animate-pulse-subtle" />
                    {selectedNode.name}
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 font-medium">
                    {selectedNode.category}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-700 leading-relaxed">
                  {selectedNode.description}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>Interactive WebGL Scene</span>
                  <span>Hover or tap nodes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
