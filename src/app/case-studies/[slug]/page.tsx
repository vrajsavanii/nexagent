import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getCaseStudyBySlug,
  getPublishedCaseStudies,
  getRelatedContent,
} from '@/content';
import { ContentHero, RelatedContent, ContentCta } from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cases = getPublishedCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: 'Case Study | NexAgent' };

  return {
    title: cs.seo.title,
    description: cs.seo.description,
    alternates: {
      canonical: cs.seo.canonicalUrl || `https://nexagent.group/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: cs.seo.ogTitle || cs.seo.title,
      description: cs.seo.ogDescription || cs.seo.description,
      url: cs.seo.canonicalUrl || `https://nexagent.group/case-studies/${cs.slug}`,
      siteName: 'NexAgent',
      type: 'article',
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs || cs.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    solutionSlugs: cs.relatedSolutions,
    techSlugs: cs.relatedTechnology,
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Content Hero */}
      <ContentHero
        breadcrumbs={[
          { label: 'Case Studies', href: '/solutions' },
          { label: cs.title },
        ]}
        eyebrow={`ARCHITECTURAL CASE STUDY // ${cs.industry}`}
        title={cs.title}
        subtitle={cs.outcome}
        readiness={cs.readiness}
        metadataItems={[
          { label: 'Client Profile', value: cs.clientDescriptor },
          { label: 'Industry Domain', value: cs.industry },
          { label: 'Attestation', value: 'Verified Architecture' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-16">
        {/* Section 01: Client Context & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
                  ORGANIZATION PROFILE
                </span>
                <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                  Engagement Context
                </h2>
                <div className="p-4 bg-[#F7F7F5] border border-[#17191A]/10 rounded font-mono text-xs text-[#17191A] mb-4">
                  {cs.clientDescriptor}
                </div>
                <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                  Client identities and specific operational environments are held confidential under strict mutual non-disclosure agreements. System performance and technical architectural patterns are verified.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">
                THE CHALLENGE
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                Operational Friction
              </h2>
              <p className="font-sans text-sm text-[#57595B] leading-relaxed">
                {cs.challenge}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Section 02: The System & The Automation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
                THE SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                Engineered Infrastructure
              </h2>
              <p className="font-sans text-sm text-[#57595B] leading-relaxed">
                {cs.system}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
                THE AUTOMATION PIPELINE
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                Execution Workflow
              </h2>
              <p className="font-sans text-sm text-[#57595B] leading-relaxed">
                {cs.automation}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Section 03: Verified Technical Architecture Benchmarks */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-10 bg-[#17191A] text-white rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
              VERIFIED ARCHITECTURE ATTRIBUTES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight font-light mb-8">
              Technical Benchmarks &amp; Enclave Specs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              {cs.verifiedArchitecture.latency && (
                <div className="p-5 bg-white/05 border border-white/10 rounded-sm">
                  <span className="text-[#84888A] block uppercase text-[10px] mb-1">Latency SLA</span>
                  <span className="text-[#3D9D99] font-bold text-sm block">{cs.verifiedArchitecture.latency}</span>
                </div>
              )}
              {cs.verifiedArchitecture.throughput && (
                <div className="p-5 bg-white/05 border border-white/10 rounded-sm">
                  <span className="text-[#84888A] block uppercase text-[10px] mb-1">Throughput</span>
                  <span className="text-white font-bold text-sm block">{cs.verifiedArchitecture.throughput}</span>
                </div>
              )}
              {cs.verifiedArchitecture.deploymentEnclave && (
                <div className="p-5 bg-white/05 border border-white/10 rounded-sm">
                  <span className="text-[#84888A] block uppercase text-[10px] mb-1">Deployment Enclave</span>
                  <span className="text-white font-medium text-xs block">{cs.verifiedArchitecture.deploymentEnclave}</span>
                </div>
              )}
              {cs.verifiedArchitecture.compliance && (
                <div className="p-5 bg-white/05 border border-white/10 rounded-sm">
                  <span className="text-[#84888A] block uppercase text-[10px] mb-1">Compliance Framework</span>
                  <span className="text-[#3D9D99] font-medium text-xs block">{cs.verifiedArchitecture.compliance}</span>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Section 04: Key Lessons Learned */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
              ENGINEERING PERSPECTIVE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
              Key Architecture Lessons
            </h2>
            <ul className="space-y-3">
              {cs.keyLessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#17191A]">
                  <span className="font-mono text-xs font-bold text-[#3D9D99] mt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed font-medium">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Contextual CTA */}
        <ContentCta
          title="Build a Similar Architecture for Your Enterprise"
          description="Schedule a technical consultation to explore how this validated deployment pattern can be adapted to your operational systems and regulatory constraints."
          primaryLabel={cs.ctaText || 'Build a Similar System'}
          primaryHref={`/book-a-strategy-call?interest=case_study_${cs.slug}`}
          context={`case_study_${cs.slug}`}
        />

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Connected Solutions &amp; Technologies"
        />
      </div>
    </div>
  );
}
