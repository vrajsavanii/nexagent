"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { COMPANY_DATA } from "@/data/company";
import { ShieldCheck, Cpu, Sparkles } from "lucide-react";

export function FoundersSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="OWNERSHIP & LEADERSHIP"
            badgeVariant="titanium"
            title="BUILT BY TWO FOUNDERS. BUILT FOR THE LONG TERM."
            subtitle="NexAgent is a founder-led technology company founded and owned equally by two co-founders. With equal equity and complementary engineering and product disciplines, our focus remains on long-term technological excellence rather than short-term vanity metrics."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {COMPANY_DATA.founders.map((founder, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 150}>
              <div className="p-8 rounded-2xl bg-surface-ground border border-slate-200/90 shadow-2xs hover:border-brand-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 group-hover:scale-110">
                      {idx === 0 ? <Cpu className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-1 rounded-sm bg-brand-50 border border-brand-200">
                      CO-FOUNDER 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-1">
                    {founder.title}
                  </h3>

                  <span className="font-mono text-xs text-titanium-700 font-semibold block mb-4">
                    {founder.ownership}
                  </span>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Governance & Credibility Statement */}
        <FadeIn direction="up" delay={300}>
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-brand-50/60 border border-brand-200/80 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-brand-700" />
              <span className="font-mono text-xs uppercase tracking-wider text-brand-900 font-bold">
                GOVERNANCE INTEGRITY
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              We intentionally do not claim imaginary board members, inflated executive headcount, or artificial global divisions. When you engage with NexAgent, you engage directly with the founders and engineers building your systems.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
