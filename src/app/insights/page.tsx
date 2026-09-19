import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { INSIGHTS_DATA } from "@/data/insights";
import { ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Technical Writing",
  description:
    "Engineering essays, system architecture notes, and technology analyses from the NexAgent engineering team."
};

export default function InsightsPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="EDITORIAL & ANALYSIS"
          badgeVariant="titanium"
          title="NEXAGENT INSIGHTS."
          subtitle="Architectural perspectives, systems engineering analyses, and practical guides on deploying autonomous business systems."
        />

        {/* Featured Article */}
        {INSIGHTS_DATA.length > 0 && (
          <div className="mb-12">
            <Link
              href={`/insights/${INSIGHTS_DATA[0].slug}`}
              className="group block p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium hover:border-brand-400 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-0.5 rounded-sm bg-brand-50 border border-brand-200">
                  {INSIGHTS_DATA[0].category}
                </span>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {INSIGHTS_DATA[0].readingTime}
                </span>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {INSIGHTS_DATA[0].publishedAt}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4 group-hover:text-brand-900 transition-colors">
                {INSIGHTS_DATA[0].title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-6">
                {INSIGHTS_DATA[0].excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <User className="w-3.5 h-3.5" />
                  <span>{INSIGHTS_DATA[0].author.name}</span>
                </div>

                <div className="font-display text-xs font-semibold text-brand-700 group-hover:text-brand-950 flex items-center gap-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {INSIGHTS_DATA.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-brand-400 hover:shadow-premium transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-700 font-bold px-2 py-0.5 rounded-sm bg-brand-50 border border-brand-200">
                    {article.category}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-brand-900 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-200 text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-display font-semibold text-brand-700 group-hover:text-brand-900">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
