import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedCaseStudies } from '@/content';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Case Studies & Deployment Architectures | NexAgent',
  description:
    'Real-world technical architectures and engineering blueprints for enterprise AI systems, workflow automation, and distributed integration fabrics.',
  alternates: {
    canonical: 'https://nexagent.group/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Deployment Architectures | NexAgent',
    description:
      'Verified architecture blueprints and real-world implementation structures for enterprise automation.',
    url: 'https://nexagent.group/case-studies',
    siteName: 'NexAgent',
    type: 'website',
  },
};

export default function CaseStudiesIndexPage() {
  const caseStudyList = getPublishedCaseStudies();

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'Case Studies' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#EB572C]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              ENGINEERING PROOF &amp; ARCHITECTURES
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] max-w-4xl leading-[1.08]">
            ENGINEERED FOR <span className="font-light italic text-[#EB572C]">REAL-WORLD DEPLOYMENT.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-3xl leading-relaxed">
            We hold an uncompromising policy regarding factual integrity: we do not fabricate client logos, customer testimonials, or speculative ROI claims. Below is our formal deployment framework and technical architectural blueprints currently in production or pending customer release authorization.
          </p>
        </FadeIn>
      </section>

      {/* Zero Fabrication Trust Notice */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-4">
        <div className="p-6 rounded-3xl bg-white border border-[rgba(205,211,219,0.6)] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="text-xl">🛡️</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                Factual Integrity Standard
              </h4>
              <p className="text-xs text-[#738290] mt-0.5">
                Client identities remain protected under bilateral enterprise NDAs. Technical architectures are shared for educational and architectural evaluation.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-bold whitespace-nowrap self-start sm:self-auto">
            Deployment Data in Development
          </span>
        </div>
      </section>

      {/* Case Study Architectural Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <StaggerContainer className="space-y-10">
          {caseStudyList.map((cs) => (
            <StaggerItem key={cs.id}>
              <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-[0_12px_32px_-6px_rgba(42,43,46,0.06)] hover:border-[#EB572C]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#FDF0EB] text-[#EB572C] font-mono text-xs font-bold uppercase tracking-wider">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-[#738290]">
                      {cs.clientDescriptor}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F1F5F9] text-[#475569]">
                    Architecture Blueprint
                  </span>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2A2B2E] mb-6">
                  {cs.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 border-y border-[rgba(205,211,219,0.4)] mb-8">
                  {/* Business Problem */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                      01 — Operational Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Approach & Tech */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                      02 — Technical System
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                      {cs.system}
                    </p>
                  </div>

                  {/* Approach & Outcome */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                      03 — Measured Outcome
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                      {cs.outcome}
                    </p>
                  </div>
                </div>

                {/* Key Architectural Lessons */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                    Engineering Invariants & Lessons:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#5E6572]">
                    {cs.keyLessons?.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#EB572C] font-bold mt-0.5">✦</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(205,211,219,0.4)]">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#EB572C] hover:text-[#D44820] uppercase tracking-wider transition-colors"
                  >
                    <span>Full Case Study Architecture</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href={`/book-a-strategy-call?reference=${cs.slug}`}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-bold text-[#2A2B2E] bg-[#FBF5F3] hover:bg-[#F0EFEA] border border-[rgba(205,211,219,0.6)] transition-all"
                  >
                    Discuss Similar System
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Future Proof Callout */}
        <FadeIn className="mt-16 text-center max-w-3xl mx-auto p-10 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-xs">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EB572C] block mb-2">
            CLIENT BENCHMARKS IN DEVELOPMENT
          </span>
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#2A2B2E] mb-3">
            Want to see how this applies to your existing software stack?
          </h3>
          <p className="text-xs sm:text-sm text-[#738290] leading-relaxed mb-6">
            We evaluate your current bottlenecks, workflows, and database integrations to design a customized architectural proof-of-concept.
          </p>
          <Link
            href="/book-a-strategy-call"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-[#EB572C] hover:bg-[#D44820] shadow-sm transition-all"
          >
            Book an Architectural Discovery Call
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
