import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function Logo({ className = "", size = "md", showWordmark = true }: LogoProps) {
  const sizeMap = {
    sm: { img: 28, text: "text-sm tracking-[0.2em]" },
    md: { img: 36, text: "text-base tracking-[0.22em]" },
    lg: { img: 48, text: "text-lg tracking-[0.25em]" }
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="NexAgent - Home"
    >
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src="/logo.jpeg"
          alt="NexAgent Brand Mark"
          width={currentSize.img}
          height={currentSize.img}
          className="object-cover"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-display font-bold uppercase text-slate-900 ${currentSize.text}`}>
            NexAgent
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
            Intelligent Systems
          </span>
        </div>
      )}
    </Link>
  );
}
