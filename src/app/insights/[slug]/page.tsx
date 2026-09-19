import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/data/insights";
import { Button } from "@/components/ui/Button";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | NexAgent Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://nexagent.ai/insights/${article.slug}`
    }
  };
}

export default function InsightArticlePage({ params }: Props) {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://nexagent.ai" },
    { name: "Insights", url: "https://nexagent.ai/insights" },
    { name: article.title, url: `https://nexagent.ai/insights/${article.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Organization",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexAgent",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexagent.ai/logo.jpeg"
      }
    }
  };

  return (
    <article className="w-full py-12 sm:py-20 bg-surface-ground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Insights
          </Link>
        </div>

        {/* Article Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-premium">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-0.5 rounded-sm bg-brand-50 border border-brand-200">
              {article.category}
            </span>
            <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
            <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published {article.publishedAt}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed pb-8 mb-8 border-b border-slate-100 font-medium">
            {article.excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-10 p-4 rounded-xl bg-surface-ground border border-slate-200/80">
            <div className="w-10 h-10 rounded-full bg-brand-900 text-white flex items-center justify-center font-display font-bold text-sm">
              NA
            </div>
            <div>
              <span className="font-display font-bold text-sm text-slate-900 block">
                {article.author.name}
              </span>
              <span className="font-mono text-xs text-slate-500">
                {article.author.role}
              </span>
            </div>
          </div>

          {/* Body Paragraphs */}
          <div className="flex flex-col gap-6 font-sans text-base text-slate-700 leading-relaxed mb-12">
            {article.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2 mb-10">
            <span className="font-mono text-xs text-slate-400 font-semibold mr-1">
              TAGS:
            </span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-2xl bg-brand-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-lg mb-1">
                Explore Autonomous Systems For Your Business
              </h2>
              <p className="font-sans text-xs text-slate-300">
                Discuss implementation architecture with our engineering founders.
              </p>
            </div>
            <Button
              href="/strategy-call"
              variant="primary"
              size="md"
              className="bg-white hover:bg-slate-100 text-brand-950 border-none shadow-md shrink-0"
              icon={<ArrowRight className="w-4 h-4 text-brand-900" />}
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
