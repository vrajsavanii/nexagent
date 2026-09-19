import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PRODUCTS_DATA, PRODUCTS_NOTE } from "@/data/products";
import { CheckCircle2, Terminal, Shield, ArrowRight, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Proprietary Products & Reusable Platforms",
  description:
    "Explore NexAgent's evolving proprietary technology platforms and reusable software architectures."
};

export default function ProductsPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="PORTFOLIO EVOLUTION"
          badgeVariant="titanium"
          title="PROPRIETARY PRODUCTS & REUSABLE PLATFORMS."
          subtitle={PRODUCTS_NOTE}
        />

        {/* Operating Model Clarification Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-slate-900 mb-1">
                Truth in Technology Portfolio
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in total transparency. NexAgent does not manufacture fake customer counts or claim established standalone commercial products before they are ready. Our platforms represent core execution kernels, telephony gateways, and knowledge engines engineered internally and validated through client deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRODUCTS_DATA.map((product) => {
            const isTeal = product.statusColor === "teal";
            const isTitanium = product.statusColor === "titanium";

            return (
              <div
                key={product.id}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-premium flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-sm border",
                        isTeal
                          ? "bg-brand-50 text-brand-800 border-brand-200"
                          : isTitanium
                          ? "bg-titanium-50 text-titanium-800 border-titanium-200"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      )}
                    >
                      {product.status}
                    </span>
                    <Terminal className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 mb-5">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                      Problem Solved
                    </span>
                    <p className="font-sans text-xs text-slate-700 leading-relaxed">
                      {product.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mb-5">
                    <span className="font-mono text-[10px] uppercase text-brand-700 font-bold block mb-1">
                      Engineered Solution
                    </span>
                    <p className="font-sans text-xs text-slate-700 leading-relaxed">
                      {product.solution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-2">
                      Core Platform Capabilities
                    </span>
                    <ul className="flex flex-col gap-2">
                      {product.capabilities.map((cap, idx) => (
                        <li key={idx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                    Target Deployment
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-800">
                    {product.targetCustomer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Updates / Notification Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-900 text-white max-w-3xl mx-auto text-center flex flex-col items-center shadow-elevated">
          <div className="p-3 rounded-2xl bg-white/10 text-brand-300 mb-4">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-2xl mb-2">
            Stay Informed as Our Platforms Mature
          </h3>
          <p className="font-sans text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
            Register to receive technical release notes, whitepapers, and private developer beta announcements as NexAgent platforms transition to commercial availability.
          </p>
          <Button
            href="/strategy-call?interest=platform-updates"
            variant="primary"
            size="lg"
            className="bg-white hover:bg-slate-100 text-brand-950 border-none shadow-md"
            icon={<ArrowRight className="w-4 h-4 text-brand-900" />}
          >
            Request Technical Updates
          </Button>
        </div>
      </div>
    </div>
  );
}
