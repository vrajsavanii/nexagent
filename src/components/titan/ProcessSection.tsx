'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Operations Discovery',
      desc: 'We map enterprise data flows and pinpoint high-friction bottlenecks where autonomous systems yield immediate margin leverage.',
    },
    {
      num: '02',
      title: 'Build & Launch',
      desc: 'We architect deterministic, sovereign pipelines and deploy production-ready AI agents within days, not quarters.',
    },
    {
      num: '03',
      title: 'Continuous Improvement',
      desc: 'Live telemetry monitors accuracy and execution latency, running automated regression tests to guarantee zero operational drift.',
    },
    {
      num: '04',
      title: 'Autonomous Scaling',
      desc: 'Orchestrated workflows expand across departments, multiplying workforce output and compounding enterprise value over time.',
    },
  ];

  return (
    <section id="process" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            PROCESS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Simple. Structured. Scalable.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          A clear, collaborative process built on transparency and consistent results.
        </p>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)] flex flex-col justify-between h-[280px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-[#3D9D99]">
                  {step.num}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#3D9D99]/20" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-extrabold text-lg text-[#2A2B2E]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#738290] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
