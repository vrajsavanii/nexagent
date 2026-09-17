/**
 * NexAgent SectionHeader
 *
 * Reusable section title block used across all pages to ensure consistent
 * heading hierarchy, spacing, and visual rhythm.
 *
 * Structure (all optional except heading):
 *   eyebrow    — small uppercase label above the heading (e.g. "NEXAGENT / TECHNOLOGY")
 *   heading    — the main H-level heading
 *   description — supporting paragraph below the heading
 *   cta        — optional inline CTA link/button
 *
 * Usage:
 *   <SectionHeader
 *     eyebrow="NEXAGENT / SOLUTIONS"
 *     heading="Enterprise Systems That Think."
 *     description="From autonomous operations to voice intelligence..."
 *     align="left"
 *   />
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: React.ReactNode;
  align?: 'left' | 'center';
  headingSize?: 'xl' | 'lg' | 'md';
  className?: string;
  headingAs?: 'h1' | 'h2' | 'h3';
  accentWord?: string; // A word in heading to render in teal italic
  maxWidth?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  cta,
  align = 'left',
  headingSize = 'lg',
  className,
  headingAs: HeadingTag = 'h2',
  accentWord,
  maxWidth,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  const headingSizeClasses = {
    xl: 'text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] tracking-[-0.035em]',
    lg: 'text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.03em]',
    md: 'text-2xl sm:text-3xl lg:text-4xl leading-[1.1] tracking-[-0.025em]',
  };

  // If accentWord is provided, split heading and wrap that word in teal italic
  const renderHeading = () => {
    if (!accentWord) {
      return heading;
    }
    const parts = heading.split(accentWord);
    if (parts.length < 2) return heading;
    return (
      <>
        {parts[0]}
        <em className="not-italic text-[#3D9D99] font-normal">{accentWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'font-mono text-[11px] uppercase tracking-[0.1em] font-semibold text-[#3D9D99] mb-3',
            'flex items-center gap-2'
          )}
        >
          <span className="w-4 h-px bg-[#3D9D99]" aria-hidden="true" />
          {eyebrow}
        </p>
      )}

      <HeadingTag
        className={cn(
          'font-display font-semibold text-[#17191A] uppercase',
          headingSizeClasses[headingSize],
          maxWidth ?? (isCenter ? 'max-w-3xl' : 'max-w-2xl')
        )}
      >
        {renderHeading()}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg text-[#57595B] leading-relaxed',
            isCenter ? 'max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </p>
      )}

      {cta && <div className={cn('mt-6', isCenter && 'flex justify-center')}>{cta}</div>}
    </div>
  );
}

// ─── EyebrowDot — standalone eyebrow label with accent dot ───────────────────

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-2',
        'font-mono text-[11px] uppercase tracking-[0.1em] font-semibold text-[#57595B]',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99] flex-shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
