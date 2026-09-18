'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const founders = [
    {
      name: 'Vraj Savani',
      role: 'Co-Founder & Chief Architect',
      focus: 'Autonomous Neural Runtimes & Inference Architecture',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Technical Co-Founder',
      role: 'Co-Founder & Head of Systems',
      focus: 'Distributed Infrastructure, Sovereign Clouds & Security',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="team" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            TEAM
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          The People Behind the Results
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Founded by 2 technical co-founders dedicated to engineering permanent enterprise advantage.
        </p>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 w-full">
          {founders.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.06)] flex flex-col justify-between"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#2A2B2E]/10 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans font-extrabold text-xl text-[#2A2B2E]">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#EB572C]">
                  {member.role}
                </p>
                <p className="text-xs text-[#738290] leading-relaxed pt-1">
                  {member.focus}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Hiring / Culture Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-[#2A2B2E] text-white flex flex-col justify-between shadow-[0_12px_32px_-4px_rgba(42,43,46,0.2)]"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#3D3E42] text-[#FBF5F3] text-[10px] font-bold tracking-wider uppercase">
                WE'RE EXPANDING
              </span>
              <h3 className="font-sans font-extrabold text-2xl text-white leading-snug">
                Join our technical core
              </h3>
              <p className="text-xs text-[#BDC9C7] leading-relaxed">
                We are looking for world-class systems engineers, AI researchers, and distributed systems architects.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/book-a-strategy-call"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-2xl text-xs font-bold bg-[#EB572C] hover:bg-[#D63D10] text-white shadow-sm transition-all"
              >
                Send CV / Connect
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
