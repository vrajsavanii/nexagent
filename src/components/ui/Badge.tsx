import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "titanium" | "slate" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "teal",
  className = "",
  size = "sm"
}: BadgeProps) {
  const variantStyles = {
    teal: "bg-brand-50 text-brand-800 border-brand-200/70",
    titanium: "bg-titanium-50 text-titanium-800 border-titanium-200/70",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-white text-slate-700 border-slate-200 shadow-2xs"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-wide"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium uppercase border rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse-subtle" />
      {children}
    </span>
  );
}
