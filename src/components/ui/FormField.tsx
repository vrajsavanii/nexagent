/**
 * NexAgent Form Primitives
 *
 * Standardized form components replacing duplicated inline form styles
 * in StrategyCallForm.tsx, contact/page.tsx, and the audit calculator modal.
 *
 * Components:
 *   FormField   — label + input/select/textarea + error message wrapper
 *   Input       — styled text input
 *   Textarea    — styled multi-line textarea
 *   Select      — styled native select
 *   FormError   — inline error message
 *   FormSuccess — inline success state
 */

'use client';

import React, { useId } from 'react';
import { cn } from '@/lib/utils';

// ─── Base input styles shared across input/select/textarea ────────────────────

const baseInputStyles = [
  'w-full bg-white text-[#17191A] placeholder:text-[#84888A]',
  'border border-[rgba(23,25,26,0.18)]',
  'rounded-sm',
  'text-sm leading-normal font-sans',
  'transition-colors duration-fast',
  'focus:outline-none focus:border-[#9E7B78] focus:ring-1 focus:ring-[rgba(158,123,120,0.25)]',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#F7F7F5]',
].join(' ');

const errorInputStyles = 'border-[#B91C1C] focus:border-[#B91C1C] focus:ring-[rgba(185,28,28,0.20)]';

// ─── Input ────────────────────────────────────────────────────────────────────

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          baseInputStyles,
          'px-3.5 py-2.5 h-10',
          error && errorInputStyles,
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

// ─── Textarea ─────────────────────────────────────────────────────────────────

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          baseInputStyles,
          'px-3.5 py-2.5 min-h-[100px] resize-y',
          error && errorInputStyles,
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// ─── Select ───────────────────────────────────────────────────────────────────

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            baseInputStyles,
            'px-3.5 py-2.5 h-10 pr-10 appearance-none cursor-pointer',
            error && errorInputStyles,
            className
          )}
          {...props}
        >
          {children}
        </select>
        <span
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#84888A]"
          aria-hidden="true"
        >
          expand_more
        </span>
      </div>
    );
  }
);
Select.displayName = 'Select';

// ─── FormField — the orchestrating wrapper ────────────────────────────────────

export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function FormField({
  label,
  required,
  error,
  hint,
  className,
  children,
  id: externalId,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = externalId ?? generatedId;

  // Clone child element to inject id and error props
  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<{ id?: string; error?: boolean }>, {
        id: fieldId,
        error: Boolean(error),
      })
    : children;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={fieldId}
        className="font-mono text-[11px] uppercase tracking-[0.07em] font-semibold text-[#57595B]"
      >
        {label}
        {required && (
          <span className="text-[#B91C1C] ml-0.5" aria-label="required">
            *
          </span>
        )}
      </label>
      {childWithProps}
      {hint && !error && (
        <p className="text-[11px] text-[#84888A] leading-relaxed">{hint}</p>
      )}
      {error && (
        <p
          className="flex items-center gap-1.5 text-[11px] text-[#B91C1C]"
          role="alert"
          aria-live="polite"
        >
          <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
            error
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── FormError — standalone error message (for API/submit errors) ─────────────

export interface FormErrorProps {
  message: string;
  className?: string;
}

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        'flex items-start gap-2.5 p-3.5 rounded-sm',
        'bg-[rgba(185,28,28,0.06)] border border-[rgba(185,28,28,0.20)]',
        'text-sm text-[#B91C1C]',
        className
      )}
    >
      <span className="material-symbols-outlined text-[18px] flex-shrink-0 mt-0.5" aria-hidden="true">
        error
      </span>
      <span>{message}</span>
    </div>
  );
}

// ─── FormSuccess — success confirmation message ───────────────────────────────

export interface FormSuccessProps {
  title: string;
  message?: string;
  className?: string;
}

export function FormSuccess({ title, message, className }: FormSuccessProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex items-start gap-3 p-4 rounded-sm',
        'bg-[rgba(21,128,61,0.06)] border border-[rgba(21,128,61,0.20)]',
        className
      )}
    >
      <span
        className="material-symbols-outlined text-[20px] text-[#15803D] flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        check_circle
      </span>
      <div>
        <p className="text-sm font-semibold text-[#15803D]">{title}</p>
        {message && (
          <p className="text-sm text-[#57595B] mt-0.5 leading-relaxed">{message}</p>
        )}
      </div>
    </div>
  );
}
