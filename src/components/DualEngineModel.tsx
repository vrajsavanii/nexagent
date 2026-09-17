'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

export default function DualEngineModel() {
  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="products-and-systems">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
              THE HYBRID TECHNOLOGY MODEL
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight leading-tight">
              WE BUILD OUR OWN TECHNOLOGY TOO.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              NexAgent is not simply an agency or consultancy. We operate as a hybrid technology group developing our
              own sovereign commercial platforms while engineering bespoke systems for organizations worldwide.
            </p>
          </div>
        </FadeIn>

        {/* The Two Distinct Architectural Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* PATH 01: NEXAGENT PRODUCTS */}
          <FadeIn direction="right" delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest border border-outline-variant/50 p-8 lg:p-10 space-y-6 shadow-sm hover:border-primary transition-all flex flex-col justify-between h-full relative"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-label-code text-label-code uppercase font-semibold">
                    PATHWAY 01
                  </span>
                  <span className="font-mono text-xs text-outline uppercase font-semibold">
                    PROPRIETARY IP
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                    NEXAGENT PRODUCTS
                  </h3>
                  <p className="font-body-md text-body-md text-primary font-medium mt-1">
                    “Our own AI-powered products, SaaS platforms, infrastructure and technologies.”
                  </p>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Turnkey autonomous software platforms, foundation neural inference models, and specialized vertical SaaS
                  products incubated and operated directly by NexAgent Labs.
                </p>

                <ul className="space-y-3 pt-4 border-t border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <span><strong>Model-010</strong> — Proprietary Sparse MoE Reasoning Model</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <span><strong>NexCore AI</strong> — Autonomous Agent Orchestrator & Execution Mesh</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <span><strong>NexVoice</strong> — Sub-140ms Conversational Telephony Fabric</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <span><strong>NexFlow</strong> — Zero-Loss Event Bus for Enterprise Sync</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  href="/companies"
                  className="inline-flex items-center gap-2 text-primary font-label-code text-label-code uppercase font-semibold hover:underline group"
                >
                  <span>Explore Product Portfolio</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-mono text-[10px] text-outline uppercase">STANDALONE ASSETS</span>
              </div>
            </motion.div>
          </FadeIn>

          {/* PATH 02: NEXAGENT SYSTEMS */}
          <FadeIn direction="left" delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest border border-outline-variant/50 p-8 lg:p-10 space-y-6 shadow-sm hover:border-secondary transition-all flex flex-col justify-between h-full relative"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary font-label-code text-label-code uppercase font-semibold">
                    PATHWAY 02
                  </span>
                  <span className="font-mono text-xs text-outline uppercase font-semibold">
                    CLIENT ARCHITECTURE
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                    NEXAGENT SYSTEMS
                  </h3>
                  <p className="font-body-md text-body-md text-secondary font-medium mt-1">
                    “Custom intelligent systems engineered for businesses with unique requirements.”
                  </p>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Bespoke digital operating systems engineered specifically around enterprise datasets, regulatory
                  constraints, legacy ERP integrations, and operational bottlenecks.
                </p>

                <ul className="space-y-3 pt-4 border-t border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-secondary"></span>
                    <span>Custom Multi-Agent Workforces & Departmental Automation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-secondary"></span>
                    <span>Air-Gapped Private Cloud & Edge Deployments</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-secondary"></span>
                    <span>Zero-Touch Customer Record (CRM) Synchronization</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-secondary"></span>
                    <span>Executive Decision Cockpits & Live Revenue Telemetry</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-secondary font-label-code text-label-code uppercase font-semibold hover:underline group"
                >
                  <span>Explore Custom Systems</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-mono text-[10px] text-outline uppercase">BESPOKE DELIVERY</span>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
