'use client';

import React from 'react';
import { ContextualCTA, SecondaryCTA } from '@/components/CtaSystem';

export interface ContentCtaProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  context?: string;
  className?: string;
}

export function ContentCta({
  eyebrow = 'STRATEGIC ARCHITECTURE ENGAGEMENT',
  title,
  description,
  primaryLabel = 'Book a Strategy Call',
  primaryHref = '/book-a-strategy-call',
  secondaryLabel = 'Talk to NexAgent',
  secondaryHref = '/contact',
  context = 'content_cta',
  className = '',
}: ContentCtaProps) {
  return (
    <section className={`p-8 sm:p-12 bg-white border border-[#17191A]/10 rounded-sm my-16 shadow-xs ${className}`}>
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
          {eyebrow}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-[#57595B] leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ContextualCTA
            label={primaryLabel}
            href={primaryHref}
            context={context}
            className="px-6 py-3"
          />
          {secondaryLabel && (
            <SecondaryCTA
              label={secondaryLabel}
              href={secondaryHref}
              location={context}
              className="px-6 py-3"
            />
          )}
        </div>
      </div>
    </section>
  );
}
