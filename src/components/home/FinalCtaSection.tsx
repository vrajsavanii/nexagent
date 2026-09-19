import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-brand-100/30 via-surface-ground/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-brand-900 via-brand-950 to-slate-950 text-white shadow-elevated relative overflow-hidden text-center">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-titanium-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-300 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/15">
                START YOUR ENGAGEMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6 text-white">
              READY TO BUILD INTELLIGENT SYSTEMS FOR YOUR BUSINESS?
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
              Partner directly with our technical team to diagnose operational bottlenecks, architect custom software, and deploy fault-tolerant automation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="/strategy-call"
                variant="primary"
                size="lg"
                className="bg-white hover:bg-slate-100 text-brand-950 border-none shadow-md"
                icon={<ArrowRight className="w-4 h-4 text-brand-900" />}
              >
                BOOK A STRATEGY CALL
              </Button>
              <Button
                href="/technology"
                variant="outline"
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border-white/20 hover:border-white/40 shadow-none"
              >
                Explore Technology
              </Button>
            </div>

            {/* Reassurances */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>DIRECT FOUNDER DIAGNOSIS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-400" />
                <span>DETAILED TECHNICAL SCOPE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>NO FABRICATED PROMISES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
