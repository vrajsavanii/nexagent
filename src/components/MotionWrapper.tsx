"use client";

import React from "react";
import { motion, HTMLMotionProps, useScroll, useSpring, useReducedMotion } from "framer-motion";

// ─── Motion Design Tokens ────────────────────────────────────────────────────
// Centralized constants for all animation across the site.
// Never hardcode durations or easings in individual components.

export const MOTION = {
  // Durations (seconds)
  duration: {
    fast:     0.15,
    standard: 0.28,
    slow:     0.60,
    enter:    0.35,
    exit:     0.20,
  },
  // Cubic bezier easings — match CSS variables in globals.css
  ease: {
    standard:  [0.22, 1, 0.36, 1]    as [number, number, number, number],
    emphasis:  [0.16, 1, 0.3, 1]     as [number, number, number, number],
    enter:     [0.0, 0.0, 0.2, 1]    as [number, number, number, number],
    exit:      [0.4, 0.0, 1, 1]      as [number, number, number, number],
  },
  // Viewport margins for whileInView triggers
  viewport: { once: true, margin: "0px" },
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────
/**
 * Smooth fade-in with directional slide, triggered when scrolled into view.
 * Automatically disables movement (preserves fade) when prefers-reduced-motion.
 */
export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = MOTION.duration.enter,
  className = "",
  ...props
}: MotionProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = prefersReducedMotion ? 0 : 24;

  const getInitial = () => {
    switch (direction) {
      case "down":  return { opacity: 0, y: -offset };
      case "left":  return { opacity: 0, x: offset  };
      case "right": return { opacity: 0, x: -offset };
      case "up":
      default:      return { opacity: 0, y: offset  };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case "left":
      case "right": return { opacity: 1, x: 0 };
      case "down":
      case "up":
      default:      return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration,
        delay,
        ease: MOTION.ease.standard,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerContainer ─────────────────────────────────────────────────────────
/**
 * Orchestrates sequential children animations.
 * Pair with <StaggerItem> children.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.09,
  stagger,
  delay = 0,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  staggerDelay?: number;
  stagger?: number;
  delay?: number;
  className?: string;
}) {
  const effectiveStagger = stagger ?? staggerDelay;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={MOTION.viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: effectiveStagger,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────
/**
 * Individual item for use inside <StaggerContainer>.
 * Respects prefers-reduced-motion via parent variants.
 */
export function StaggerItem({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: MOTION.duration.slow,
            ease: MOTION.ease.standard,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── ScaleIn ──────────────────────────────────────────────────────────────────
/**
 * Gentle scale-in reveal for cards, media, and 3D canvases.
 * Scale amount is halved when prefers-reduced-motion is active.
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = MOTION.duration.slow,
  className = "",
  ...props
}: MotionProps) {
  const prefersReducedMotion = useReducedMotion();
  const scaleFrom = prefersReducedMotion ? 0.98 : 0.94;

  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={MOTION.viewport}
      transition={{
        duration,
        delay,
        ease: MOTION.ease.standard,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── ScrollProgressBar ────────────────────────────────────────────────────────
/**
 * Micro progress bar fixed at the very top of the page.
 * GPU-accelerated via CSS transform.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9E7B78] via-[#D7CBB8] to-[#9E7B78] z-50 origin-left pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
