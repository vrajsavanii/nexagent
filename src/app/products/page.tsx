import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedProducts } from '@/content';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Products | Reusable AI Software & Intelligent Platforms | NexAgent',
  description:
    'Explore NexAgent’s product portfolio: neural runtimes, high-throughput event mesh fabrics, and reusable enterprise automation software.',
  alternates: {
    canonical: 'https://nexagent.group/products',
  },
  openGraph: {
    title: 'Products | Reusable AI Software & Intelligent Platforms | NexAgent',
    description:
      'From technology capabilities to scalable products. Transparent product portfolio with clearly defined development stages.',
    url: 'https://nexagent.group/products',
    siteName: 'NexAgent',
    type: 'website',
  },
};

export default function ProductsIndexPage() {
  const productsList = getPublishedProducts();

  // Additional emerging / in-development products to accurately represent the pipeline per guidelines
  const allProducts = [
    ...productsList,
    {
      id: 'prod-voice-mesh',
      slug: 'ambient-voice-runtime',
      name: 'NexVoice: Sub-180ms Conversational Audio Engine',
      category: 'Voice AI Engine',
      isCustomSystem: false,
      summary: 'Ultra-low latency streaming voice agent framework integrating WebRTC ingress, turn-taking models, and deterministic telephony gateways.',
      description: 'An acoustic processing engine engineered for real-time customer and guest interactions with natural conversational interruption handling and zero accent distortion.',
      capabilities: [
        'Sub-180ms End-to-End Latency over WebRTC / SIP',
        'Acoustic Background Gating & Voice Activity Detection (VAD)',
        'Multilingual Conversational Turn-Taking',
        'Direct CRM & Reservation System Action Dispatch',
      ],
      useCases: [
        'Automated hotel and hospitality reservation lines',
        'Inbound B2B lead qualification and meeting scheduling',
        'After-hours patient service routing',
      ],
      targetOrganizations: [
        'Hospitality operators, luxury resorts, and high-volume customer care centers',
      ],
      relatedTechnology: ['voice-ai', 'conversational-ai'],
      relatedSolutions: ['voice-ai', 'customer-communication'],
      readiness: 'IN_DEVELOPMENT',
      ctaText: 'Join Private Beta',
    },
    {
      id: 'prod-doc-engine',
      slug: 'intelligent-document-fabric',
      name: 'NexDoc: Deterministic Record & Dossier Parser',
      category: 'Document Intelligence',
      isCustomSystem: false,
      summary: 'Multi-modal document adjudication system that transforms unstructured PDFs, clinical notes, and legal contracts into structured, validated JSON data.',
      description: 'Engineered for high-volume enterprise compliance environments where data extraction errors cannot be tolerated.',
      capabilities: [
        'Complex Multi-Page PDF & Scanned Table Extraction',
        'Mathematical Schema & Cross-Field Invariant Validation',
        'Direct Integration into PostgreSQL / ERP data stores',
        'Confidence-Scored Human-in-the-Loop Review Routing',
      ],
      useCases: [
        'Prior authorization and clinical chart extraction',
        'Financial audit report and invoice reconciliation',
        'B2B vendor compliance and security questionnaire parsing',
      ],
      targetOrganizations: [
        'Healthcare networks, accounting firms, and legal operations teams',
      ],
      relatedTechnology: ['data-analytics', 'ai-intelligence'],
      relatedSolutions: ['documentation-automation', 'business-automation'],
      readiness: 'CONCEPT',
      ctaText: 'Explore System Blueprint',
    },
  ];

  const getStatusBadge = (readiness: string) => {
    switch (readiness) {
      case 'ACTIVE':
        return { label: 'Available / Active Deployment', bg: 'bg-[#DCFCE7]', text: 'text-[#15803D]' };
      case 'IN_DEVELOPMENT':
        return { label: 'In Development / Private Beta', bg: 'bg-[#FEF3C7]', text: 'text-[#B45309]' };
      case 'CONCEPT':
        return { label: 'Concept / Strategic Direction', bg: 'bg-[#F1F5F9]', text: 'text-[#475569]' };
      default:
        return { label: 'Under Development', bg: 'bg-[#F1F5F9]', text: 'text-[#475569]' };
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'Products' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9E7B78]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              PRODUCT ECOSYSTEM
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] max-w-4xl leading-[1.08]">
            FROM CAPABILITIES TO <span className="font-light italic text-[#9E7B78]">SCALABLE PRODUCTS.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-3xl leading-relaxed">
            In addition to custom client technology systems, NexAgent engineers reusable software runtimes, middleware, and autonomous platforms. We maintain strict transparency regarding the lifecycle status of every product in our portfolio.
          </p>
        </FadeIn>
      </section>

      {/* Product Lifecycle Transparency Notice */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-4">
        <div className="p-4 rounded-2xl bg-white/70 border border-[rgba(205,211,219,0.5)] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">ℹ️</span>
            <span className="text-[#5E6572] font-medium">
              Product Status Taxonomy:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold">Available</span>
            <span className="px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-bold">In Development / Beta</span>
            <span className="px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#475569] font-bold">Concept / Planned</span>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <StaggerContainer className="space-y-10">
          {allProducts.map((prod) => {
            const badge = getStatusBadge(prod.readiness || 'CONCEPT');
            return (
              <StaggerItem key={prod.id}>
                <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-[0_12px_32px_-6px_rgba(42,43,46,0.06)] hover:border-[#9E7B78]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Col: Info */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#738290]">
                        {prod.category}
                      </span>
                    </div>

                    <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2A2B2E]">
                      {prod.name}
                    </h2>

                    <p className="text-sm sm:text-base text-[#5E6572] leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Capabilities */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">
                        Core Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prod.capabilities?.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#5E6572]">
                            <span className="text-[#9E7B78] font-bold mt-0.5">✦</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Customers */}
                    <div className="pt-2">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2A2B2E] mb-1">
                        Engineered For:
                      </h4>
                      <p className="text-xs text-[#738290]">
                        {prod.targetOrganizations?.join(' • ')}
                      </p>
                    </div>
                  </div>

                  {/* Right Col: Actions & Meta */}
                  <div className="lg:col-span-4 bg-[#FBF5F3] p-6 sm:p-8 rounded-2xl border border-[rgba(205,211,219,0.5)] space-y-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#738290] block mb-2">
                        Engagement Option
                      </span>
                      <h4 className="text-base font-bold text-[#2A2B2E]">
                        {prod.readiness === 'ACTIVE'
                          ? 'Production Deployment'
                          : prod.readiness === 'IN_DEVELOPMENT'
                          ? 'Early-Access Pilot'
                          : 'Design Partner Exploration'}
                      </h4>
                      <p className="text-xs text-[#738290] mt-2 leading-relaxed">
                        {prod.readiness === 'ACTIVE'
                          ? 'Available for dedicated on-premise or sovereign cloud enterprise rollouts.'
                          : 'Collaborate with our systems engineering team to shape runtime capabilities for your workflow.'}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-[rgba(205,211,219,0.4)]">
                      <Link
                        href={`/book-a-strategy-call?product=${prod.slug}`}
                        className="w-full inline-flex items-center justify-center py-3 rounded-full text-xs font-bold text-white bg-[#9E7B78] hover:bg-[#8C6558] shadow-sm transition-all text-center"
                      >
                        {prod.ctaText || 'Discuss Architecture'}
                      </Link>
                      <Link
                        href="/technology"
                        className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-semibold text-[#2A2B2E] bg-white hover:bg-neutral-50 border border-[rgba(205,211,219,0.7)] transition-all text-center"
                      >
                        View Underlying Tech
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
    </div>
  );
}
