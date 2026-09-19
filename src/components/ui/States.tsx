/**
 * NexAgent Loading & Empty State Primitives
 *
 * Consistent branded states for:
 * - LoadingSkeleton: content placeholder during async loading
 * - PageLoader: full-section loading state with NexAgent branding
 * - EmptyState: no-content state for dynamic search/filter results
 * - ErrorState: recoverable error with retry action
 */

import React from 'react';
import { cn } from '@/lib/utils';

// ─── LoadingSkeleton — shimmer placeholder block ──────────────────────────────

export interface LoadingSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export function LoadingSkeleton({
  className,
  width,
  height,
  rounded = false,
}: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-[rgba(23,25,26,0.06)] relative overflow-hidden',
        'before:absolute before:inset-0',
        'before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.6)] before:to-transparent',
        'before:animate-[shimmer_1.5s_infinite]',
        rounded ? 'rounded-full' : 'rounded-sm',
        className
      )}
      style={{ width, height }}
      aria-hidden="true"
      role="presentation"
    />
  );
}

// ─── CardSkeleton — loading placeholder for content cards ────────────────────

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-white border border-[rgba(23,25,26,0.10)] rounded p-5 space-y-3',
        className
      )}
      aria-hidden="true"
    >
      <LoadingSkeleton height="12px" width="40%" />
      <LoadingSkeleton height="20px" width="80%" />
      <LoadingSkeleton height="16px" width="60%" />
      <div className="pt-3 border-t border-[rgba(23,25,26,0.06)]">
        <LoadingSkeleton height="12px" width="30%" />
      </div>
    </div>
  );
}

// ─── PageLoader — branded full-section loading indicator ─────────────────────

export interface PageLoaderProps {
  label?: string;
  className?: string;
}

export function PageLoader({
  label = 'Loading...',
  className,
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        'py-20 text-center',
        className
      )}
      role="status"
      aria-label={label}
    >
      {/* Animated NexAgent monogram dots */}
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#9E7B78]"
            style={{
              animation: 'pulse 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#84888A]">
        {label}
      </p>
    </div>
  );
}

// ─── EmptyState — no content state ───────────────────────────────────────────

export interface EmptyStateProps {
  icon?: string;        // Material Symbol name
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'py-16 px-6',
        className
      )}
      role="status"
    >
      {icon && (
        <span
          className="material-symbols-outlined text-[40px] text-[#BDC9C7] mb-4"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <h3 className="text-base font-semibold text-[#17191A] tracking-tight">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-[#57595B] max-w-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

// ─── ErrorState — recoverable error with retry ────────────────────────────────

export interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'py-16 px-6',
        className
      )}
      role="alert"
    >
      <span
        className="material-symbols-outlined text-[36px] text-[#B91C1C] mb-4"
        aria-hidden="true"
      >
        error_outline
      </span>
      <h3 className="text-base font-semibold text-[#17191A] tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-[#57595B] max-w-sm leading-relaxed">{description}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className={cn(
            'mt-6 font-mono text-[11px] uppercase tracking-wider font-semibold',
            'text-[#9E7B78] hover:text-[#17191A]',
            'flex items-center gap-1.5 transition-colors duration-fast'
          )}
        >
          <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
            refresh
          </span>
          Try again
        </button>
      )}
    </div>
  );
}
