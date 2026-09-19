import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedIndustries } from '@/content';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Industries | Technology Systems Adapted to Industry Workflows | NexAgent',
  description:
    'NexAgent adapts intelligent systems, workflow automation, and AI software to industry-specific operational constraints across Healthcare, Hospitality, B2B, and Financial Services.',
  alternates: {
    canonical: 'https://nexagent.group/industries',
  },
  openGraph: {
    title: 'Industries | Technology Systems Adapted to Industry Workflows | NexAgent',
    description:
      'Intelligent technology systems adapted to industry-specific workflows and operational complexity.',
    url: 'https://nexagent.group/industries',
    siteName: 'NexAgent',
    type: 'website',
  },
};

export default function IndustriesIndexPage() {
  const industriesList = getPublishedIndustries();

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'Industries' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9E7B78]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              INDUSTRY-ADAPTED SYSTEMS
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] max-w-4xl leading-[1.08]">
            ENGINEERED ACROSS <span className="font-light italic text-[#9E7B78]">INDUSTRIES.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-3xl leading-relaxed">
            NexAgent does not claim exclusive specialization in a single sector. Instead, we architect practical technology systems, automation pipelines, and intelligent software adapted around the operational nuances, regulatory standards, and existing software of diverse industries.
          </p>
        </FadeIn>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesList.map((ind) => (
            <StaggerItem key={ind.id}>
              <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-10 shadow-[0_12px_32px_-6px_rgba(42,43,46,0.06)] hover:border-[#9E7B78]/40 transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E7B78] bg-[rgba(158,123,120,0.10)] px-3 py-1 rounded-full">
                      {ind.slug.replace('-', ' ')}
                    </span>
                    <span className="text-xs font-mono text-[#738290]">
                      {ind.exampleWorkflows.length} Workflows
                    </span>
                  </div>

                  <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2A2B2E] group-hover:text-[#9E7B78] transition-colors mb-4">
                    {ind.name}
                  </h2>

                  <p className="text-sm text-[#738290] leading-relaxed mb-6">
                    {ind.overview}
                  </p>

                  {/* Key Challenges */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                      Key Friction Points Solved:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5E6572]">
                      {ind.operationalChallenges.slice(0, 3).map((ch, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#9E7B78] font-bold mt-0.5">↳</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Automation Focus */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                      Automation Vectors:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5E6572]">
                      {ind.automationOpportunities.slice(0, 3).map((opp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#15803D] font-bold mt-0.5">✓</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(205,211,219,0.4)] flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#9E7B78] hover:text-[#8C6558] uppercase tracking-wider transition-colors"
                  >
                    <span>View Architecture Blueprint</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href={`/book-a-strategy-call?industry=${ind.slug}`}
                    className="text-xs font-semibold text-[#738290] hover:text-[#2A2B2E] transition-colors"
                  >
                    Discuss System ↗
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Global Applicability Banner */}
        <FadeIn className="mt-16 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[rgba(158,123,120,0.10)] text-[#9E7B78] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            Custom Vertical Systems
          </span>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2A2B2E] mb-3">
            Operate in another industry?
          </h3>
          <p className="text-sm text-[#738290] max-w-2xl mx-auto leading-relaxed mb-6">
            NexAgent builds around your actual business workflows, proprietary software, and data structures. Whether you manage supply chains, logistics, retail, or legal workflows, our systems adapt to your constraints.
          </p>
          <Link
            href="/book-a-strategy-call"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-[#9E7B78] hover:bg-[#8C6558] shadow-sm transition-all"
          >
            Book a Strategy Call
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
