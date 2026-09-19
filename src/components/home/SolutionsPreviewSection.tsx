"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function SolutionsPreviewSection() {
  // Select top 6 featured solutions for homepage preview
  const featuredSolutions = SOLUTIONS_DATA.slice(0, 6);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="SOLUTIONS & ARCHITECTURES"
            badgeVariant="titanium"
            title="TECHNOLOGY BUILT AROUND BUSINESS PROBLEMS."
            subtitle="Every system we engineer starts with an operational diagnosis. Here is how our technical capabilities map directly to real-world business challenges."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredSolutions.map((sol, idx) => (
            <FadeIn key={sol.id} direction="up" delay={idx * 90}>
              <div
                className="flex flex-col justify-between p-7 rounded-2xl bg-surface-ground border border-slate-200/90 shadow-2xs hover:border-brand-400 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full group"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-700 font-bold px-2 py-0.5 rounded-sm bg-brand-50 border border-brand-200 inline-block mb-3">
                    {sol.title}
                  </span>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-900 transition-colors">
                    {sol.shortDescription}
                  </h3>

                  <div className="mb-4">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                      The Problem
                    </span>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {sol.problem}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                      Engineering Approach
                    </span>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {sol.approach}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-200/70">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block">
                      Typical Applications
                    </span>
                    {sol.typicalApplications.slice(0, 3).map((app, appIdx) => (
                      <div key={appIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="font-display text-xs font-semibold text-brand-800 hover:text-brand-950 flex items-center justify-between group/link"
                  >
                    <span>View Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={200} className="flex justify-center">
          <Button
            href="/solutions"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All 12 Solutions
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
