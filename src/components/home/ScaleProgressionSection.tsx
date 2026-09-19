"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

interface ScaleStage {
  step: string;
  title: string;
  subtitle: string;
  scope: string;
  deliverables: string[];
}

const STAGES: ScaleStage[] = [
  {
    step: "01",
    title: "ONE TASK",
    subtitle: "Eliminating an immediate, high-friction operational bottleneck.",
    scope: "Targeted single-function automation",
    deliverables: ["Automated document extraction", "Single-point webhook listener", "Invoice processing script"]
  },
  {
    step: "02",
    title: "ONE WORKFLOW",
    subtitle: "Linking an end-to-end procedural sequence across 2-3 tools.",
    scope: "Multi-step operational pathway",
    deliverables: ["Inbound lead qualification pipeline", "Customer intake to calendar booking", "Staff approval routing"]
  },
  {
    step: "03",
    title: "MULTIPLE WORKFLOWS",
    subtitle: "Harmonizing interconnected operational handoffs across a department.",
    scope: "Departmental automation layer",
    deliverables: ["Complete sales-to-finance handoff", "Automated guest inquiry and dispatch", "Support ticket triage & RAG"]
  },
  {
    step: "04",
    title: "CONNECTED SYSTEMS",
    subtitle: "Unifying CRM, ERP, transactional databases, and communication APIs.",
    scope: "Enterprise middleware & integration",
    deliverables: ["Event broker with guaranteed delivery", "Bidirectional database synchronization", "Bespoke management dashboard"]
  },
  {
    step: "05",
    title: "INTELLIGENT BUSINESS ENVIRONMENT",
    subtitle: "Autonomous software agents coordinating multi-system operations with human oversight.",
    scope: "Autonomous operating architecture",
    deliverables: ["Agentic reasoning graphs", "Dynamic resource allocation", "Real-time executive command center"]
  }
];

export function ScaleProgressionSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="SCALE PROGRESSION"
            badgeVariant="titanium"
            title="START SMALL. BUILD SYSTEMS THAT CAN GROW."
            subtitle="NexAgent can work on a focused, single-task automation project or engineer broader multi-system infrastructure depending on your immediate business need. We do not force complex overengineering."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {STAGES.map((stage, idx) => (
            <FadeIn key={stage.step} direction="up" delay={idx * 100}>
              <div
                className="flex flex-col justify-between p-6 rounded-2xl bg-surface-ground border border-slate-200/80 shadow-2xs hover:border-brand-400 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-brand-50 text-brand-800 border border-brand-200">
                      STAGE {stage.step}
                    </span>
                    {idx < STAGES.length - 1 && (
                      <span className="text-slate-300 font-mono text-xs hidden lg:block group-hover:text-brand-500 transition-colors">→</span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-2 leading-snug group-hover:text-brand-900 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
                    {stage.subtitle}
                  </p>

                  <div className="pt-3 border-t border-slate-200/60 mb-4">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                      Typical Scope
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-800">
                      {stage.scope}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block">
                    Example Deliverables
                  </span>
                  {stage.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-brand-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
