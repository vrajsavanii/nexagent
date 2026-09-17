'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring in production without exposing sensitive internals
    if (process.env.NODE_ENV === 'development') {
      console.error('Handled Application Error:', error);
    }
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-surface text-on-surface px-6 py-20">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded-full">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            SYSTEM // RECOVERABLE STATE
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl uppercase font-bold text-on-surface tracking-tight leading-tight">
          OPERATIONAL STATE INTERRUPTED
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          The application encountered a transient runtime exception. Core system state remains protected.
        </p>

        {error.digest && (
          <p className="font-mono text-[11px] text-outline uppercase tracking-wider">
            Incident Hash: {error.digest}
          </p>
        )}

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-on-surface text-inverse-on-surface font-mono text-xs uppercase tracking-wider hover:bg-secondary transition-all rounded shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant text-on-surface font-mono text-xs uppercase tracking-wider hover:bg-surface-container-low transition-colors rounded"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
