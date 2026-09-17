import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getSolutionBySlug,
  getPublishedSolutions,
  getRelatedContent,
} from '@/content';
import {
  ContentHero,
  WorkflowDiagram,
  RelatedContent,
  ContentCta,
} from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sols = getPublishedSolutions();
  return sols.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return { title: 'Enterprise Solutions | NexAgent' };

  return {
    title: sol.seo.title,
    description: sol.seo.description,
    alternates: {
      canonical: sol.seo.canonicalUrl || `https://nexagent.group/solutions/${sol.slug}`,
    },
    openGraph: {
      title: sol.seo.ogTitle || sol.seo.title,
      description: sol.seo.ogDescription || sol.seo.description,
      url: sol.seo.canonicalUrl || `https://nexagent.group/solutions/${sol.slug}`,
      siteName: 'NexAgent',
      type: 'website',
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);

  if (!sol || sol.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    techSlugs: sol.relatedTechnology,
    industrySlugs: sol.industries,
    productSlugs: sol.relatedProducts,
    caseStudySlugs: sol.relatedCaseStudies,
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Content Hero */}
      <ContentHero
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: sol.name },
        ]}
        eyebrow={`ENTERPRISE SOLUTION BLUEPRINT // ${sol.category}`}
        title={sol.name}
        subtitle={sol.summary}
        readiness={sol.readiness}
        metadataItems={[
          { label: 'Category', value: sol.category },
          { label: 'Deployment Model', value: 'Sovereign Enterprise Integration' },
          { label: 'Implementation Tier', value: 'Tier 04–06' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-16">
        {/* Section 01: The Operational Problem & Traditional Failure Modes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FadeIn direction="up" className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
                  THE OPERATIONAL BOTTLENECK
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                  The Problem
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#57595B] leading-relaxed">
                  {sol.problem}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15} className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">
                LEGACY LIMITATIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                Why Traditional Approaches Break Down
              </h2>
              <ul className="space-y-3">
                {sol.traditionalBreakdown.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#57595B]">
                    <span className="font-mono text-xs text-red-500 font-bold mt-0.5">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Section 02: The NexAgent Approach */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-white border border-[#17191A]/10 rounded-sm">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
                THE NEXAGENT ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                Our Systemic Approach
              </h2>
              <p className="font-sans text-base text-[#57595B] leading-relaxed">
                {sol.approach}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Section 03: System Components */}
        <FadeIn direction="up">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
                SYSTEM DEPLOYMENT
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-8">
              Modular Component Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sol.systemComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#17191A]/10 rounded-sm flex flex-col justify-between hover:border-[#3D9D99] transition-all shadow-2xs"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#3D9D99] bg-[#3D9D99]/10 px-2 py-0.5 rounded inline-block mb-3">
                      {comp.badge} Layer
                    </span>
                    <h3 className="font-display text-base font-semibold text-[#17191A] mb-2">
                      {comp.name}
                    </h3>
                    <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section 04: Execution Workflow Diagram */}
        <WorkflowDiagram stages={sol.workflows} title="End-to-End Operational Pipeline" />

        {/* Section 05: Who It Is For */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-bold block mb-2">
              TARGET OPERATIONAL PROFILE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
              Who This Solution Is Built For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sol.whoItIsFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#17191A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99] mt-2 shrink-0" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contextual CTA */}
        <ContentCta
          title={`Deploy ${sol.name} in Your Organization`}
          description={`Speak with NexAgent systems architects to diagnose current workflow friction points and model an automated operational blueprint.`}
          primaryLabel="Discuss Your Operational Challenge"
          primaryHref={`/book-a-strategy-call?interest=${sol.slug}`}
          context={`sol_detail_${sol.slug}`}
        />

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Related Technologies, Industries &amp; Case Studies"
        />
      </div>
    </div>
  );
}
