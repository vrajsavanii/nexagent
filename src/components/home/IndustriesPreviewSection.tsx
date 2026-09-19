"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import { ArrowRight, AlertCircle, Stethoscope, Hotel, Briefcase, ShoppingBag, Building2, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function IndustriesPreviewSection() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  const industryIcons: Record<string, React.ElementType> = {
    healthcare: Stethoscope,
    hospitality: Hotel,
    b2b: Briefcase,
    retail: ShoppingBag,
    "professional-services": Scale,
    "financial-technology": Building2
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="INDUSTRIES & DOMAINS"
            badgeVariant="teal"
            title="DIFFERENT INDUSTRIES. DIFFERENT WORKFLOWS. ONE ENGINEERING MINDSET."
            subtitle="Examples of where NexAgent technology can be applied. We do not claim exclusive specialization in any single vertical—we apply disciplined systems engineering to operational workflows."
          />
        </FadeIn>

        {/* Industry Tabs */}
        <FadeIn direction="up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = industryIcons[ind.id] || Briefcase;
              const isSelected = activeIndustry.id === ind.id;

              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIndustry(ind)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-200 border",
                    isSelected
                      ? "bg-brand-900 text-white border-brand-950 shadow-sm scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isSelected ? "text-brand-300" : "text-slate-500")} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Selected Industry Card & Interactive Workflow Visualization */}
        <FadeIn direction="up" delay={200}>
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-premium transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-6 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold">
                  WORKFLOW ARCHITECTURE // {activeIndustry.name}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                  {activeIndustry.tagline}
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {activeIndustry.workflowExample.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="font-mono text-[11px] text-slate-400 font-medium py-1">
                    Potential Customers:
                  </span>
                  {activeIndustry.potentialCustomers.map((c, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 p-5 rounded-xl bg-surface-ground border border-slate-200/80">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Core Operational Friction Addressed
                </span>
                <ul className="flex flex-col gap-2">
                  {activeIndustry.keyProblems.map((prob, idx) => (
                    <li key={idx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Workflow Sequence Visualization */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
                  {activeIndustry.workflowExample.title}
                </span>
                <span className="font-mono text-[10px] text-brand-600 font-semibold uppercase">
                  End-to-End Execution Sequence
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {activeIndustry.workflowExample.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-ground border border-slate-200/80 relative flex flex-col justify-between hover:border-brand-300 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] uppercase font-bold text-slate-400">
                        STEP 0{idx + 1}
                      </span>
                      {idx < activeIndustry.workflowExample.steps.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-300 hidden lg:block" />
                      )}
                    </div>
                    <h4 className="font-display font-bold text-xs text-slate-900 leading-tight mb-1">
                      {step.label}
                    </h4>
                    <p className="font-sans text-[11px] text-slate-500 leading-snug">
                      {step.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Regulatory Disclaimer (if present) */}
            {activeIndustry.complianceDisclaimer && (
              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-amber-900 text-xs leading-relaxed font-sans">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>{activeIndustry.complianceDisclaimer}</p>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={300} className="mt-10 flex justify-center">
          <Button
            href="/industries"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All Industry Implementations
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
