"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { COMPANY_DATA } from "@/data/company";
import { Globe2 } from "lucide-react";

export function LongTermVisionSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="VISION & GLOBAL ORIENTATION"
            badgeVariant="teal"
            title={COMPANY_DATA.vision.heading}
            subtitle={COMPANY_DATA.vision.subheading}
          />
        </FadeIn>

        {/* Vision Narrative Box */}
        <FadeIn direction="up" delay={100}>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-premium mb-12 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-titanium-400 to-brand-500 opacity-60 group-hover:opacity-100 transition-opacity" />
            <p className="font-display font-semibold text-lg sm:text-xl lg:text-2xl text-slate-900 leading-relaxed mb-6">
              &ldquo;{COMPANY_DATA.vision.statement}&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our long-term trajectory encompasses specialized technology platforms, industry-specific automation kernels, and resilient digital infrastructure. We present future ambitions not as manufactured current claims, but as our unwavering engineering roadmap.
            </p>
          </div>
        </FadeIn>

        {/* Global Commercial Focus Cards */}
        <FadeIn direction="up" delay={200} className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
              Global Ambition & Commercial Focus
            </span>
            <p className="font-sans text-xs text-slate-500">
              Distributed collaboration with commercial orientation across four key technology corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_DATA.globalFocus.map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={250 + idx * 75}>
                <div
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-brand-400 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full group"
                >
                  <div>
                    <Globe2 className="w-4 h-4 text-brand-600 mb-2 transition-transform duration-300 group-hover:rotate-12" />
                    <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                      {item.country}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
