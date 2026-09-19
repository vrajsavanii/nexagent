import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: "teal" | "titanium" | "slate" | "outline";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "teal",
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12 lg:mb-16",
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {badgeText && (
        <div>
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      )}

      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
