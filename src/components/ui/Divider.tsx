/**
 * NexAgent Divider
 *
 * Horizontal rule with optional label — for visual section breaks
 * within content areas. Cleaner than bare <hr> elements.
 *
 * Usage:
 *   <Divider />
 *   <Divider label="OR" />
 *   <Divider label="TECHNICAL SPECIFICATIONS" subtle />
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps {
  label?: string;
  subtle?: boolean;
  className?: string;
  vertical?: boolean;
}

export function Divider({ label, subtle = false, className, vertical = false }: DividerProps) {
  if (vertical) {
    return (
      <span
        className={cn(
          'inline-block self-stretch',
          subtle ? 'w-px bg-[rgba(23,25,26,0.08)]' : 'w-px bg-[rgba(23,25,26,0.15)]',
          className
        )}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (!label) {
    return (
      <hr
        className={cn(
          'border-none',
          subtle ? 'h-px bg-[rgba(23,25,26,0.08)]' : 'h-px bg-[rgba(23,25,26,0.15)]',
          className
        )}
        role="separator"
      />
    );
  }

  return (
    <div
      className={cn('flex items-center gap-4', className)}
      role="separator"
    >
      <span
        className={cn(
          'flex-1 h-px',
          subtle ? 'bg-[rgba(23,25,26,0.08)]' : 'bg-[rgba(23,25,26,0.15)]'
        )}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#84888A]">
        {label}
      </span>
      <span
        className={cn(
          'flex-1 h-px',
          subtle ? 'bg-[rgba(23,25,26,0.08)]' : 'bg-[rgba(23,25,26,0.15)]'
        )}
      />
    </div>
  );
}
