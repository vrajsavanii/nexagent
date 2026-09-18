'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Clean brand logos as SVGs for a polished look
const brandLogos = [
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    ),
  },
  {
    name: 'Linear',
    svg: (
      <svg viewBox="0 0 100 100" className="h-5 w-auto" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.809 51.114L48.886 94.191a47.647 47.647 0 0 1-43.077-43.077ZM4 42.62l53.38 53.38A47.61 47.61 0 0 1 46.15 97.5a47.8 47.8 0 0 1-6.52-.45L4.45 60.77A47.8 47.8 0 0 1 4 54.25c0-3.94.475-7.77 1.37-11.44l-.63-1.19ZM7.64 30.3l62.06 62.06a47.51 47.51 0 0 1-8.93 4.78L4.82 38.22a47.51 47.51 0 0 1 4.78-8.93l-1.96.01Zm8.43-10.04l63.68 63.68A47.62 47.62 0 0 1 72.36 91L9 27.64a47.62 47.62 0 0 1 7.06-7.38ZM26.2 11.24l62.56 62.56a47.54 47.54 0 0 1-4.92 8.8L17.44 16.16a47.54 47.54 0 0 1 8.8-4.92l-.04 0ZM38.37 5.48l56.15 56.15A47.83 47.83 0 0 1 95 67.95c.3-2.17.45-4.39.45-6.65 0-25.7-20.3-46.65-45.7-47.77L38.37 5.48Zm17.43-3.09.01-.01a47.8 47.8 0 0 1 6.34 1.14l35.84 35.84a47.8 47.8 0 0 1 1.14 6.34l-43.33-43.31Z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Ramp',
    svg: (
      <svg viewBox="0 0 60 24" className="h-5 w-auto" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"/>
        <text x="0" y="18" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">RAMP</text>
      </svg>
    ),
  },
  {
    name: 'Retool',
    svg: (
      <svg viewBox="0 0 80 24" className="h-4 w-auto" fill="currentColor">
        <text x="0" y="18" fontFamily="sans-serif" fontSize="14" fontWeight="800" fill="currentColor">RETOOL</text>
      </svg>
    ),
  },
];

export default function SocialProofPolaroid() {
  return (
    <section className="w-full py-14 bg-[#FBF5F3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Trusted By Subtitle */}
        <p className="text-xs font-semibold uppercase tracking-wider text-[#738290] mb-8 text-center">
          Trusted by Innovative Teams
        </p>

        {/* Infinite scrolling logo strip */}
        <div className="w-full overflow-hidden mb-14 mask-fade-x">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-12 sm:gap-16 w-max"
          >
            {/* Duplicate for seamless loop */}
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 text-[#2A2B2E] flex-shrink-0"
                title={logo.name}
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pinned Polaroid Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-transparent"
        >
          {/* Polaroid Photo Frame with 3D Pin */}
          <div className="relative flex-shrink-0">
            {/* 3D Red Pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-[#EB572C] via-[#FF7F57] to-[#962808] shadow-[0_3px_6px_rgba(0,0,0,0.35)] z-20" />

            {/* White Polaroid Border */}
            <div className="p-3 pb-5 bg-white border border-[rgba(205,211,219,0.6)] rounded-2xl shadow-[0_12px_30px_-6px_rgba(42,43,46,0.12)] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden bg-[#2A2B2E]/10">
                {/* Clean monochrome executive portrait */}
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="David White"
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#738290] font-bold">
                  PALLET // HQ
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote & Info */}
          <div className="space-y-4 text-left">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-[#EB572C]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <blockquote className="font-sans text-lg sm:text-xl font-bold text-[#2A2B2E] leading-snug">
              "My team loves this AI system because it's so dynamic. We can splice our data in so many different ways and combinations."
            </blockquote>
            <div>
              <p className="font-sans font-extrabold text-sm text-[#2A2B2E]">
                David White
              </p>
              <p className="text-xs font-semibold text-[#738290]">
                Chief of Staff, Pallet
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
