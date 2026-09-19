import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { Button } from "@/components/ui/Button";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Cpu } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SOLUTIONS_DATA.map((sol) => ({
    slug: sol.slug
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === params.slug);
  if (!solution) return {};

  return {
    title: `${solution.title} | NexAgent`,
    description: solution.shortDescription,
    alternates: {
      canonical: `https://nexagent.ai/solutions/${solution.slug}`
    }
  };
}

export default function SolutionDetailPage({ params }: Props) {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  const serviceSchema = getServiceSchema({
    title: solution.title,
    description: solution.shortDescription,
    slug: solution.slug
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://nexagent.ai" },
    { name: "Solutions", url: "https://nexagent.ai/solutions" },
    { name: solution.title, url: `https://nexagent.ai/solutions/${solution.slug}` }
  ]);

  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumbs */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Solutions
          </Link>

          <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-2.5 py-0.5 rounded-sm bg-brand-50 border border-brand-200">
            SPECIFICATION // {solution.slug}
          </span>
        </div>

        {/* Hero Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium mb-10">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight leading-[1.15]">
            {solution.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
            {solution.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-6 border-t border-slate-100">
            <Button
              href={`/strategy-call?solution=${solution.slug}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Strategy Call for this Solution
            </Button>
            <Button
              href="/technology"
              variant="outline"
              size="md"
            >
              Explore Technology Stack
            </Button>
          </div>
        </div>

        {/* Problem vs Approach Detailed Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-2xl bg-white border border-rose-100 shadow-2xs">
            <span className="font-mono text-xs uppercase tracking-wider text-rose-700 font-bold block mb-2">
              The Operational Problem
            </span>
            <p className="font-sans text-sm text-slate-700 leading-relaxed">
              {solution.problem}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-brand-100 shadow-2xs">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold block mb-2">
              The Engineering Approach
            </span>
            <p className="font-sans text-sm text-slate-700 leading-relaxed">
              {solution.approach}
            </p>
          </div>
        </div>

        {/* Pipeline Architecture */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs mb-10">
          <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
            Execution Pipeline Architecture
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-500 mb-6">
            Detailed breakdown of stage transitions, validations, and system dispatches.
          </p>

          <div className="flex flex-col gap-3">
            {solution.architectureSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface-ground border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-brand-700 w-24 shrink-0">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="font-display font-bold text-sm text-slate-900">
                    {step.stage}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-600 sm:text-right max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Applications & Engineering Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <h3 className="font-display font-bold text-base text-slate-900 mb-4">
              Typical Business Applications
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solution.typicalApplications.map((app, idx) => (
                <li key={idx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <h3 className="font-display font-bold text-base text-slate-900 mb-4">
              Engineering Guarantees
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solution.engineeringHighlights.map((hl, idx) => (
                <li key={idx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Booking Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-900 text-white text-center flex flex-col items-center">
          <h3 className="font-display font-bold text-2xl mb-2">
            Deploy {solution.title} in Your Organization
          </h3>
          <p className="font-sans text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
            Schedule an intake call with our technical team to diagnose your current setup and architect an implementation roadmap.
          </p>
          <Button
            href={`/strategy-call?solution=${solution.slug}`}
            variant="primary"
            size="lg"
            className="bg-white hover:bg-slate-100 text-brand-950 border-none shadow-md"
            icon={<ArrowRight className="w-4 h-4 text-brand-900" />}
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
}
