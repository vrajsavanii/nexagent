'use client';

import React from 'react';
import { WorkflowStage } from '@/content/types';
import { FadeIn } from '@/components/MotionWrapper';

export interface WorkflowDiagramProps {
  stages: WorkflowStage[];
  title?: string;
  className?: string;
}

export function WorkflowDiagram({
  stages,
  title = 'System Execution Pipeline',
  className = '',
}: WorkflowDiagramProps) {
  return (
    <div className={`p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm shadow-xs ${className}`}>
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#17191A]/10">
        <div>
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#9E7B78] block mb-1">
            DETERMINISTIC WORKFLOW
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#17191A]">
            {title}
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#57595B]">
          <span className="w-2 h-2 rounded-full bg-[#9E7B78] animate-pulse" />
          <span>Sequential Stage Validation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {stages.map((stage, idx) => (
          <FadeIn key={stage.step} direction="up" delay={idx * 0.1} className="h-full">
            <div className="p-6 bg-[#F7F7F5] border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all h-full flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#9E7B78]">
                    STAGE // {stage.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#57595B] bg-white px-2 py-0.5 rounded border border-[#17191A]/10">
                    {stage.systemLayer}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                  {stage.name}
                </h4>
                <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#84888A]">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
