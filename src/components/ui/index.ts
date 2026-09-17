/**
 * NexAgent UI Component Library
 * Barrel export — import from '@/components/ui'
 *
 * ⚠️  Rule: Only add exports here for components that are part of
 *     the NexAgent Design System. Page-specific components should
 *     remain in /components (not /components/ui).
 */

// ── Layout ──────────────────────────────────────────────────────────────────
export {
  PageContainer,
  SectionContainer,
  ContentContainer,
  NarrowContainer,
  WideContainer,
} from './Container';

// ── Button ──────────────────────────────────────────────────────────────────
export {
  Button,
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  IconButton,
} from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// ── Typography ──────────────────────────────────────────────────────────────
export { SectionHeader, Eyebrow } from './SectionHeader';
export type { SectionHeaderProps } from './SectionHeader';

// ── Indicators ──────────────────────────────────────────────────────────────
export { Badge, StatusBadge } from './Badge';
export type { BadgeProps, BadgeVariant, SystemStatus } from './Badge';

// ── Cards ───────────────────────────────────────────────────────────────────
export {
  Card,
  MetricCard,
  FeatureCard,
  InsightCard,
  TechPillarCard,
} from './Card';

// ── Forms ───────────────────────────────────────────────────────────────────
export {
  Input,
  Textarea,
  Select,
  FormField,
  FormError,
  FormSuccess,
} from './FormField';

// ── Accordion ───────────────────────────────────────────────────────────────
export { AccordionItem, AccordionGroup } from './Accordion';

// ── States ──────────────────────────────────────────────────────────────────
export {
  LoadingSkeleton,
  CardSkeleton,
  PageLoader,
  EmptyState,
  ErrorState,
} from './States';

// ── Divider ─────────────────────────────────────────────────────────────────
export { Divider } from './Divider';
