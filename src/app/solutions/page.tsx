import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Catalog & Capability Portfolio",
  description:
    "Comprehensive overview of NexAgent's 12 core business solutions across automation, AI agents, custom software, CRM, and digital infrastructure."
};

export default function SolutionsPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="SOLUTIONS CATALOG"
          badgeVariant="titanium"
          title="TECHNOLOGY BUILT AROUND BUSINESS PROBLEMS."
          subtitle="Explore all 12 core capability areas engineered by NexAgent. Every solution pairs custom software with intelligent automation to eliminate operational friction."
        />

        <div className="flex flex-col gap-12">
          {SOLUTIONS_DATA.map((sol, index) => (
            <article
              key={sol.id}
              id={sol.id}
              className="scroll-mt-24 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-premium"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-0.5 rounded-sm bg-brand-50 border border-brand-200 inline-block mb-2">
                    SOLUTION 0{index + 1}
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    {sol.title}
                  </h2>
                </div>
                <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-medium">
                  {sol.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Problem vs Approach */}
                <div className="flex flex-col gap-5">
                  <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <span className="font-mono text-xs uppercase tracking-wider text-rose-800 font-bold block mb-1">
                      The Operational Problem
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {sol.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-50/50 border border-brand-100">
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-800 font-bold block mb-1">
                      The NexAgent Approach
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {sol.approach}
                    </p>
                  </div>
                </div>

                {/* Applications & Highlights */}
                <div className="flex flex-col justify-between p-6 rounded-2xl bg-surface-ground border border-slate-200/80">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Typical Real-World Applications
                    </span>
                    <ul className="flex flex-col gap-2 mb-6">
                      {sol.typicalApplications.map((app, idx) => (
                        <li key={idx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-2">
                      Engineering Principles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.engineeringHighlights.map((hl, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution Architecture Pipeline */}
              <div className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                  System Architecture Pipeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {sol.architectureSteps.map((step, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase font-bold text-brand-700 block mb-1">
                          STAGE 0{idx + 1} // {step.stage}
                        </span>
                        <p className="font-sans text-xs text-slate-600 leading-snug">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="font-display text-xs font-semibold text-brand-800 hover:text-brand-950 flex items-center gap-1.5"
                >
                  <span>Detailed Architecture Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Button
                  href={`/strategy-call?solution=${sol.slug}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Consult on this Solution
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
