import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getIndustryBySlug,
  getPublishedIndustries,
  getRelatedContent,
} from '@/content';
import { ContentHero, RelatedContent, ContentCta } from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const inds = getPublishedIndustries();
  return inds.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return { title: 'Industry Transformation | NexAgent' };

  return {
    title: ind.seo.title,
    description: ind.seo.description,
    alternates: {
      canonical: ind.seo.canonicalUrl || `https://nexagent.group/industries/${ind.slug}`,
    },
    openGraph: {
      title: ind.seo.ogTitle || ind.seo.title,
      description: ind.seo.ogDescription || ind.seo.description,
      url: ind.seo.canonicalUrl || `https://nexagent.group/industries/${ind.slug}`,
      siteName: 'NexAgent',
      type: 'website',
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);

  if (!ind || ind.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    solutionSlugs: ind.solutions,
    caseStudySlugs: ind.relatedCaseStudies,
    insightSlugs: ind.relatedInsights,
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Content Hero */}
      <ContentHero
        breadcrumbs={[
          { label: 'Industries', href: '/solutions#industries' },
          { label: ind.name },
        ]}
        eyebrow="SECTOR TRANSFORMATION BLUEPRINT"
        title={ind.name}
        subtitle={ind.overview}
        readiness={ind.readiness}
        metadataItems={[
          { label: 'Domain Mandate', value: ind.name },
          { label: 'Architecture Model', value: 'Sovereign Private Enclave' },
          { label: 'Interoperability', value: 'Legacy Systems & Cloud Fabric' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-16">
        {/* Section 01: Operational Challenges */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
              SECTOR FRICTION POINTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
              Common Operational Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ind.operationalChallenges.map((ch, idx) => (
                <div key={idx} className="p-5 bg-[#F7F7F5] border border-[#17191A]/10 rounded-sm">
                  <span className="font-mono text-xs text-[#9E7B78] font-bold block mb-1">
                    CHALLENGE // 0{idx + 1}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#17191A] leading-relaxed">
                    {ch}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section 02: Where AI and Automation Intervene */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                DETERMINISTIC INTERVENTION
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                Where Automation Intervenes
              </h2>
              <ul className="space-y-3">
                {ind.automationOpportunities.map((op, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#57595B]">
                    <span className="text-[#9E7B78] font-bold">✓</span>
                    <span className="leading-relaxed">{op}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
                COGNITIVE CAPABILITY
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                Where AI Models Excel
              </h2>
              <ul className="space-y-3">
                {ind.aiOpportunities.map((ai, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#57595B]">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span className="leading-relaxed">{ai}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Section 03: Example Workflows */}
        <FadeIn direction="up">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-semibold">
                SYSTEM DEPLOYMENT
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-8">
              Validated Operational Workflows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ind.exampleWorkflows.map((wf, idx) => (
                <div key={idx} className="p-8 bg-white border border-[#17191A]/10 rounded-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#9E7B78] block mb-2">
                      WORKFLOW PATTERN // 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-[#17191A] mb-4">
                      {wf.title}
                    </h3>
                    <div className="p-4 bg-[#F7F7F5] border border-[#17191A]/10 rounded font-mono text-xs text-[#17191A] mb-4 leading-relaxed">
                      {wf.flow}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#17191A]/10 font-sans text-xs text-[#57595B]">
                    <span className="font-semibold text-[#17191A]">Outcome: </span>
                    {wf.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contextual CTA */}
        <ContentCta
          title={`Diagnose Technology Opportunities in ${ind.name}`}
          description={`Review specialized architectures, compliance guardrails, and integration blueprints with NexAgent enterprise consultants.`}
          primaryLabel="Schedule Industry Diagnostic"
          primaryHref={`/book-a-strategy-call?interest=${ind.slug}`}
          context={`ind_detail_${ind.slug}`}
        />

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Relevant Solutions, Case Studies &amp; Research"
        />
      </div>
    </div>
  );
}
