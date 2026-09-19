import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getTechnologyBySlug,
  getPublishedTechnologies,
  getRelatedContent,
} from '@/content';
import { ContentHero, RelatedContent, ContentCta } from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const techs = getPublishedTechnologies();
  return techs.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return { title: 'Technology Architecture | NexAgent' };

  return {
    title: tech.seo.title,
    description: tech.seo.description,
    alternates: {
      canonical: tech.seo.canonicalUrl || `https://nexagent.group/technology/${tech.slug}`,
    },
    openGraph: {
      title: tech.seo.ogTitle || tech.seo.title,
      description: tech.seo.ogDescription || tech.seo.description,
      url: tech.seo.canonicalUrl || `https://nexagent.group/technology/${tech.slug}`,
      siteName: 'NexAgent',
      type: 'website',
    },
  };
}

export default async function TechnologyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);

  if (!tech || tech.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    solutionSlugs: tech.relatedSolutions,
    industrySlugs: tech.relatedIndustries,
    productSlugs: tech.relatedProducts,
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Content Hero */}
      <ContentHero
        breadcrumbs={[
          { label: 'Technology', href: '/technology' },
          { label: tech.name },
        ]}
        eyebrow={`TECHNOLOGY ARCHITECTURE // ${tech.category}`}
        title={tech.name}
        subtitle={tech.description}
        readiness={tech.readiness}
        metadataItems={[
          { label: 'Category', value: tech.category },
          { label: 'Architecture Status', value: tech.readiness.replace(/_/g, ' ') },
          { label: 'Governance', value: 'Sovereign Enclave' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Body */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 01: Why It Matters (GEO Answer-First) */}
            <FadeIn direction="up">
              <div className="bg-white p-8 sm:p-10 border border-[#17191A]/10 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                  ARCHITECTURAL SIGNIFICANCE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
                  Why This Technology Matters
                </h2>
                <p className="font-sans text-base text-[#57595B] leading-relaxed">
                  {tech.whyItMatters}
                </p>
              </div>
            </FadeIn>

            {/* Section 02: What It Enables */}
            <FadeIn direction="up">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                  SYSTEM CAPABILITIES
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                  What This Technology Enables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tech.whatItEnables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-[#17191A]/10 rounded-sm flex items-start gap-3 hover:border-[#9E7B78] transition-colors"
                    >
                      <span className="font-mono text-xs font-bold text-[#9E7B78] mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#17191A] leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Section 03: System Architecture Layers */}
            <FadeIn direction="up">
              <div className="bg-[#17191A] text-white p-8 sm:p-10 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                  SYSTEM STACK DEPLOYMENT
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight font-light mb-6">
                  Architecture Specifications
                </h2>
                <div className="space-y-4 font-mono text-xs">
                  {tech.systemArchitecture.map((layer, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-white/05 border border-white/10 rounded-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#9E7B78] font-bold">LAYER // 0{idx + 1}</span>
                        <span className="text-white font-sans text-sm">{layer}</span>
                      </div>
                      <span className="text-[#84888A] text-[10px] uppercase tracking-wider hidden sm:block">
                        Active Enclave
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Section 04: Business Applications */}
            <FadeIn direction="up">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                  OPERATIONAL IMPLEMENTATION
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                  Verified Business Applications
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.applications.map((app, idx) => (
                    <li
                      key={idx}
                      className="p-4 bg-white border border-[#17191A]/10 rounded-sm flex items-center gap-3 font-sans text-xs text-[#57595B]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B78] shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Contextual CTA */}
            <ContentCta
              title={`Discuss ${tech.name} With NexAgent Architects`}
              description={`Explore how ${tech.name} can be deployed within your organization's sovereign infrastructure under strict security and latency SLAs.`}
              primaryLabel="Schedule Technical Consultation"
              primaryHref={`/book-a-strategy-call?interest=${tech.slug}`}
              context={`tech_detail_${tech.slug}`}
            />
          </div>

          {/* Right Rail: Architectural Specs */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#9E7B78] block mb-3">
                CORE CAPABILITIES
              </span>
              <ul className="space-y-2.5">
                {tech.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-xs text-[#17191A]">
                    <span className="text-[#9E7B78] font-bold">✓</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#F7F7F5] border border-[#17191A]/10 rounded-sm">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#57595B] block mb-2">
                DATA SOVEREIGNTY SLA
              </span>
              <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                Deployed in hardware-enforced confidential enclaves. Zero public cloud egress, zero third-party model training on enterprise context.
              </p>
            </div>
          </div>
        </div>

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Integrated Solutions &amp; System Capabilities"
        />
      </div>
    </div>
  );
}
