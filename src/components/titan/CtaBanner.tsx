'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="w-full py-20 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl bg-[#2A2B2E] p-10 sm:p-16 text-center text-white overflow-hidden shadow-[0_20px_50px_-10px_rgba(42,43,46,0.3)]">
          {/* Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-radial-gradient from-[#3D9D99]/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
              Next-gen AI systems engineered for your business
            </h2>
            <p className="text-sm sm:text-base text-[#BDC9C7] leading-relaxed">
              Step into the era of autonomous intelligence with Silicon Valley velocity and private equity balance sheet discipline.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-a-strategy-call"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#3D9D99] hover:bg-[#2E827E] text-white text-sm font-bold shadow-[0_10px_25px_-4px_rgba(61,157,153,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Book A Demo</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  ↗
                </span>
              </Link>

              <Link
                href="/book-a-strategy-call"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
