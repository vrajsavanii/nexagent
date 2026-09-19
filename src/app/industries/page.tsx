import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES_DATA } from "@/data/industries";
import { ArrowRight, AlertCircle, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Workflow Applications",
  description:
    "Explore examples of how NexAgent applies systems engineering and automation across Healthcare, Hospitality, B2B, Retail, Professional Services, and FinTech."
};

export default function IndustriesPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="CROSS-INDUSTRY ENGINEERING"
          badgeVariant="teal"
          title="DIFFERENT INDUSTRIES. DIFFERENT WORKFLOWS. ONE ENGINEERING MINDSET."
          subtitle="Examples of where NexAgent technology can be applied. Rather than claiming exclusive vertical monopolies, we bring disciplined systems engineering, reliable automation pipelines, and modern software design to high-friction operational environments."
        />

        <div className="flex flex-col gap-16">
          {INDUSTRIES_DATA.map((ind, index) => (
            <section
              key={ind.id}
              id={ind.id}
              className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-100">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-0.5 rounded-sm bg-brand-50 border border-brand-200 inline-block mb-2">
                    SECTOR APPLICATION 0{index + 1}
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    {ind.name}
                  </h2>
                </div>

                <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md font-medium leading-relaxed">
                  {ind.tagline}
                </p>
              </div>

              {/* Potential Customers & Key Problems */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    Potential Client Profiles
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.potentialCustomers.map((customer, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs"
                      >
                        {customer}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    Representative Technology Applications
                  </span>
                  <ul className="flex flex-col gap-2">
                    {ind.potentialApplications.map((app, aIdx) => (
                      <li key={aIdx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Operational Friction Addressed
                    </span>
                    <ul className="flex flex-col gap-3">
                      {ind.keyProblems.map((prob, pIdx) => (
                        <li key={pIdx} className="font-sans text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {ind.complianceDisclaimer && (
                    <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5 text-amber-900 text-xs leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p>{ind.complianceDisclaimer}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* End-to-End Workflow Architecture Diagram */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-ground border border-slate-200/80 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block">
                      End-to-End Execution Sequence
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {ind.workflowExample.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-sm">
                    Deterministic Workflow
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-600 mb-6">
                  {ind.workflowExample.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {ind.workflowExample.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[9px] uppercase font-bold text-brand-700">
                          STEP 0{sIdx + 1}
                        </span>
                        {sIdx < ind.workflowExample.steps.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-slate-300 hidden lg:block" />
                        )}
                      </div>
                      <h4 className="font-display font-bold text-xs text-slate-900 mb-1">
                        {step.label}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-500 leading-snug">
                        {step.subtext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <Button
                  href={`/strategy-call?industry=${ind.id}`}
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Consult on {ind.name} Workflows
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
