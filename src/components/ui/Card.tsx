import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  padding = "md",
  ...props
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10"
  };

  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-slate-200/80 shadow-2xs relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-brand-300/80 hover:shadow-premium hover:-translate-y-1",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
