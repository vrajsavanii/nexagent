'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const [needleAngle, setNeedleAngle] = useState(25);
  const [clicked, setClicked] = useState(false);
  const [syncing, setSyncing] = useState(false);

  return (
    <section id="benefits" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            BENEFITS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Why Choose Us
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          A results-focused AI partner that moves as fast as you do.
        </p>

        {/* 3 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 w-full">
          {/* CARD 1: Live Performance Tracking (Speedometer / Gauge) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_30px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between h-[380px] overflow-hidden"
          >
            {/* Visual: Speedometer / Gauge */}
            <div className="relative w-full h-44 flex items-center justify-center">
              <svg className="w-48 h-32" viewBox="0 0 200 120">
                {/* Arc Gauge Background */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Active Orange Arc */}
                <path
                  d="M 20 100 A 80 80 0 0 1 125 35"
                  fill="none"
                  stroke="#EB572C"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Gauge Labels */}
                <text x="25" y="85" fontSize="8" fill="#738290" fontWeight="bold">01</text>
                <text x="15" y="115" fontSize="8" fill="#738290">Ideation</text>

                <text x="95" y="25" fontSize="8" fill="#EB572C" fontWeight="bold">02</text>
                <text x="90" y="45" fontSize="10" fill="#2A2B2E" fontWeight="bold">Day</text>

                <text x="165" y="85" fontSize="8" fill="#738290" fontWeight="bold">03</text>
                <text x="155" y="115" fontSize="8" fill="#738290">Launch</text>
              </svg>

              {/* Dynamic Animated Needle */}
              <motion.div
                animate={{ rotate: [needleAngle - 5, needleAngle + 5, needleAngle - 5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-1/2 w-2 h-20 origin-bottom -translate-x-1/2 cursor-pointer"
                onClick={() => setNeedleAngle((prev) => (prev === 25 ? 55 : 25))}
                title="Click to accelerate"
              >
                <div className="w-1.5 h-16 mx-auto rounded-full bg-gradient-to-t from-[#2A2B2E] via-[#EB572C] to-[#EB572C] shadow-md" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#2A2B2E] border-2 border-white mx-auto -mt-1 shadow-sm" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-lg text-[#2A2B2E]">
                Live Performance Tracking
              </h3>
              <p className="text-xs text-[#738290] leading-relaxed">
                Monitor what matters with always-on, real-time analytics across your business.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: AI-Powered Business Growth (Build With AI Button + Clicking Hand) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_30px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between h-[380px] overflow-hidden"
          >
            {/* Visual: Glowing Button + Interactive Hand Pointer */}
            <div className="relative w-full h-44 flex items-center justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                animate={clicked ? { scale: [1, 1.05, 1] } : {}}
                onClick={() => setClicked(!clicked)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7F57] to-[#EB572C] text-white font-bold text-sm shadow-[0_8px_24px_-2px_rgba(235,87,44,0.45)] cursor-pointer"
              >
                Build With AI
              </motion.button>

              {/* Animated 3D Clicking Hand Cursor */}
              <motion.div
                animate={{
                  x: [10, 5, 10],
                  y: [15, 8, 15],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-12 bottom-10 pointer-events-none"
              >
                <div className="w-7 h-7 flex items-center justify-center text-2xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]">
                  👆
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-lg text-[#2A2B2E]">
                AI-Powered Business Growth
              </h3>
              <p className="text-xs text-[#738290] leading-relaxed">
                Make confident decisions backed by intelligent, real-time data — not guesswork.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Instant Team Sync (Sync Widget + Avatars) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_30px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between h-[380px] overflow-hidden"
          >
            {/* Visual: Circular Sync Badge + Floating Avatars */}
            <div className="relative w-full h-44 flex items-center justify-center">
              {/* Floating User Silhouettes */}
              <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-xs text-[#738290]">
                👤
              </div>
              <div className="absolute top-4 right-6 w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-xs text-[#738290]">
                👤
              </div>
              <div className="absolute bottom-4 left-8 w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-xs text-[#738290]">
                👤
              </div>

              {/* Central Floating Sync Pill */}
              <motion.button
                onClick={() => setSyncing(true)}
                onAnimationComplete={() => setSyncing(false)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[rgba(205,211,219,0.7)] shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <motion.span
                  animate={{ rotate: syncing ? 360 : 0 }}
                  transition={{ duration: 1, ease: 'linear' }}
                  className="w-5 h-5 rounded-full bg-[#EB572C] flex items-center justify-center text-white text-xs font-bold"
                >
                  ↻
                </motion.span>
                <span className="font-sans font-bold text-xs text-[#2A2B2E]">
                  Sync
                </span>
              </motion.button>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-lg text-[#2A2B2E]">
                Instant Team Sync
              </h3>
              <p className="text-xs text-[#738290] leading-relaxed">
                Keep your team aligned with live progress updates and seamless collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
