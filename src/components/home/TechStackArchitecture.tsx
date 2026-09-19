"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { CAPABILITY_LAYERS, CapabilityLayer } from "@/data/capabilities";
import { CheckCircle2, ChevronRight, Cpu, Layers, Workflow, Server, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export function TechStackArchitecture() {
  const [activeLayer, setActiveLayer] = useState<CapabilityLayer>(CAPABILITY_LAYERS[0]);

  const layerIcons: Record<string, React.ElementType> = {
    intelligence: Cpu,
    automation: Workflow,
    applications: Layers,
    infrastructure: Server,
    data: Database
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="04 / ARCHITECTURE"
          badgeVariant="titanium"
          title="THE NEXAGENT TECHNOLOGY STACK."
          subtitle="An engineered, multi-tier architecture connecting machine cognition with deterministic enterprise execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stack Layers Navigator */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
              Select Architectural Tier
            </span>

            {CAPABILITY_LAYERS.map((layer) => {
              const Icon = layerIcons[layer.id] || Cpu;
              const isSelected = activeLayer.id === layer.id;

              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayer(layer)}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-200",
                    isSelected
                      ? "bg-brand-900 text-white border-brand-950 shadow-md scale-[1.01]"
                      : "bg-surface-ground border-slate-200/90 text-slate-700 hover:bg-white hover:border-slate-300"
                  )}
                >
                  <div
                    className={cn(
                      "p-2.5 rounded-lg shrink-0 mt-0.5",
                      isSelected
                        ? "bg-brand-800 text-brand-200"
                        : "bg-white border border-slate-200 text-slate-700"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs uppercase tracking-wider font-bold">
                        {layer.name}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-subtle" />
                      )}
                    </div>
                    <p
                      className={cn(
                        "text-xs leading-relaxed font-sans",
                        isSelected ? "text-slate-200" : "text-slate-500"
                      )}
                    >
                      {layer.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Detailed Engineering Deep-Dive */}
          <div className="lg:col-span-7 bg-surface-ground rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
            <div className="flex flex-col gap-2 pb-6 mb-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brand-700 uppercase tracking-wider">
                  TIER DEEP DIVE // {activeLayer.name}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-brand-50 text-brand-800 border border-brand-200">
                  {activeLayer.items.length} Production Systems
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                {activeLayer.tagline}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {activeLayer.description}
              </p>
            </div>

            {/* Modules inside selected layer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeLayer.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-col gap-1.5 mb-4">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                      Technical Architecture
                    </span>
                    <p className="font-mono text-[10px] text-slate-600 leading-snug">
                      {item.technicalDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
