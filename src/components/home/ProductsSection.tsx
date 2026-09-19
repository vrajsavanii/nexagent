"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import { PRODUCTS_DATA, PRODUCTS_NOTE } from "@/data/products";
import { CheckCircle2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductsSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="PRODUCTS & PLATFORMS"
            badgeVariant="teal"
            title="PROPRIETARY TECHNOLOGY PLATFORMS."
            subtitle={PRODUCTS_NOTE}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS_DATA.map((product, idx) => {
            const isTeal = product.statusColor === "teal";
            const isTitanium = product.statusColor === "titanium";

            return (
              <FadeIn key={product.id} direction="up" delay={idx * 120}>
                <div
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-brand-400 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm border",
                          isTeal
                            ? "bg-brand-50 text-brand-800 border-brand-200"
                            : isTitanium
                            ? "bg-titanium-50 text-titanium-800 border-titanium-200"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        )}
                      >
                        {product.status}
                      </span>
                      <Terminal className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 mb-4">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                        Problem Solved
                      </span>
                      <p className="font-sans text-xs text-slate-600 leading-relaxed">
                        {product.problem}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 mb-4">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1.5">
                        Core Platform Capabilities
                      </span>
                      <ul className="flex flex-col gap-1.5">
                        {product.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="font-sans text-xs text-slate-700 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                      Target Deployment
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-800">
                      {product.targetCustomer}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
