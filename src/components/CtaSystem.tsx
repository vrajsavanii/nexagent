'use client';

/**
 * NexAgent CTA System
 *
 * Business-logic CTAs with built-in analytics tracking.
 * These wrap the ui/Button primitive with NexAgent-specific defaults
 * and event tracking. Use these in page components; use Button from
 * ui/Button for generic interactive elements without analytics needs.
 */

import React from 'react';
import { trackEvent } from '@/lib/analytics';
import { Button, type ButtonProps } from '@/components/ui/Button';

export type CtaVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

// ─── PrimaryCTA ───────────────────────────────────────────────────────────────

export function PrimaryCTA({
  label = 'Book a Strategy Call',
  href = '/book-a-strategy-call',
  location = 'general',
  className = '',
  onClick,
}: {
  label?: string;
  href?: string;
  location?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      variant="primary"
      size="lg"
      href={href}
      icon="arrow_forward"
      className={className}
      onClick={(e) => {
        trackEvent('cta_click', { ctaName: label, ctaLocation: location });
        if (onClick) { e.preventDefault(); onClick(); }
      }}
    >
      {label}
    </Button>
  );
}

// ─── SecondaryCTA ─────────────────────────────────────────────────────────────

export function SecondaryCTA({
  label = 'Talk to NexAgent',
  href = '/contact',
  location = 'general',
  className = '',
  onClick,
}: {
  label?: string;
  href?: string;
  location?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      variant="secondary"
      size="lg"
      href={href}
      icon="arrow_forward"
      className={className}
      onClick={(e) => {
        trackEvent('cta_click', { ctaName: label, ctaLocation: location });
        if (onClick) { e.preventDefault(); onClick(); }
      }}
    >
      {label}
    </Button>
  );
}

// ─── ContextualCTA ────────────────────────────────────────────────────────────

export interface CtaButtonProps {
  label?: string;
  href?: string;
  variant?: CtaVariant;
  location?: string;
  context?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  external?: boolean;
  size?: ButtonProps['size'];
}

export function ContextualCTA({
  label,
  href = '/book-a-strategy-call',
  location,
  context,
  variant = 'primary',
  className = '',
  icon = 'arrow_forward',
  onClick,
  external,
  size = 'md',
  children,
}: CtaButtonProps) {
  const effectiveLocation = location || context || 'contextual';
  const displayLabel = label || (children as string);

  const buttonVariant = (variant === 'outline' || variant === 'secondary')
    ? 'secondary'
    : variant === 'ghost'
    ? 'ghost'
    : 'primary';

  return (
    <Button
      variant={buttonVariant}
      size={size}
      href={href}
      icon={icon}
      external={external}
      className={className}
      onClick={(e) => {
        trackEvent('cta_click', {
          ctaName: displayLabel || 'contextual_cta',
          ctaLocation: effectiveLocation,
        });
        if (onClick) { e.preventDefault(); onClick(); }
      }}
    >
      {displayLabel}
    </Button>
  );
}
