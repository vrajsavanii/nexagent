'use client';

import React from 'react';

export default function TelemetryTicker({ onOpenAudit }: { onOpenAudit?: () => void }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#17191A]/10 mb-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#17191A]/12 rounded-full shadow-xs text-xs font-mono text-[#17191A]">
          <span className="w-2 h-2 rounded-full bg-[#9E7B78] animate-pulse" />
          <span className="uppercase font-semibold tracking-wider text-[10px]">
            Autonomous Enterprise Systems
          </span>
        </span>
        <span className="text-xs font-mono text-[#57595B] hidden sm:inline-block">
          Build smarter, Grow faster
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono text-[#57595B]">
        <span className="hidden lg:inline-block">
          Architecture: <strong className="text-[#17191A] font-medium">Sovereign &amp; Deterministic</strong>
        </span>
        <span className="hidden md:inline-block text-[#17191A]/20">/</span>
        <span className="hidden md:inline-block text-[#9E7B78] font-medium">
          2 Technical Co-Founders
        </span>
      </div>
    </div>
  );
}
