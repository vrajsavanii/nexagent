'use client';

import React from 'react';
import { FadeIn } from '@/components/MotionWrapper';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { ContentReadinessStatus } from '@/content/types';

export interface ContentHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  readiness?: ContentReadinessStatus | string;
  metadataItems?: { label: string; value: string }[];
  className?: string;
}

export function ContentHero({
  breadcrumbs,
  eyebrow,
  title,
  titleAccent,
  subtitle,
  readiness = 'ACTIVE',
  metadataItems = [],
  className = '',
}: ContentHeroProps) {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-[#9E7B78]/15 text-[#9E7B78] border-[#9E7B78]/30';
      case 'IN_DEVELOPMENT':
      case 'IN DEVELOPMENT':
        return 'bg-amber-500/10 text-amber-700 border-amber-500/30';
      case 'EXPLORING':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/30';
      case 'CONCEPT':
      default:
        return 'bg-[#17191A]/08 text-[#57595B] border-[#17191A]/15';
    }
  };

  const formatReadinessLabel = (status: string) => {
    return status.replace(/_/g, ' ');
  };

  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[#17191A]/10 ${className}`}>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      <FadeIn direction="up">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold">
            {eyebrow}
          </span>
          {readiness && (
            <span
              className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded border ${getBadgeStyle(
                readiness
              )}`}
            >
              {formatReadinessLabel(readiness)}
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.08] max-w-4xl">
          {title}{' '}
          {titleAccent && <span className="italic font-light text-[#9E7B78]">{titleAccent}</span>}
        </h1>

        {subtitle && (
          <p className="font-sans text-base sm:text-lg text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            {subtitle}
          </p>
        )}

        {metadataItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[#17191A]/10 font-mono text-xs text-[#57595B]">
            {metadataItems.map((meta) => (
              <div key={meta.label} className="flex items-center gap-2">
                <span className="text-[#84888A] uppercase tracking-wider text-[10px]">{meta.label}:</span>
                <span className="text-[#17191A] font-medium">{meta.value}</span>
              </div>
            ))}
          </div>
        )}
      </FadeIn>
    </section>
  );
}
