import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedInsights } from '@/content';
import { FadeIn } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Insights & Systems Architecture Research | NexAgent',
  description: 'Technical analyses, operational frameworks, and engineering breakdowns on autonomous multi-agent consensus, sovereign cloud GPU enclaves, and low-latency voice runtimes.',
  alternates: {
    canonical: 'https://nexagent.group/insights',
  },
  openGraph: {
    title: 'Insights & Systems Architecture Research | NexAgent',
    description: 'Technical analyses and operational frameworks on autonomous agent consensus, sovereign GPU infrastructure, and enterprise AI.',
    url: 'https://nexagent.group/insights',
    siteName: 'NexAgent',
    type: 'website',
  },
};

export default function InsightsIndexPage() {
  const insights = getPublishedInsights();

  const categories = [
    'All Categories',
    'AI Agents',
    'Cloud & Compute',
    'Automation',
    'Engineering',
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[#17191A]/10">
        <Breadcrumbs items={[{ label: 'Insights' }]} className="mb-8" />

        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              ENGINEERING &amp; RESEARCH ARCHITECTURE
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.05] max-w-4xl">
            SYSTEMS ARCHITECTURE,{' '}
            <span className="italic font-light text-[#3D9D99]">RESEARCH &amp; ANALYSIS.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            Rigorous technical breakdowns, operational frameworks, and engineering standards published by the NexAgent Systems Architecture Group. Focus on deterministic multi-agent consensus, sovereign GPU compute, and sub-200ms real-time audio.
          </p>
        </FadeIn>
      </section>

      {/* Main Insights Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-8">
            {insights.map((insight, idx) => (
              <FadeIn key={insight.id} direction="up" delay={idx * 0.1}>
                <article className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all flex flex-col justify-between group shadow-xs">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#3D9D99] bg-[#3D9D99]/10 px-2 py-0.5 rounded">
                          {insight.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase text-[#84888A]">
                          {insight.format}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#57595B]">
                        {insight.readTimeMinutes} min read
                      </span>
                    </div>

                    <Link href={`/insights/${insight.slug}`}>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#17191A] mb-3 group-hover:text-[#3D9D99] transition-colors leading-tight">
                        {insight.title}
                      </h2>
                    </Link>

                    <p className="font-sans text-sm text-[#57595B] leading-relaxed mb-6">
                      {insight.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {insight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-[#57595B] bg-[#F7F7F5] border border-[#17191A]/05 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#17191A]/10 flex items-center justify-between font-mono text-xs text-[#57595B]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#17191A] font-medium">{insight.author.name}</span>
                    </div>
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="text-[#3D9D99] font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      Read Analysis →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#3D9D99] block mb-3">
                EDITORIAL INTEGRITY
              </span>
              <h3 className="font-display text-base font-semibold text-[#17191A] mb-2">
                Pure Architectural Focus
              </h3>
              <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                NexAgent Insights does not publish generic promotional copy. Every paper provides verified mathematical latency budgets, reproducible architectural patterns, or operational governance frameworks.
              </p>
            </div>

            <div className="p-6 bg-[#17191A] text-white rounded-sm">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#3D9D99] block mb-2">
                INSTITUTIONAL ADVISORY
              </span>
              <h3 className="font-display text-lg font-light mb-3">
                Have a Complex Technical Challenge?
              </h3>
              <p className="font-sans text-xs text-[#84888A] leading-relaxed mb-6">
                Our senior systems architects consult directly with enterprise CTOs and engineering teams to audit and model autonomous workflows.
              </p>
              <Link
                href="/book-a-strategy-call"
                className="inline-block w-full py-2.5 px-4 bg-[#3D9D99] hover:bg-[#348582] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded text-center transition-all"
              >
                Schedule Technical Session →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
