/**
 * NexAgent Container System
 *
 * Semantic layout containers that enforce consistent max-widths, gutters,
 * and padding across the entire website. Never use ad-hoc max-w + px values.
 *
 * Usage:
 *   <PageContainer>     — full page wrapper, constrained to layout width
 *   <SectionContainer>  — section with standard vertical rhythm
 *   <ContentContainer>  — wide content (cards, grids)
 *   <NarrowContainer>   — reading-optimized prose width
 *   <WideContainer>     — immersive / full-bleed content areas
 */

import React from 'react';
import { cn } from '@/lib/utils';

// ─── PageContainer ────────────────────────────────────────────────────────────
// The outermost page wrapper. All interior sections live inside this.
// Provides horizontal padding and centers content.

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function PageContainer({
  children,
  className,
  as: Tag = 'div',
}: PageContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10',
        className
      )}
    >
      {children}
    </Tag>
  );
}

// ─── SectionContainer ─────────────────────────────────────────────────────────
// Wraps a logical page section with consistent vertical spacing.
// Use `size` to control vertical rhythm density.

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
  border?: 'top' | 'bottom' | 'both' | 'none';
}

export function SectionContainer({
  children,
  className,
  as: Tag = 'section',
  size = 'md',
  id,
  border = 'none',
}: SectionContainerProps) {
  const sizeClasses = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-28 lg:py-32',
  };

  const borderClasses = {
    top:    'border-t border-[var(--nx-border)]',
    bottom: 'border-b border-[var(--nx-border)]',
    both:   'border-t border-b border-[var(--nx-border)]',
    none:   '',
  };

  return (
    <Tag
      id={id}
      className={cn(sizeClasses[size], borderClasses[border], className)}
    >
      {children}
    </Tag>
  );
}

// ─── ContentContainer ─────────────────────────────────────────────────────────
// Standard content width — grids, card collections, side-by-side layouts.

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  width?: 'default' | 'wide' | 'narrow' | 'reading';
}

export function ContentContainer({
  children,
  className,
  as: Tag = 'div',
  width = 'default',
}: ContentContainerProps) {
  const widthClasses = {
    reading: 'max-w-[68ch]',
    narrow:  'max-w-[720px]',
    default: 'max-w-[960px]',
    wide:    'max-w-[1100px]',
  };

  return (
    <Tag className={cn('mx-auto w-full', widthClasses[width], className)}>
      {children}
    </Tag>
  );
}

// ─── NarrowContainer ──────────────────────────────────────────────────────────
// For long-form reading — insights, technical essays, policies.
// Limits line length to a comfortable reading measure (~68ch).

interface NarrowContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function NarrowContainer({
  children,
  className,
  as: Tag = 'div',
}: NarrowContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[680px]', className)}>
      {children}
    </Tag>
  );
}

// ─── WideContainer ────────────────────────────────────────────────────────────
// For immersive sections — 3D viewers, large diagrams, full-width tables.
// Allows content to breathe beyond the standard layout constraint.

interface WideContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function WideContainer({
  children,
  className,
  as: Tag = 'div',
}: WideContainerProps) {
  return (
    <Tag className={cn('w-full max-w-[1440px] mx-auto', className)}>
      {children}
    </Tag>
  );
}
