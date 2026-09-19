import React from 'react';
import Link from 'next/link';
import { ResolvedRelatedContent } from '@/content';

export interface RelatedContentProps {
  related: ResolvedRelatedContent;
  title?: string;
  className?: string;
}

export function RelatedContent({
  related,
  title = 'Connected Systems & Architecture',
  className = '',
}: RelatedContentProps) {
  const hasItems =
    related.technologies.length > 0 ||
    related.solutions.length > 0 ||
    related.products.length > 0 ||
    related.insights.length > 0 ||
    related.caseStudies.length > 0;

  if (!hasItems) return null;

  return (
    <section className={`py-16 border-t border-[#17191A]/10 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-semibold">
          SYSTEM INTERCONNECT
        </span>
      </div>
      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Technologies */}
        {related.technologies.map((tech) => (
          <Link
            key={tech.id}
            href={`/technology/${tech.slug}`}
            className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#9E7B78]">
                  TECHNOLOGY // {tech.category}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#84888A] group-hover:translate-x-1 group-hover:text-[#9E7B78] transition-all">
                  arrow_forward
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                {tech.name}
              </h4>
              <p className="font-sans text-xs text-[#57595B] line-clamp-2">
                {tech.shortDescription}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#17191A]/05 font-mono text-[11px] text-[#9E7B78] font-medium">
              Inspect Architecture →
            </div>
          </Link>
        ))}

        {/* Solutions */}
        {related.solutions.map((sol) => (
          <Link
            key={sol.id}
            href={`/solutions/${sol.slug}`}
            className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-indigo-600">
                  SOLUTION // {sol.category}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#84888A] group-hover:translate-x-1 group-hover:text-[#9E7B78] transition-all">
                  arrow_forward
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                {sol.name}
              </h4>
              <p className="font-sans text-xs text-[#57595B] line-clamp-2">
                {sol.summary}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#17191A]/05 font-mono text-[11px] text-[#9E7B78] font-medium">
              Explore Blueprint →
            </div>
          </Link>
        ))}

        {/* Products */}
        {related.products.map((prod) => (
          <Link
            key={prod.id}
            href={`/products/${prod.slug}`}
            className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-amber-700">
                  PRODUCT // {prod.category}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#84888A] group-hover:translate-x-1 group-hover:text-[#9E7B78] transition-all">
                  arrow_forward
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                {prod.name}
              </h4>
              <p className="font-sans text-xs text-[#57595B] line-clamp-2">
                {prod.summary}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#17191A]/05 font-mono text-[11px] text-[#9E7B78] font-medium">
              Inspect Product Stack →
            </div>
          </Link>
        ))}

        {/* Case Studies */}
        {related.caseStudies.map((cs) => (
          <Link
            key={cs.id}
            href={`/case-studies/${cs.slug}`}
            className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#57595B]">
                  CASE STUDY // {cs.industry}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#84888A] group-hover:translate-x-1 group-hover:text-[#9E7B78] transition-all">
                  arrow_forward
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                {cs.title}
              </h4>
              <p className="font-sans text-xs text-[#57595B] line-clamp-2">
                {cs.outcome}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#17191A]/05 font-mono text-[11px] text-[#9E7B78] font-medium">
              Read Case Study →
            </div>
          </Link>
        ))}

        {/* Insights */}
        {related.insights.map((ins) => (
          <Link
            key={ins.id}
            href={`/insights/${ins.slug}`}
            className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#9E7B78] transition-all flex flex-col justify-between group shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#9E7B78]">
                  INSIGHT // {ins.format}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#84888A] group-hover:translate-x-1 group-hover:text-[#9E7B78] transition-all">
                  arrow_forward
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-[#17191A] mb-2 group-hover:text-[#9E7B78] transition-colors">
                {ins.title}
              </h4>
              <p className="font-sans text-xs text-[#57595B] line-clamp-2">
                {ins.excerpt}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#17191A]/05 font-mono text-[11px] text-[#9E7B78] font-medium">
              Read Research Paper →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
