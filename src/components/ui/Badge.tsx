/**
 * NexAgent Badge System
 *
 * Standardized status and category indicators used across the site.
 * Replaces ad-hoc inline badge markup scattered across components.
 *
 * Variants:
 *   default   — neutral dark outline badge
 *   teal      — brand teal — active, live, production states
 *   champagne — warm metallic — premium, enterprise tier
 *   muted     — subtle grey — secondary, archived, in development
 *   error     — red — warning, deprecated
 *   success   — green — confirmed, verified, complete
 *
 * Usage:
 *   <Badge variant="teal">ACTIVE / PRODUCTION</Badge>
 *   <Badge variant="muted" dot>IN DEVELOPMENT</Badge>
 */

import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'teal' | 'champagne' | 'muted' | 'error' | 'success';

export interface BadgeProps {
  variant?: BadgeVariant;
  dot?: boolean;          // Show animated pulse dot before label
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:   'bg-[rgba(23,25,26,0.06)] border border-[rgba(23,25,26,0.15)] text-[#17191A]',
  teal:      'bg-[rgba(158,123,120,0.10)] border border-[rgba(158,123,120,0.25)] text-[#9E7B78]',
  champagne: 'bg-[rgba(215,203,184,0.20)] border border-[rgba(215,203,184,0.6)] text-[#7A6A55]',
  muted:     'bg-[rgba(132,136,138,0.08)] border border-[rgba(132,136,138,0.20)] text-[#84888A]',
  error:     'bg-[rgba(185,28,28,0.06)] border border-[rgba(185,28,28,0.20)] text-[#B91C1C]',
  success:   'bg-[rgba(21,128,61,0.06)] border border-[rgba(21,128,61,0.20)] text-[#15803D]',
};

const dotColors: Record<BadgeVariant, string> = {
  default:   'bg-[#17191A]',
  teal:      'bg-[#9E7B78]',
  champagne: 'bg-[#D7CBB8]',
  muted:     'bg-[#84888A]',
  error:     'bg-[#B91C1C]',
  success:   'bg-[#15803D]',
};

export function Badge({
  variant = 'default',
  dot = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-2.5 py-0.5',
        'font-mono text-[10px] uppercase tracking-[0.08em] font-semibold',
        'rounded-sm',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
          <span
            className={cn(
              'absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping',
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex h-1.5 w-1.5 rounded-full',
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}

// ─── StatusBadge — common shorthand for system status indicators ─────────────

export type SystemStatus = 'ACTIVE' | 'IN_DEVELOPMENT' | 'ENTERPRISE' | 'NEW' | 'DEPRECATED' | 'BETA';

const statusConfig: Record<SystemStatus, { label: string; variant: BadgeVariant; dot?: boolean }> = {
  ACTIVE:         { label: 'ACTIVE / PRODUCTION', variant: 'teal',      dot: true },
  IN_DEVELOPMENT: { label: 'IN DEVELOPMENT',       variant: 'muted',     dot: false },
  ENTERPRISE:     { label: 'ENTERPRISE',           variant: 'champagne', dot: false },
  NEW:            { label: 'NEW',                  variant: 'teal',      dot: true },
  DEPRECATED:     { label: 'DEPRECATED',           variant: 'error',     dot: false },
  BETA:           { label: 'BETA',                 variant: 'muted',     dot: true },
};

export function StatusBadge({ status, className }: { status: SystemStatus; className?: string }) {
  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} dot={config.dot} className={className}>
      {config.label}
    </Badge>
  );
}
