/**
 * NexAgent UI Utility — className merging helper
 *
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * Use `cn()` instead of template literals or string concatenation for
 * all Tailwind className composition.
 *
 * @example
 *   cn('px-4 py-2', isActive && 'bg-nx-teal', className)
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
