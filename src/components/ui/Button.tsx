/**
 * NexAgent Button System
 *
 * The single canonical Button component for all interactive CTAs.
 * Use this instead of inline anchor/button styles or CtaSystem.tsx primitives.
 *
 * Variants:
 *   primary   — main CTA: dark graphite fill, white text
 *   secondary — secondary: outlined border, dark text
 *   ghost     — minimal: no border, teal text
 *   icon      — square icon-only button
 *
 * As prop allows rendering as <a>, <Link>, <button> depending on context.
 *
 * Usage:
 *   <Button variant="primary" href="/book-a-strategy-call">
 *     Book a Strategy Call
 *   </Button>
 *   <Button variant="secondary" onClick={handleClick} loading>
 *     Processing...
 *   </Button>
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;      // Material Symbol icon name (trailing icon)
  iconLeading?: string; // Material Symbol icon name (leading icon)
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  tabIndex?: number;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#17191A] text-white',
    'hover:bg-[#2A2E32]',
    'active:scale-[0.98]',
    'border border-transparent',
    'shadow-sm hover:shadow',
    'disabled:bg-[#84888A] disabled:shadow-none disabled:cursor-not-allowed',
  ].join(' '),

  secondary: [
    'bg-white text-[#17191A]',
    'border border-[rgba(23,25,26,0.18)] hover:border-[rgba(23,25,26,0.5)]',
    'active:scale-[0.98]',
    'shadow-sm',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),

  ghost: [
    'bg-transparent text-[#3D9D99]',
    'border border-transparent hover:border-[rgba(61,157,153,0.3)]',
    'hover:bg-[rgba(61,157,153,0.06)]',
    'active:scale-[0.98]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),

  icon: [
    'bg-transparent text-[#57595B]',
    'border border-[rgba(23,25,26,0.12)] hover:border-[rgba(23,25,26,0.3)]',
    'hover:text-[#17191A] hover:bg-[rgba(23,25,26,0.04)]',
    'active:scale-[0.95]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-[11px] gap-1.5',
  md: 'px-5 py-2.5 text-xs gap-2',
  lg: 'px-7 py-3.5 text-xs gap-2.5',
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  disabled,
  loading,
  icon,
  iconLeading,
  className,
  onClick,
  children,
  type = 'button',
  'aria-label': ariaLabel,
  tabIndex,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const isIconOnly = variant === 'icon' || (!children && (icon || iconLeading));

  const baseClasses = cn(
    // Core layout
    'inline-flex items-center justify-center',
    'font-mono uppercase tracking-wider font-semibold',
    'select-none cursor-pointer',
    // Shared transitions — fast feel, standard easing
    'transition-all duration-150',
    'rounded-sm',
    // Focus ring — deferred to :focus-visible in globals.css
    'focus-visible:outline-2 focus-visible:outline-[#3D9D99]',
    // Size
    isIconOnly ? iconSizeStyles[size] : sizeStyles[size],
    // Variant
    variantStyles[variant],
    // State overrides
    isDisabled && 'pointer-events-none',
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="material-symbols-outlined text-[15px] animate-spin">
          progress_activity
        </span>
      ) : (
        <>
          {iconLeading && (
            <span className="material-symbols-outlined text-[15px]">
              {iconLeading}
            </span>
          )}
          {children && <span>{children}</span>}
          {icon && !isIconOnly && (
            <span
              className={cn(
                'material-symbols-outlined text-[15px]',
                variant === 'primary' && 'group-hover:translate-x-0.5 transition-transform duration-150'
              )}
            >
              {icon}
            </span>
          )}
          {icon && isIconOnly && (
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
          )}
        </>
      )}
    </>
  );

  // Render as external anchor
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, 'group')}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      >
        {content}
        <span className="material-symbols-outlined text-[13px] opacity-60">
          open_in_new
        </span>
      </a>
    );
  }

  // Render as Next.js Link
  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, 'group')}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      >
        {content}
      </Link>
    );
  }

  // Render as native button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(baseClasses, 'group')}
      aria-label={ariaLabel}
      aria-busy={loading}
      tabIndex={tabIndex}
    >
      {content}
    </button>
  );
}

// ─── Convenience exports for semantic intent ─────────────────────────────────

export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="secondary" />;
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="ghost" />;
}

export function IconButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="icon" />;
}
