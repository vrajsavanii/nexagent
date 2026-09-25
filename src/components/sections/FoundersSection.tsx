'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

export default function FoundersSection() {
  const [hovered, setHovered] = useState<'manthan' | 'vraj' | null>(null);

  const manthanActive = hovered === 'manthan';
  const vrajActive    = hovered === 'vraj';

  return (
    <section id="founders" className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-200 content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl space-y-4">
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] text-zinc-300 text-[11px] font-mono font-bold uppercase tracking-wider border border-zinc-800 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
              <span>FOUNDERS</span>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]"
            >
              Two founders.<br />One operating vision.
            </motion.h2>
          </div>

          <motion.div variants={fadeUpVariants} className="lg:max-w-md">
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              NexAgent is built by two equal founders combining product thinking, business strategy, AI, and engineering to build intelligent systems for modern businesses.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Desktop: Full Split-Screen Panels ── */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="hidden lg:grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl"
        >

          {/* ── Panel Left: Manthan ── */}
          <div
            className="relative overflow-hidden cursor-pointer border-r border-white/5 h-[780px]"
            onMouseEnter={() => setHovered('manthan')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Photo — always bright & color, extra pop on hover */}
            <Image
              src="/assets/founder_manthan.webp"
              alt="Manthan Kachhadiya - Founder & CEO"
              fill
              className={`object-cover object-[center_15%] transition-all duration-700 ease-out
                brightness-[0.95] grayscale-0
                ${manthanActive ? 'scale-[1.08]' : 'scale-[1.02]'}`}
              sizes="50vw"
              loading="lazy"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            {/* Top-left index tag — always cyan */}
            <div className="absolute top-7 left-8 z-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#22d3ee]">
                01 / ARCHITECTURE
              </span>
            </div>

            {/* Cyan left accent — always visible */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-[#22d3ee]/60" />

            {/* Bottom info — always fully visible */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-8 pt-20 pointer-events-none">
              <h3 className={`font-mono font-extrabold uppercase tracking-wide leading-none transition-all duration-500
                text-white ${manthanActive ? 'text-4xl xl:text-5xl' : 'text-3xl xl:text-4xl'}`}>
                MANTHAN<br />KACHHADIYA
              </h3>
              <p className="font-mono font-bold uppercase tracking-widest mt-2 text-[#22d3ee] text-sm">
                FOUNDER &amp; CEO
              </p>
              <div className="flex items-center gap-3 mt-5 pointer-events-auto">
                <a
                  href="https://www.linkedin.com/in/manthankachhadiyaa/"
                  className="founder-social-btn linkedin"
                  aria-label="Manthan LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/manthankachhadiyaa"
                  className="founder-social-btn instagram"
                  aria-label="Manthan Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Panel Right: Vraj ── */}
          <div
            className="relative overflow-hidden cursor-pointer h-[780px]"
            onMouseEnter={() => setHovered('vraj')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Photo — always bright & color, extra pop on hover */}
            <Image
              src="/assets/founder_vraj.webp"
              alt="Vraj Savani - Founder & COO"
              fill
              className={`object-cover object-[center_15%] transition-all duration-700 ease-out
                brightness-[0.95] grayscale-0
                ${vrajActive ? 'scale-[1.08]' : 'scale-[1.02]'}`}
              sizes="50vw"
              loading="lazy"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            {/* Top-right index tag — always cyan */}
            <div className="absolute top-7 right-8 z-10 text-right">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#22d3ee]">
                02 / OPERATIONS
              </span>
            </div>

            {/* Cyan right accent — always visible */}
            <div className="absolute top-0 right-0 w-[3px] h-full bg-[#22d3ee]/60" />

            {/* Bottom info — always fully visible */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-8 pt-20 pointer-events-none">
              <h3 className={`font-mono font-extrabold uppercase tracking-wide leading-none transition-all duration-500
                text-white ${vrajActive ? 'text-4xl xl:text-5xl' : 'text-3xl xl:text-4xl'}`}>
                VRAJ<br />SAVANI
              </h3>
              <p className="font-mono font-bold uppercase tracking-widest mt-2 text-[#22d3ee] text-sm">
                FOUNDER &amp; COO
              </p>
              <div className="flex items-center gap-3 mt-5 pointer-events-auto">
                <a
                  href="https://www.linkedin.com/in/vraj-savani-7973a834a/"
                  className="founder-social-btn linkedin"
                  aria-label="Vraj LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </motion.div>

        {/* ── Mobile & Tablet View (< lg) ── */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Card 1: Manthan */}
          <motion.div
            variants={fadeUpVariants}
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[320px] sm:min-h-[380px]"
          >
            <Image
              src="/assets/founder_manthan.webp"
              alt="Manthan Kachhadiya - Founder & CEO"
              fill
              className="object-cover object-[center_15%] brightness-[0.7] grayscale-0"
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-5 left-6 z-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#22d3ee]">01 / ARCHITECTURE</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-16">
              <h3 className="font-mono font-extrabold uppercase tracking-wide text-white text-2xl leading-none">
                MANTHAN<br />KACHHADIYA
              </h3>
              <p className="font-mono font-bold uppercase tracking-widest text-[#22d3ee] text-xs mt-2 mb-4">
                FOUNDER &amp; CEO
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/manthankachhadiyaa/" className="founder-social-btn linkedin" aria-label="Manthan LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="https://www.instagram.com/manthankachhadiyaa" className="founder-social-btn instagram" aria-label="Manthan Instagram" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vraj */}
          <motion.div
            variants={fadeUpVariants}
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[320px] sm:min-h-[380px]"
          >
            <Image
              src="/assets/founder_vraj.webp"
              alt="Vraj Savani - Founder & COO"
              fill
              className="object-cover object-[center_15%] brightness-[0.7] grayscale-0"
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-5 left-6 z-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#22d3ee]">02 / OPERATIONS</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-16">
              <h3 className="font-mono font-extrabold uppercase tracking-wide text-white text-2xl leading-none">
                VRAJ<br />SAVANI
              </h3>
              <p className="font-mono font-bold uppercase tracking-widest text-[#22d3ee] text-xs mt-2 mb-4">
                FOUNDER &amp; COO
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/vraj-savani-7973a834a/" className="founder-social-btn linkedin" aria-label="Vraj LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
