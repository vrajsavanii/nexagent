'use client';

import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import NexAgentCore3D from '@/components/NexAgentCore3D';
import { ContextualCTA } from '@/components/CtaSystem';
import { PageContainer, SectionContainer, SectionHeader, TechPillarCard, Button, Eyebrow } from '@/components/ui';

export default function TechnologyPage() {
  const pillars = [
    {
      id: 'agentic',
      code: 'PILLAR 01',
      title: 'Autonomous Agentic Runtime',
      description: 'Our distributed agent framework coordinates multi-agent consensus, long-term memory retrieval, and deterministic tool execution, allowing cognitive workflows to run autonomously without human bottlenecks.',
      specs: [
        'Multi-agent consensus verification before committing changes',
        'Persistent hybrid vector/graph memory retrieval',
        'Autonomous self-reflection and execution loop recovery',
      ],
    },
    {
      id: 'infrastructure',
      code: 'PILLAR 02',
      title: 'Sovereign Cloud & Compute Clusters',
      description: 'High-density bare-metal GPU clusters and sovereign edge nodes engineered for maximum throughput. Workloads execute inside dedicated private enclosures meeting strict global data residency mandates.',
      specs: [
        'Tier-IV private data center enclosures in 4 global regions',
        'NVMe direct memory access for sub-second model cold loads',
        'Air-gapped and hybrid on-premises deployment capabilities',
      ],
    },
    {
      id: 'mesh',
      code: 'PILLAR 03',
      title: 'High-Throughput Event Mesh',
      description: 'The connective nervous system linking legacy enterprise software to modern intelligence. Capable of dispatching billions of state events monthly with ACID transaction guarantees.',
      specs: [
        'Sub-15ms distributed event bus dispatch latency',
        'Idempotent state reconciliation preventing race conditions',
        'Bi-directional synchronization across SAP, Oracle, and Salesforce',
      ],
    },
    {
      id: 'security',
      code: 'PILLAR 04',
      title: 'Data Privacy & Cryptographic Trust',
      description: 'Enterprise security designed for institutions that cannot compromise on confidentiality. Client proprietary data and intellectual property never enter public training sets.',
      specs: [
        'Zero data leakage architecture with mathematically verifiable isolation',
        'SOC2 Type II, ISO-27001, HIPAA, and GDPR compliance baselines',
        'Cryptographic audit trails for all autonomous actions',
      ],
    },
  ];

  const sdkTokens = ['Python SDK', 'TypeScript / Node', 'REST API', 'gRPC Streaming'];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">

      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <SectionContainer border="bottom" size="sm">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="NEXAGENT / ENGINEERING ARCHITECTURE"
                heading="Engineered For Enterprise Sovereignty & Scale."
                accentWord="Enterprise Sovereignty & Scale."
                headingAs="h1"
                headingSize="xl"
                description="NexAgent couples state-of-the-art cognitive AI models with industrial-grade systems engineering. Explore the technical architecture powering our global technology ecosystem."
              />
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  icon="arrow_forward"
                >
                  Schedule Architecture Review
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/companies"
                >
                  View Operating Stacks
                </Button>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-5 h-[420px] w-full" delay={0.15}>
              <NexAgentCore3D allowFullscreen={true} showHud={true} />
            </FadeIn>
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ── Architectural Pillars ────────────────────────────────────────────── */}
      <SectionContainer border="bottom" size="md">
        <PageContainer>
          <FadeIn className="mb-12">
            <SectionHeader
              eyebrow="NEXAGENT / FOUNDATIONAL PRINCIPLES"
              heading="The Four Engineering Pillars."
              accentWord="Engineering Pillars."
              description="Built from first principles to ensure security, high concurrency, and zero downtime for mission-critical enterprise workloads."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.id}>
                <TechPillarCard
                  code={p.code}
                  title={p.title}
                  description={p.description}
                  specs={p.specs}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </SectionContainer>

      {/* ── Developer APIs & Integration Matrix ─────────────────────────────── */}
      <SectionContainer border="bottom" size="md">
        <PageContainer>
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionHeader
                eyebrow="NEXAGENT / ECOSYSTEM INTEROPERABILITY"
                heading="Developer-First SDKs & Direct API Rails."
                accentWord="Direct API Rails."
                description="Whether embedding cognitive agent capabilities into existing web portals or establishing secure event gateways with legacy on-premises ERPs, our developer platform offers native bindings for Python, TypeScript, Go, and gRPC."
              />
              <div className="flex flex-wrap gap-2">
                {sdkTokens.map((token) => (
                  <span
                    key={token}
                    className="px-3 py-1.5 bg-white rounded-sm border border-[rgba(23,25,26,0.10)] font-mono text-xs text-[#17191A]"
                  >
                    {token}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#17191A] text-white p-6 sm:p-8 rounded shadow-lg font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[#3D9D99]">nexagent-orchestrator.ts</span>
                <span className="text-[#84888A]">TypeScript SDK</span>
              </div>
              <pre className="text-[#B9BCBA] leading-relaxed overflow-x-auto text-[11px]">
{`import { NexAgent, AgentCluster } from '@nexagent/sdk';

// Initialize sovereign enterprise cluster
const client = new NexAgent({
  apiKey: process.env.NEXAGENT_KEY,
  region: 'us-sovereign-01',
  compliance: 'HIPAA_STRICT'
});

// Deploy autonomous workflow pipeline
const pipeline = await client.pipelines.deploy({
  name: 'ClinicalDocumentation',
  agents: ['ScribeAgent', 'EHRValidator', 'BillingDispatcher'],
  consensus: 'UNANIMOUS',
  maxLatencyMs: 350
});

console.log('Pipeline active:', pipeline.id);`}
              </pre>
            </div>
          </FadeIn>
        </PageContainer>
      </SectionContainer>

      {/* ── Conversion Callout ───────────────────────────────────────────────── */}
      <SectionContainer size="md">
        <PageContainer>
          <FadeIn>
            <div className="p-8 sm:p-12 bg-white rounded border border-[rgba(23,25,26,0.10)] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <Eyebrow>Architectural Diagnostic</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#17191A] tracking-tight">
                  Have a complex technology challenge?
                </h2>
                <p className="text-sm text-[#57595B] leading-relaxed">
                  Consult directly with our principal software architects regarding multi-agent coordination, air-gapped compute, or enterprise integration.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <ContextualCTA
                  label="Discuss a Technology Challenge"
                  href="/book-a-strategy-call"
                  location="technology_bottom"
                  variant="primary"
                />
                <ContextualCTA
                  label="Talk to NexAgent"
                  href="/contact"
                  location="technology_bottom"
                  variant="secondary"
                />
              </div>
            </div>
          </FadeIn>
        </PageContainer>
      </SectionContainer>
    </div>
  );
}
