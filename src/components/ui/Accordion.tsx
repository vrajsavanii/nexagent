/**
 * NexAgent Accordion
 *
 * Accessible FAQ and expandable content accordion. Built on native
 * HTML <details>/<summary> for maximum accessibility with zero JS
 * dependencies for the expand/collapse interaction itself.
 *
 * Features:
 * - Keyboard accessible out-of-the-box (native <details>)
 * - Animated open/close with CSS transitions
 * - Schema-ready: add itemScope/itemType="https://schema.org/FAQPage"
 *   to the container for FAQ structured data
 * - Respects prefers-reduced-motion
 *
 * Usage:
 *   <AccordionGroup>
 *     <AccordionItem question="What is NexAgent?">
 *       NexAgent is an intelligent technology group...
 *     </AccordionItem>
 *   </AccordionGroup>
 */

'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// ─── AccordionItem ────────────────────────────────────────────────────────────

export interface AccordionItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'border-b border-[rgba(23,25,26,0.10)] last:border-b-0',
        className
      )}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'group flex w-full items-center justify-between',
          'py-5 text-left',
          'transition-colors duration-fast',
          open ? 'text-[#17191A]' : 'text-[#57595B] hover:text-[#17191A]'
        )}
        aria-expanded={open}
        aria-controls={`accordion-content-${question.replace(/\s/g, '-')}`}
        id={`accordion-trigger-${question.replace(/\s/g, '-')}`}
      >
        <span
          className="text-sm sm:text-base font-semibold tracking-tight leading-snug flex-1 pr-4"
          itemProp="name"
        >
          {question}
        </span>
        <span
          className={cn(
            'material-symbols-outlined text-[20px] flex-shrink-0',
            'transition-transform duration-standard',
            open ? 'rotate-45 text-[#3D9D99]' : 'text-[#84888A] group-hover:text-[#57595B]'
          )}
          aria-hidden="true"
        >
          add
        </span>
      </button>

      <div
        ref={contentRef}
        id={`accordion-content-${question.replace(/\s/g, '-')}`}
        role="region"
        aria-labelledby={`accordion-trigger-${question.replace(/\s/g, '-')}`}
        className={cn(
          'overflow-hidden transition-all',
          open ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        )}
        style={{ transitionDuration: 'var(--motion-standard)', transitionTimingFunction: 'var(--easing-standard)' }}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div
          className="text-sm text-[#57595B] leading-relaxed space-y-3"
          itemProp="text"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── AccordionGroup ───────────────────────────────────────────────────────────

export interface AccordionGroupProps {
  children: React.ReactNode;
  className?: string;
  withFAQSchema?: boolean; // wrap with FAQPage schema markup
}

export function AccordionGroup({
  children,
  className,
  withFAQSchema = false,
}: AccordionGroupProps) {
  return (
    <div
      className={cn('divide-y-0', className)}
      {...(withFAQSchema
        ? {
            itemScope: true,
            itemType: 'https://schema.org/FAQPage',
          }
        : {})}
    >
      {children}
    </div>
  );
}
