import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Compass,
  Search,
  Cpu,
  Code2,
  Network,
  Rocket,
  LineChart
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    tagline: "Understand the business.",
    description: "We immerse ourselves in your operating model, team roles, commercial objectives, and existing software stack.",
    icon: Compass
  },
  {
    number: "02",
    title: "DIAGNOSE",
    tagline: "Identify bottlenecks and opportunities.",
    description: "We audit repetitive manual handoffs, data re-entry points, and system friction points costing team hours.",
    icon: Search
  },
  {
    number: "03",
    title: "ARCHITECT",
    tagline: "Design the technical solution.",
    description: "We map the data flow schemas, agentic logic graphs, API boundaries, security models, and verification checkpoints.",
    icon: Cpu
  },
  {
    number: "04",
    title: "BUILD",
    tagline: "Develop software, AI and automation.",
    description: "Our engineering team writes clean, typed code, sets up state machines, trains/tunes models, and crafts responsive UI.",
    icon: Code2
  },
  {
    number: "05",
    title: "INTEGRATE",
    tagline: "Connect existing systems.",
    description: "We deploy middleware and webhook brokers linking your legacy databases, CRM, communication tools, and ERP.",
    icon: Network
  },
  {
    number: "06",
    title: "DEPLOY",
    tagline: "Put the solution into operation.",
    description: "We launch staging simulations, validate end-to-end data integrity, and transition to live production operations.",
    icon: Rocket
  },
  {
    number: "07",
    title: "OPTIMIZE",
    tagline: "Measure and improve.",
    description: "We monitor execution latency, error rates, and user feedback, refining models and logic for continuous throughput.",
    icon: LineChart
  }
];

export function HowWeWorkSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="09 / METHODOLOGY"
          badgeVariant="teal"
          title="HOW NEXAGENT WORKS."
          subtitle="A disciplined, seven-phase engineering process turning operational ambiguity into reliable digital infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-brand-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-1">
                    {step.title}
                  </h3>

                  <p className="font-mono text-xs text-brand-700 font-semibold mb-3">
                    {step.tagline}
                  </p>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>DISCIPLINED QA</span>
                  <span>PRODUCTION GRADE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
