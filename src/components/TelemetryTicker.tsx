'use client';

import React from 'react';

export default function TelemetryTicker({ onOpenAudit }: { onOpenAudit?: () => void }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#17191A]/10 mb-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#17191A]/12 rounded-full shadow-xs text-xs font-mono text-[#17191A]">
          <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
          <span className="uppercase font-semibold tracking-wider text-[10px]">
            Global Technology Group
          </span>
        </span>
        <span className="text-xs font-mono text-[#57595B] hidden sm:inline-block">
          Build smarter, Grow faster
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono text-[#57595B]">
        <span className="hidden lg:inline-block">
          Operating Corridors: <strong className="text-[#17191A] font-medium">SF · London · Dubai · BLR</strong>
        </span>
        <span className="hidden md:inline-block text-[#17191A]/20">/</span>
        <span className="hidden md:inline-block text-[#3D9D99] font-medium">
          Enterprise Security Standard
        </span>

        {onOpenAudit && (
          <button
            onClick={onOpenAudit}
            className="px-3 py-1 bg-white hover:bg-[#F0EFEA] border border-[#17191A]/15 text-[#17191A] rounded-full text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99]" />
            <span>Simulate ROI</span>
          </button>
        )}
      </div>
    </div>
  );
}
