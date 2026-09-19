import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrategyCallForm } from "@/components/forms/StrategyCallForm";
import { ShieldCheck, Clock, Users, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Call | NexAgent",
  description:
    "Schedule a direct architecture diagnosis with NexAgent's technical co-founders to map your operational bottlenecks and explore intelligent automation solutions."
};

export default function StrategyCallPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="INTAKE & DIAGNOSIS"
          badgeVariant="teal"
          title="BOOK A TECHNICAL STRATEGY CALL."
          subtitle="Partner directly with our engineering founders to diagnose your team's operational friction, audit current software touchpoints, and evaluate high-leverage automation opportunities."
        />

        {/* Value Reassurances */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <Users className="w-5 h-5 text-brand-600 shrink-0" />
            <div>
              <span className="font-display font-bold text-xs text-slate-900 block">
                Direct Founder Engagement
              </span>
              <span className="font-sans text-[11px] text-slate-500">
                No intermediate sales reps
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <Clock className="w-5 h-5 text-brand-600 shrink-0" />
            <div>
              <span className="font-display font-bold text-xs text-slate-900 block">
                30-Minute Deep Diagnosis
              </span>
              <span className="font-sans text-[11px] text-slate-500">
                Focused technical inquiry
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
            <div>
              <span className="font-display font-bold text-xs text-slate-900 block">
                Zero Sales Pressure
              </span>
              <span className="font-sans text-[11px] text-slate-500">
                Architectural guidance first
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Step Intake Form */}
        <StrategyCallForm />
      </div>
    </div>
  );
}
