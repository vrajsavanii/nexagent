import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getInsightBySlug,
  getPublishedInsights,
  getRelatedContent,
} from '@/content';
import {
  Breadcrumbs,
  TableOfContents,
  TechnicalCallout,
  AuthorBlock,
  SourceList,
  RelatedContent,
  ContentCta,
} from '@/components/content';
import { FadeIn } from '@/components/MotionWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const insights = getPublishedInsights();
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: 'Insights | NexAgent' };

  return {
    title: insight.seo.title,
    description: insight.seo.description,
    alternates: {
      canonical: insight.seo.canonicalUrl || `https://nexagent.group/insights/${insight.slug}`,
    },
    openGraph: {
      title: insight.seo.ogTitle || insight.seo.title,
      description: insight.seo.ogDescription || insight.seo.description,
      url: insight.seo.canonicalUrl || `https://nexagent.group/insights/${insight.slug}`,
      siteName: 'NexAgent',
      type: 'article',
      publishedTime: insight.publishedAt,
      authors: [insight.author.name],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight || insight.status !== 'PUBLISHED') {
    notFound();
  }

  const related = getRelatedContent({
    techSlugs: insight.relatedTechnology,
    solutionSlugs: insight.relatedSolutions,
    industrySlugs: insight.relatedIndustries,
    productSlugs: insight.relatedProducts,
  });

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt || insight.publishedAt,
    author: {
      '@type': 'Organization',
      name: insight.author.name,
      url: 'https://nexagent.group',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NexAgent',
      url: 'https://nexagent.group',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nexagent.group/insights/${insight.slug}`,
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[#17191A]/10">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: insight.title },
          ]}
          className="mb-8"
        />

        <FadeIn direction="up">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7B78] font-bold">
              {insight.category} // {insight.format}
            </span>
            <span className="text-[#17191A]/30">|</span>
            <span className="font-mono text-xs text-[#57595B]">
              {insight.readTimeMinutes} MINUTE READ
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.08] max-w-4xl">
            {insight.title}
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            {insight.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[#17191A]/10 font-mono text-xs text-[#57595B]">
            <div className="flex items-center gap-2">
              <span className="text-[#84888A] uppercase text-[10px]">Published by:</span>
              <span className="text-[#17191A] font-medium">{insight.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#84888A] uppercase text-[10px]">Date:</span>
              <span className="text-[#17191A]">
                {new Date(insight.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Main Article Container with Sticky TOC */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left / Main Essay Body */}
          <article className="lg:col-span-8 space-y-12">
            {insight.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium pt-4">
                  {sec.title}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-base text-[#57595B] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {sec.callout && (
                  <TechnicalCallout
                    type={sec.callout.type}
                    title={sec.callout.title}
                    text={sec.callout.text}
                  />
                )}
              </section>
            ))}

            {/* Sources & Citations */}
            <SourceList sources={insight.sources} />

            {/* Author Attribution */}
            <AuthorBlock author={insight.author} />

            {/* Contextual Conversion CTA */}
            <ContentCta
              title={`Discuss ${insight.title} With NexAgent`}
              description="Explore how this technical architecture applies to your enterprise infrastructure with our principal systems architects."
              primaryLabel="Discuss Topic With NexAgent"
              primaryHref={`/book-a-strategy-call?interest=insight_${insight.slug}`}
              context={`insight_${insight.slug}`}
            />
          </article>

          {/* Right Rail: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 space-y-8 hidden lg:block">
            <TableOfContents items={insight.tableOfContents} />

            <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#9E7B78] block mb-2">
                TOPICAL CLUSTER
              </span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#57595B] bg-[#F7F7F5] border border-[#17191A]/10 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Semantic Cross-Linking */}
        <RelatedContent
          related={related}
          title="Related Technologies, Solutions &amp; Products"
        />
      </div>
    </div>
  );
}
