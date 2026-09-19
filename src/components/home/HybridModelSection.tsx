"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { ArrowRight, Briefcase, Cpu, Repeat } from "lucide-react";

export function HybridModelSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="OPERATING MODEL"
            badgeVariant="titanium"
            title="WE BUILD FOR BUSINESSES. WE BUILD FOR OURSELVES TOO."
            subtitle="NexAgent operates on a hybrid technology model: partnering with organizations to solve high-friction business problems, while simultaneously abstracting reusable foundations into our internal software platforms."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Path 1: Client Solutions */}
          <FadeIn direction="left" delay={100}>
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-ground border border-slate-200/90 shadow-2xs hover:border-brand-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 group-hover:scale-110">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-1 rounded-sm bg-brand-50 border border-brand-200">
                    PATH 01
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-3">
                  CLIENT SOLUTIONS
                </h3>

                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                  We partner with businesses to diagnose operational bottlenecks, automate repetitive multi-system workflows, build custom software platforms, and integrate disconnected applications into unified interfaces.
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    <span>Custom engineering tailored to your exact organizational structure.</span>
                  </li>
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    <span>Full ownership of bespoke application code upon delivery.</span>
                  </li>
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    <span>Direct diagnostic engagement with our technical founders.</span>
                  </li>
                </ul>
              </div>

              <Button
                href="/strategy-call"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              >
                Consult on a Client Solution
              </Button>
            </div>
          </FadeIn>

          {/* Path 2: NexAgent Technology */}
          <FadeIn direction="right" delay={200}>
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-ground border border-slate-200/90 shadow-2xs hover:border-titanium-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-titanium-50 text-titanium-700 transition-transform duration-300 group-hover:scale-110">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-titanium-800 font-bold px-2.5 py-1 rounded-sm bg-titanium-50 border border-titanium-200">
                    PATH 02
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-3">
                  NEXAGENT TECHNOLOGY
                </h3>

                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                  We systematically extract high-performance patterns—orchestration kernels, low-latency telephony bridges, and retrieval pipelines—into internal software and reusable technology foundations.
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-titanium-600 shrink-0" />
                    <span>Battle-tested orchestration engines refined across live deployments.</span>
                  </li>
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-titanium-600 shrink-0" />
                    <span>Continuous compound engineering that accelerates every new project.</span>
                  </li>
                  <li className="font-sans text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-titanium-600 shrink-0" />
                    <span>Future-ready foundation for dedicated standalone platforms.</span>
                  </li>
                </ul>
              </div>

              <Button
                href="/products"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              >
                Explore Technology Portfolio
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Compound Velocity Narrative Banner */}
        <FadeIn direction="up" delay={300}>
          <div className="p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-slate-800">
            <div className="flex items-center gap-3">
              <Repeat className="w-5 h-5 text-brand-400 shrink-0 animate-spin-slow" />
              <p className="font-sans text-xs sm:text-sm text-slate-300">
                <strong className="text-white font-semibold">The Flywheel:</strong> Client systems expose authentic operational friction. Our internal engineering solves it permanently. Reusable platforms make subsequent systems faster and more resilient.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
