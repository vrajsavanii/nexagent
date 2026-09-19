'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      tag: 'FINANCIAL INFRASTRUCTURE',
      title: 'FinFlow — Autonomous Multi-Currency Ledger',
      description:
        'Engineered an enterprise clearing system processing cross-border receivables, auto-reconciling banking statements, and settling transactions with zero human intervention.',
      metric1: { value: '84%', label: 'Faster settlement' },
      metric2: { value: '$3.2M', label: 'Annual operational recovery' },
      gradient: 'from-[#2A2B2E] to-[#1E2022]',
    },
    {
      tag: 'HEALTHCARE & LOGISTICS',
      title: 'VitalPath — Real-Time Patient & Resource Triage',
      description:
        'Deployed sovereign inference agents that process electronic medical records, route patient queues, and schedule clinical equipment with sub-100ms response times.',
      metric1: { value: '47%', label: 'Reduction in wait time' },
      metric2: { value: '68%', label: 'Throughput gain' },
      gradient: 'from-[#9E7B78] to-[#7D5A57]',
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            PROJECTS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Work That Speaks for Itself
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Real-world systems that demonstrate our capabilities and the compounding outcomes we deliver.
        </p>

        {/* 2 Project Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 w-full">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_12px_32px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[rgba(158,123,120,0.10)] text-[#9E7B78] text-[10px] font-bold tracking-wider uppercase">
                  {p.tag}
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-[#2A2B2E] leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[#738290] leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-[rgba(205,211,219,0.4)]">
                <div>
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#2A2B2E] block">
                    {p.metric1.value}
                  </span>
                  <span className="text-xs font-semibold text-[#738290] mt-1 block">
                    {p.metric1.label}
                  </span>
                </div>
                <div>
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#9E7B78] block">
                    {p.metric2.value}
                  </span>
                  <span className="text-xs font-semibold text-[#738290] mt-1 block">
                    {p.metric2.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
