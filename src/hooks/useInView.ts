"use client";

import { useEffect, useRef, useState } from "react";

// Reusable hook: triggers when element enters the viewport once
// Returns [ref, isVisible]
export function useInView(options?: IntersectionObserverInit): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
