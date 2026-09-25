'use client';

import React from 'react';
import { motion } from 'motion/react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

const pillars = [
  {
    num: '01',
    category: 'INGESTION',
    title: 'Zero Data Loss Ingestion',
    desc: 'Normalizes HL7/FHIR feeds, clinical notes, and enterprise webhooks into strictly typed JSON schemas with in-memory PHI redaction.',
  },
  {
    num: '02',
    category: 'REASONING',
    title: 'Contextual Intelligence Core',
    desc: 'Evaluates standard operating procedures and hospital records in real time with schema-locked validation—eliminating hallucinations.',
  },
  {
    num: '03',
    category: 'GOVERNANCE',
    title: 'Policy & Human-in-the-Loop Gates',
    desc: 'Deterministic WebAssembly rules enforce hard boundaries. Clinical orders and wire authorizations require 1-click cryptographic sign-off.',
  },
  {
    num: '04',
    category: 'AUDIT',
    title: 'Transactional Ledger',
    desc: 'Two-phase commit writes into hospital EMRs and ERPs with an immutable append-only ledger for complete regulatory auditability.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="thesis" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-12"
        >
          {/* Editorial Headline Statement */}
          <div className="max-w-3xl space-y-4">
            <motion.div variants={fadeUpVariants}>
              <Eyebrow>The Architectural Thesis</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] tracking-tight leading-[1.12]"
            >
              Engineered for high-stakes environments where error is not an option.
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-[#71717a] leading-relaxed max-w-2xl"
            >
              Superficial AI chatbots fail in real operations because they lack determinism, auditability, and deep systems integration. NexAgent operates as active, mission-critical infrastructure.
            </motion.p>
          </div>

          {/* 4 Pillars Bento Grid */}
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.num}
                variants={fadeUpVariants}
                className="p-6 sm:p-7 rounded-2xl bg-[#fafafa] border border-black/[0.08] hover:border-black/30 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#09090b] group-hover:text-black">
                      {p.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#09090b] tracking-tight leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
