"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  category?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  id,
  title,
  category,
  children,
  isOpen,
  onToggle
}: AccordionItemProps) {
  return (
    <div className="border border-slate-200/80 rounded-xl bg-white overflow-hidden transition-colors hover:border-slate-300">
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <div className="flex flex-col gap-1 pr-4">
          {category && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-600 font-semibold">
              {category}
            </span>
          )}
          <span className="font-display font-semibold text-base sm:text-lg text-slate-900 leading-snug">
            {title}
          </span>
        </div>
        <div
          className={cn(
            "shrink-0 w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 transition-transform duration-300",
            isOpen && "rotate-180 bg-brand-50 border-brand-200 text-brand-700"
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          id={`accordion-panel-${id}`}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 font-sans text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fade-in"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
    category?: string;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          category={item.category}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
