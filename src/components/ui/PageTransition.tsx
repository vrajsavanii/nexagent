"use client";

import React from "react";

/**
 * PageTransition — wraps page content with a smooth fade-in on mount.
 * Applied at the layout level so every page-to-page navigation feels fluid.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}
