'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const featureDetails = [
  {
    id: 'ai',
    title: 'Next-Gen AI Agents',
    subtitle: 'Autonomous systems that think, plan, and execute across your enterprise',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="5" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
    details: [
      'Multi-agent orchestration & reasoning',
      'Sub-100ms inference execution',
      'Self-healing error recovery loops',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    subtitle: 'Eliminate repetitive tasks and unlock full team capacity permanently',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      'Visual drag-and-drop pipeline builder',
      'Native CRM, ERP & database connectors',
      'Event-driven trigger architecture',
    ],
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    subtitle: 'Access deep business intelligence and decision signals in real time',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 3v18h18" strokeLinecap="round"/>
        <path d="M7 16l4-8 4 4 4-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      'Live telemetry & performance dashboards',
      'Anomaly detection with root-cause AI',
      'Custom KPI tracking & alerting',
    ],
  },
  {
    id: 'support',
    title: 'AI Customer Service',
    subtitle: 'Intelligent support that resolves 80% of issues without human escalation',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      '24/7 autonomous customer resolution',
      'Contextual memory across all sessions',
      'Seamless human handoff when needed',
    ],
  },
];

export default function FeaturesConnectedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            FEATURES
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Everything You Need,
          <br className="hidden sm:inline" /> One Platform
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Powerful tools that simplify how you work and accelerate how you grow.
        </p>

        {/* 4 Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 w-full">
          {featureDetails.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveTab(index)}
              whileHover={{ y: -3 }}
              className={`p-6 rounded-3xl cursor-pointer transition-all ${
                activeTab === index
                  ? 'bg-white border-2 border-[#3D9D99]/40 shadow-[0_12px_28px_-4px_rgba(61,157,153,0.12)]'
                  : 'bg-white/80 border border-[rgba(205,211,219,0.5)] shadow-xs hover:bg-white'
              }`}
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                activeTab === index ? 'bg-[#3D9D99] text-white' : 'bg-[rgba(61,157,153,0.10)] text-[#3D9D99]'
              }`}>
                {item.icon}
              </div>
              <h3 className="font-sans font-extrabold text-base text-[#2A2B2E]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-[#738290] leading-relaxed">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connected Visual Diagram: Curved Bezier Wires Flowing to Central Card */}
        <div className="relative w-full max-w-2xl mt-4 flex flex-col items-center">
          {/* SVG Connector Wires */}
          <div className="w-full h-24 sm:h-28 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 600 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {[0, 1, 2, 3].map((i) => {
                const xPositions = [60, 220, 380, 540];
                const active = activeTab === i;
                return (
                  <path
                    key={i}
                    d={`M ${xPositions[i]} 0 C ${xPositions[i]} ${i === 0 || i === 3 ? 60 : 50}, ${i < 2 ? 285 : 315} ${i < 2 ? 75 : 75}, 300 100`}
                    stroke={active ? '#3D9D99' : 'rgba(205,211,219,0.5)'}
                    strokeWidth={active ? 2 : 1.5}
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Central Target White Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 rounded-2xl bg-white border border-[rgba(205,211,219,0.7)] shadow-[0_12px_28px_-6px_rgba(42,43,46,0.12)] flex items-center justify-center -mt-2 z-10 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2A2B2E] flex items-center justify-center shadow-2xs">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3D9D99]" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" strokeLinecap="round"/>
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Active Feature Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full max-w-lg p-6 rounded-2xl bg-white border border-[rgba(205,211,219,0.5)] shadow-xs"
          >
            <p className="text-xs font-bold text-[#3D9D99] uppercase tracking-widest mb-3">
              {featureDetails[activeTab].title}
            </p>
            <ul className="space-y-2">
              {featureDetails[activeTab].details.map((d, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#5E6572]">
                  <span className="w-4 h-4 rounded-full bg-[rgba(61,157,153,0.10)] text-[#3D9D99] flex items-center justify-center text-[10px] font-black flex-shrink-0">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Second Pinned Polaroid Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-transparent mt-12"
        >
          {/* Polaroid Photo Frame with 3D Pin */}
          <div className="relative flex-shrink-0">
            {/* 3D Red Pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-[#3D9D99] via-[#5EBAB6] to-[#962808] shadow-[0_3px_6px_rgba(0,0,0,0.35)] z-20" />

            {/* White Polaroid Border */}
            <div className="p-3 pb-5 bg-white border border-[rgba(205,211,219,0.6)] rounded-2xl shadow-[0_12px_30px_-6px_rgba(42,43,46,0.12)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden bg-[#2A2B2E]/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Sarah Jenkins"
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#738290] font-bold">
                  SCALE // OPS
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote & Info */}
          <div className="space-y-4 text-left">
            <blockquote className="font-sans text-lg sm:text-xl font-bold text-[#2A2B2E] leading-snug">
              "We came in needing real automation and they delivered exactly that. The whole process was open, structured, and built for scale."
            </blockquote>
            <div>
              <p className="font-sans font-extrabold text-sm text-[#2A2B2E]">
                Sarah Jenkins
              </p>
              <p className="text-xs font-semibold text-[#738290]">
                VP of Engineering, CloudScale
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
