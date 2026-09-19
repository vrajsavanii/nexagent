import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getProductBySlug,
  getPublishedProducts,
  getRelatedContent,
} from '@/content';
import { ContentHero, RelatedContent, ContentCta } from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const prods = getPublishedProducts();
  return prods.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prod = getProductBySlug(slug);
  if (!prod) return { title: 'Products & Systems | NexAgent' };

  return {
    title: prod.seo.title,
    description: prod.seo.description,
    alternates: {
      canonical: prod.seo.canonicalUrl || `https://nexagent.group/products/${prod.slug}`,
    },
    openGraph: {
      title: prod.seo.ogTitle || prod.seo.title,
      description: prod.seo.ogDescription || prod.seo.description,
      url: prod.seo.canonicalUrl || `https://nexagent.group/products/${prod.slug}`,
      siteName: 'NexAgent',
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prod = getProductBySlug(slug);

  if (!prod || prod.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    techSlugs: prod.relatedTechnology,
    solutionSlugs: prod.relatedSolutions,
  });

  const productBadge = prod.isCustomSystem
    ? 'NEXAGENT CUSTOM SYSTEM'
    : 'NEXAGENT PROPRIETARY PRODUCT';

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      {/* Content Hero */}
      <ContentHero
        breadcrumbs={[
          { label: 'Products', href: '/solutions' },
          { label: prod.name },
        ]}
        eyebrow={`${productBadge} // ${prod.category}`}
        title={prod.name}
        subtitle={prod.summary}
        readiness={prod.readiness}
        metadataItems={[
          { label: 'Classification', value: productBadge },
          { label: 'Category', value: prod.category },
          { label: 'Readiness Stage', value: prod.readiness.replace(/_/g, ' ') },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-16">
        {/* Section 01: Product Overview & Architecture */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-white border border-[#17191A]/10 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
              SYSTEM ARCHITECTURE &amp; SCOPE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-4">
              Product Specification
            </h2>
            <p className="font-sans text-base text-[#57595B] leading-relaxed max-w-3xl">
              {prod.description}
            </p>
          </div>
        </FadeIn>

        {/* Section 02: Capabilities & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
                BENCHMARKED CAPABILITIES
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {prod.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#17191A]">
                    <span className="text-[#9E7B78] font-bold">✓</span>
                    <span className="leading-relaxed font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="p-8 sm:p-10 bg-white border border-[#17191A]/10 rounded-sm h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold block mb-2">
                DEPLOYMENT TARGETS
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-[#17191A] font-medium mb-6">
                Enterprise Use Cases
              </h2>
              <ul className="space-y-3">
                {prod.useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#57595B]">
                    <span className="text-indigo-600 font-bold">0{idx + 1}</span>
                    <span className="leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Section 03: Target Organizations */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-10 bg-[#17191A] text-white rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold block mb-2">
              AUDIENCE PROFILE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight font-light mb-6">
              Engineered For Institutional Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prod.targetOrganizations.map((org, idx) => (
                <div key={idx} className="p-5 bg-white/05 border border-white/10 rounded-sm">
                  <span className="font-mono text-xs text-[#9E7B78] font-bold block mb-2">
                    PROFILE // 0{idx + 1}
                  </span>
                  <p className="font-sans text-xs text-[#84888A] leading-relaxed">
                    {org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contextual CTA */}
        <ContentCta
          title={`Request an Evaluation of ${prod.name}`}
          description={`Discover how ${prod.name} operates in dedicated benchmark environments and evaluate deployment suitability for your organization.`}
          primaryLabel={prod.ctaText || 'Request Product Discussion'}
          primaryHref={`/book-a-strategy-call?interest=${prod.slug}`}
          context={`prod_detail_${prod.slug}`}
        />

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Related Technology &amp; Solution Stacks"
        />
      </div>
    </div>
  );
}
