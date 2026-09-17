/**
 * NexAgent Card System
 *
 * Base card primitive and semantic variants used across the site.
 * Replaces scattered ad-hoc card markup in technology, solutions, insights,
 * and content pages.
 *
 * Usage:
 *   <Card> ... </Card>
 *   <TechCard spec="Sub-15ms" label="Event dispatch latency" />
 *   <InsightCard href="..." eyebrow="AI" title="..." excerpt="..." />
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// ─── Base Card ────────────────────────────────────────────────────────────────

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean; // adds hover state if true
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm:   'p-4',
  md:   'p-5 sm:p-6',
  lg:   'p-6 sm:p-8',
};

export function Card({ children, className, interactive = false, padding = 'md' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-[rgba(23,25,26,0.10)]',
        'rounded',
        paddingStyles[padding],
        interactive && [
          'transition-all duration-250',
          'hover:border-[rgba(23,25,26,0.22)] hover:shadow',
          'cursor-pointer',
        ],
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── MetricCard — highlight a single verifiable metric ───────────────────────

export interface MetricCardProps {
  spec: string;
  label: string;
  unit?: string;
  className?: string;
}

export function MetricCard({ spec, label, unit, className }: MetricCardProps) {
  return (
    <Card className={cn('space-y-1', className)}>
      <div className="flex items-end gap-1">
        <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#17191A] leading-none tracking-tight">
          {spec}
        </span>
        {unit && (
          <span className="font-mono text-sm text-[#57595B] mb-0.5">{unit}</span>
        )}
      </div>
      <p className="text-xs text-[#84888A] font-mono uppercase tracking-wider">{label}</p>
    </Card>
  );
}

// ─── FeatureCard — icon + title + body for capability/feature grids ──────────

export interface FeatureCardProps {
  icon?: string;        // Material Symbol name
  title: string;
  body: string;
  className?: string;
}

export function FeatureCard({ icon, title, body, className }: FeatureCardProps) {
  return (
    <Card padding="lg" className={cn('space-y-4', className)}>
      {icon && (
        <span
          className="material-symbols-outlined text-[24px] text-[#3D9D99]"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-[#17191A] tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#57595B] leading-relaxed">{body}</p>
      </div>
    </Card>
  );
}

// ─── InsightCard — editorial content card for insights / blog index ──────────

export interface InsightCardProps {
  href: string;
  eyebrow?: string;
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  className?: string;
}

export function InsightCard({
  href,
  eyebrow,
  title,
  excerpt,
  date,
  readTime,
  className,
}: InsightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col',
        'bg-white border border-[rgba(23,25,26,0.10)] rounded',
        'p-5 sm:p-6',
        'transition-all duration-250',
        'hover:border-[rgba(23,25,26,0.22)] hover:shadow',
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#3D9D99] mb-3">
          {eyebrow}
        </span>
      )}
      <h3 className="text-base font-semibold text-[#17191A] leading-snug tracking-tight group-hover:text-[#3D9D99] transition-colors duration-150 flex-1">
        {title}
      </h3>
      {excerpt && (
        <p className="mt-2 text-sm text-[#57595B] leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      )}
      {(date || readTime) && (
        <div className="mt-4 pt-4 border-t border-[rgba(23,25,26,0.08)] flex items-center gap-3 text-[11px] font-mono text-[#84888A] uppercase tracking-wider">
          {date && <span>{date}</span>}
          {date && readTime && <span>·</span>}
          {readTime && <span>{readTime} read</span>}
          <span className="ml-auto material-symbols-outlined text-[14px] text-[#3D9D99] group-hover:translate-x-0.5 transition-transform duration-150">
            arrow_forward
          </span>
        </div>
      )}
    </Link>
  );
}

// ─── TechPillarCard — full-width technology architecture card ─────────────────

export interface TechPillarCardProps {
  code: string;
  title: string;
  description: string;
  specs: string[];
  className?: string;
}

export function TechPillarCard({ code, title, description, specs, className }: TechPillarCardProps) {
  return (
    <Card padding="lg" className={cn('space-y-4', className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#3D9D99]">
          {code}
        </span>
        <span className="flex-1 h-px bg-[rgba(23,25,26,0.10)]" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#17191A] tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-sm text-[#57595B] leading-relaxed">{description}</p>
      <ul className="space-y-2" aria-label="Technical specifications">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-[#57595B]">
            <span
              className="material-symbols-outlined text-[14px] text-[#3D9D99] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              check_small
            </span>
            {spec}
          </li>
        ))}
      </ul>
    </Card>
  );
}
