'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const founders = [
    {
      name: 'Vraj Savani',
      role: 'Co-Founder (Equal Ownership)',
      focus: 'Autonomous Neural Runtimes, Inference Architecture & Systems Strategy',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Manthan Kachhadiya',
      role: 'Co-Founder (Equal Ownership)',
      focus: 'Distributed Infrastructure, Sovereign Cloud Platforms & Data Pipelines',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="team" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            LEADERSHIP
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          The People Behind NexAgent
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Founded and owned equally by two technical co-founders dedicated to engineering permanent operational leverage.
        </p>

        {/* Founders Cards - Strictly 2 Co-Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 w-full max-w-4xl">
          {founders.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between"
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-[#2A2B2E]/10 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-extrabold text-2xl text-[#2A2B2E]">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-[#9E7B78]">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-[#738290] leading-relaxed pt-1">
                  {member.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
