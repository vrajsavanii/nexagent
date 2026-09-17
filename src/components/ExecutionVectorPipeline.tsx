'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';

interface PipelineStage {
  id: string;
  step: string;
  verb: string;
  verbDesc: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  specs: string[];
}

const pipelineStages: PipelineStage[] = [
  {
    id: 'ai',
    step: 'STAGE 01',
    verb: 'REASON',
    verbDesc: 'Cognitive reasoning & multi-modal comprehension',
    title: 'Cognitive AI',
    subtitle: 'Proprietary Fine-Tuned Models & Neural Architectures',
    badge: 'Neural Core',
    description:
      'Domain-adapted generative models and hybrid retrieval systems engineered for sub-second semantic comprehension and enterprise precision.',
    specs: ['Multi-modal data ingestion', 'Custom hallucination guardrails', 'Private fine-tuned weights'],
  },
  {
    id: 'agents',
    step: 'STAGE 02',
    verb: 'COMMUNICATE',
    verbDesc: 'Contextual dialogue & stakeholder coordination',
    title: 'Autonomous Agents',
    subtitle: 'Context-Aware Decision Making & Tool Execution',
    badge: 'Active Orchestration',
    description:
      'Autonomous goal-seeking AI agents capable of cross-tool execution, dynamic exception handling, and multi-step business transactions.',
    specs: ['Self-healing workflow loops', 'Multi-agent consensus validation', 'Automated tool invoking'],
  },
  {
    id: 'automation',
    step: 'STAGE 03',
    verb: 'EXECUTE',
    verbDesc: 'Deterministic API triggers & transactional execution',
    title: 'Workflow Automation',
    subtitle: 'High-Reliability Event Buses & Enterprise Integrations',
    badge: 'Real-Time Sync',
    description:
      'Headless event bus coordinating distributed enterprise APIs, webhooks, and core business operations with zero human latency.',
    specs: ['Sub-10ms event triggers', 'Idempotent state reconciliation', 'End-to-end audit logging'],
  },
  {
    id: 'software',
    step: 'STAGE 04',
    verb: 'CONNECT',
    verbDesc: 'Harmonizing operational silos & interfaces',
    title: 'Enterprise Software',
    subtitle: 'Reactive Interfaces & Operations Command Centers',
    badge: 'High Performance',
    description:
      'Ultra-responsive operational dashboards, executive cockpits, and customer-facing digital applications built for immense scale.',
    specs: ['Sub-second interface response', 'Offline-first sync capabilities', 'Role-based access control (RBAC)'],
  },
  {
    id: 'infrastructure',
    step: 'STAGE 05',
    verb: 'SCALE',
    verbDesc: 'Global edge resilience & sovereign security',
    title: 'Cloud Infrastructure',
    subtitle: 'Dedicated Private Clouds & Resilient Edge Networks',
    badge: 'Enterprise Security',
    description:
      'High-throughput computing fabric, low-latency edge topology, and zero-trust security boundaries.',
    specs: ['Tier-IV data isolation', 'Air-gapped deployment option', 'Global edge distribution'],
  },
  {
    id: 'business',
    step: 'STAGE 06',
    verb: 'AUTOMATE',
    verbDesc: 'Compound organizational leverage & velocity',
    title: 'Business Scale',
    subtitle: 'Measurable Velocity, Revenue & Operational Leverage',
    badge: 'Autonomous Impact',
    description:
      'Exponential operational leverage, elimination of headcount bottlenecks, and continuous 24/7 revenue acceleration.',
    specs: ['Up to 74% manual task reduction', '4.8x deal velocity acceleration', 'Real-time executive visibility'],
  },
];

export default function ExecutionVectorPipeline() {
  const [activeStage, setActiveStage] = useState<PipelineStage>(pipelineStages[0]);

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="intelligence-to-action">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                INTELLIGENCE TO ACTION
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                INTELLIGENCE MEANS NOTHING UNTIL IT MOVES.
              </h2>
            </div>
            <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
              AI ↓ AGENTS ↓ AUTOMATION ↓ SOFTWARE ↓ INFRASTRUCTURE ↓ BUSINESS
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Capability Verbs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {['REASON', 'COMMUNICATE', 'EXECUTE', 'CONNECT', 'AUTOMATE'].map((verb, idx) => (
            <div
              key={verb}
              className="p-3 bg-surface-container-low border border-outline-variant/40 flex items-center justify-between"
            >
              <span className="font-label-code text-label-code uppercase font-semibold text-on-surface">
                {verb}
              </span>
              <span className="font-mono text-[10px] text-primary">0{idx + 1}</span>
            </div>
          ))}
        </div>

        {/* Pipeline Progression Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6-Stage Timeline List */}
          <div className="lg:col-span-6 space-y-3">
            {pipelineStages.map((stage, idx) => {
              const isActive = activeStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`w-full text-left p-5 border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-surface-container-lowest border-primary shadow-sm'
                      : 'bg-surface-container-low/60 border-outline-variant/40 hover:border-outline-variant hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 ${
                        isActive
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container border border-outline-variant/50 text-on-surface-variant'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface">
                        {stage.title}
                      </h4>
                      <p className="font-mono text-[11px] text-primary uppercase mt-0.5">
                        {stage.verb} — {stage.verbDesc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform ${
                      isActive ? 'text-primary translate-x-1' : 'text-outline group-hover:translate-x-0.5'
                    }`}
                  >
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Stage Architectural Blueprint Card */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-surface-container-lowest border border-outline-variant/60 p-8 space-y-6 shadow-sm"
              >
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    <span className="font-label-code text-label-code uppercase font-semibold text-primary">
                      {activeStage.badge}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-outline">{activeStage.step} // ACTIVE ARCHITECTURE</span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase text-primary font-bold tracking-wider">
                    FUNCTION: {activeStage.verb}
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase font-semibold text-on-surface">
                    {activeStage.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {activeStage.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                  <span className="font-micro-annotation text-micro-annotation uppercase text-outline font-semibold block">
                    ENGINEERING SPECIFICATIONS
                  </span>
                  <div className="space-y-2">
                    {activeStage.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2.5 font-mono text-xs text-on-surface">
                        <span className="w-1.5 h-1.5 bg-primary rounded-none flex-shrink-0"></span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-surface-container-low border border-outline-variant/30 font-mono text-[11px] text-on-surface-variant flex items-center justify-between">
                  <span>TELEMETRY: SYNCHRONIZED</span>
                  <span className="text-primary font-bold">LATENCY &lt; 12MS</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
