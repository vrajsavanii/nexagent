"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // max pixel shift, default 6
  as?: React.ElementType;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * MagneticButton — applies a gentle magnetic pull toward the cursor on hover.
 * Desktop-only (touch devices are unaffected).
 * Max shift is capped at `strength` pixels for subtlety.
 */
export function MagneticButton({
  children,
  className,
  strength = 6,
  as: Tag = "div",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      // Skip on touch/mobile
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
      const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;

      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    // Reset transition after spring settles
    setTimeout(() => {
      if (el) el.style.transition = "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)";
    }, 400);
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("magnetic-btn", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
