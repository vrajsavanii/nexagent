'use client';

import React from 'react';
import { FadeIn } from '@/components/MotionWrapper';
import StrategyCallFunnel from '@/components/StrategyCallFunnel';

export default function BookStrategyCallPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header Breadcrumb & Editorial Positioning */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3D9D99]/10 border border-[#3D9D99]/20 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                EXECUTIVE STRATEGY BRIEFING
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#17191A] font-semibold leading-[1.1]">
              Schedule An Architectural Diagnostic
            </h1>
            <p className="font-sans text-sm text-[#57595B] mt-3 leading-relaxed">
              Direct consultation with our senior systems architects. Structured around your operational bottlenecks and governed under strict mutual confidentiality.
            </p>
          </div>
        </FadeIn>

        {/* 4-Step Progressive Strategy Call Funnel */}
        <FadeIn direction="up" delay={0.15}>
          <StrategyCallFunnel sourceLocation="strategy_call_page" />
        </FadeIn>

        {/* Supporting Advisory Credentials Bar */}
        <FadeIn direction="up" delay={0.25}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#17191A]/10 text-center sm:text-left">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#57595B] tracking-wider block">
                Direct Engagement
              </span>
              <p className="font-display text-sm font-semibold text-[#17191A] mt-1">
                Senior Systems Architects
              </p>
              <p className="font-sans text-xs text-[#57595B] mt-0.5">
                No intermediate sales reps. Direct evaluation by engineering leadership.
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase text-[#57595B] tracking-wider block">
                Mutual Confidentiality
              </span>
              <p className="font-display text-sm font-semibold text-[#17191A] mt-1">
                Standard Mutual NDA
              </p>
              <p className="font-sans text-xs text-[#57595B] mt-0.5">
                Enterprise IP, workflow mechanics, and data structures strictly protected.
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase text-[#57595B] tracking-wider block">
                Direct Engineering Access
              </span>
              <p className="font-display text-sm font-semibold text-[#17191A] mt-1">
                2 Technical Co-Founders
              </p>
              <p className="font-sans text-xs text-[#57595B] mt-0.5">
                Every briefing is conducted directly by senior system architects.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
