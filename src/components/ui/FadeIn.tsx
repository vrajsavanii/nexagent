"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  stagger?: boolean;
  as?: React.ElementType;
}

/**
 * FadeIn — one-shot scroll-triggered reveal component.
 * Uses IntersectionObserver, not Framer Motion, for minimal bundle impact.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  stagger = false,
  as: Tag = "div"
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale"
  }[direction];

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        revealClass,
        visible && "in-view",
        stagger && "stagger-children",
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealGrid — wraps a grid of children and stagger-reveals them.
 * Each child gets a CSS animation delay based on its index.
 */
interface RevealGridProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealGrid({ children, className }: RevealGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("stagger-children", className)}
    >
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className={cn("reveal", visible && "in-view")}
          style={{ transitionDelay: `${i * 75}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
