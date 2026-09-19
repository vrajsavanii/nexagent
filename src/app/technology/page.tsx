import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CAPABILITY_LAYERS } from "@/data/capabilities";
import { CheckCircle2, ArrowRight, Cpu, Workflow, Layers, Server, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & Capability Architecture",
  description:
    "Explore NexAgent's engineered technology stack across Intelligence, Automation, Applications, Infrastructure, and Data."
};

export default function TechnologyPage() {
  const layerIcons: Record<string, React.ElementType> = {
    intelligence: Cpu,
    automation: Workflow,
    applications: Layers,
    infrastructure: Server,
    data: Database
  };

  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="SYSTEM SPECIFICATION"
          badgeVariant="teal"
          title="ENGINEERED TECHNOLOGY FOR COMPLEX BUSINESSES."
          subtitle="Our engineering framework bridges non-deterministic machine intelligence with deterministic enterprise software, providing resilient execution across five core architectural tiers."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {CAPABILITY_LAYERS.map((layer) => {
            const Icon = layerIcons[layer.id] || Cpu;

            return (
              <section
                key={layer.id}
                id={layer.id}
                className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-brand-50 text-brand-700 shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-brand-700 uppercase tracking-wider block mb-1">
                        TIER // {layer.name}
                      </span>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                        {layer.tagline}
                      </h2>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-slate-600 max-w-md leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {layer.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display font-bold text-lg text-slate-900">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[10px] uppercase text-slate-400">
                            SPEC 0{idx + 1}
                          </span>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="mb-4">
                          <span className="font-mono text-[10px] uppercase text-slate-400 block mb-2">
                            Key Functional Capabilities
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200/70">
                        <span className="font-mono text-[10px] uppercase text-brand-700 font-bold block mb-1">
                          Implementation Mechanism
                        </span>
                        <p className="font-mono text-xs text-slate-600 leading-snug">
                          {item.technicalDetails}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">
              Discuss Your Technical Architecture
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300">
              Schedule an architecture diagnosis with our technical co-founders.
            </p>
          </div>
          <Button
            href="/strategy-call"
            variant="primary"
            size="md"
            className="bg-white hover:bg-slate-100 text-brand-950 border-none shadow-md shrink-0"
            icon={<ArrowRight className="w-4 h-4 text-brand-900" />}
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
}
