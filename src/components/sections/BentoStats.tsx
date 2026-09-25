'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  explanation: string;
}

const metrics: MetricItem[] = [
  {
    id: 'triage',
    value: '42%',
    label: 'WAIT TIME REDUCTION',
    explanation: 'Real-time outpatient queue balancing',
  },
  {
    id: 'turnaround',
    value: '35 min',
    label: 'BED TURNAROUND',
    explanation: 'Automated housekeeping dispatch',
  },
  {
    id: 'enforcement',
    value: '100%',
    label: 'POLICY ENFORCEMENT',
    explanation: 'Deterministic WebAssembly safety boundaries',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'CLOUD UPTIME SLA',
    explanation: 'High-availability enterprise infrastructure',
  },
];

export default function BentoStats() {
  return (
    <section id="metrics" className="py-12 lg:py-16 bg-black border-y border-zinc-800 relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-zinc-800"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariants}
              className={`flex flex-col justify-center space-y-1.5 ${
                idx === 0 ? 'lg:pr-8' : idx === metrics.length - 1 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                {item.label}
              </div>
              <div className="text-xs text-zinc-500 leading-relaxed">
                {item.explanation}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
