'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Layers, ShieldCheck, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

interface ConfiguratorTeaserProps {
  onOpenStrategyCall: () => void;
}

export default function ConfiguratorTeaser({ onOpenStrategyCall }: ConfiguratorTeaserProps) {
  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeUpVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-white" />
                <span>Dedicated Solution Architect</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Build your custom operational architecture in 4 steps.
            </motion.h2>

            <motion.p variants={fadeUpVariants} className="text-base text-zinc-400 max-w-xl leading-relaxed">
              Every facility has distinct departmental hand-offs. Use our interactive architect to configure custom ingestion feeds, policy boundaries, and mandatory human sign-off gates.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="space-y-2.5 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>6 Industry Blueprints (Healthcare, Hospitality, B2B, Retail, Legal, Fintech)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Deterministic 4-Tier Blueprint generated in real-time</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Pilot onboarding directly with founders Manthan Kachhadiya &amp; Vraj Savani</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/setup"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#09090b] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg group"
              >
                <span>Launch Interactive Architect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenStrategyCall}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                Request Live Pilot
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Blueprint Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-xs font-mono text-zinc-400 ml-2">architecture-blueprint.spec</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/15">
                  LIVE ENGINE
                </span>
              </div>

              {/* 4-Tier Graphic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-white" />
                    <span>01. Ingestion Feeds</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    HL7/FHIR hospital streams, EMR queues, webhooks, and raw customer signals normalized into typed JSON schemas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-white" />
                    <span>02. Deterministic Policies</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    Hardcoded enterprise rules, clinical triage guidelines, and credit thresholds evaluated with zero LLM hallucinations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-white" />
                    <span>03. Autonomous Actions</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    Housekeeping dispatches, dynamic nightly rate sync, and automated draft summaries pushed without human delays.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>04. Human Gate</span>
                  </div>
                  <p className="text-xs text-zinc-200">
                    High-stakes clinical orders, wire authorizations, and refunds pause automatically for 1-click supervisory sign-off.
                  </p>
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-400">
                  Ready to configure your departments?
                </span>
                <Link
                  href="/setup"
                  className="text-xs font-bold text-white hover:text-zinc-300 flex items-center gap-1 group/btn"
                >
                  <span>Open Full Architect</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
