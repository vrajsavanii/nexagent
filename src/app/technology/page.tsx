'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import NexAgentCore3D from '@/components/NexAgentCore3D';
import { ContextualCTA } from '@/components/CtaSystem';
import { PageContainer, SectionContainer, SectionHeader, Button, Eyebrow } from '@/components/ui';

interface TechCategory {
  id: string;
  number: string;
  name: string;
  whatItIs: string;
  whatWeBuild: string[];
  applications: string[];
}

export default function TechnologyPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ai-intelligence');

  const categories: TechCategory[] = [
    {
      id: 'ai-intelligence',
      number: '01',
      name: 'AI & Intelligence',
      whatItIs:
        'Cognitive models, inference pipelines, and neural reasoning frameworks engineered for precision rather than speculative chatbot generation.',
      whatWeBuild: [
        'Domain-specific reasoning and extraction pipelines',
        'Model fine-tuning and retrieval-augmented generation (RAG)',
        'Deterministic validation guardrails preventing hallucinated actions',
        'Context-efficient embedding and semantic search indexes',
      ],
      applications: [
        'Complex document adjudication and entity extraction',
        'Autonomous customer decisioning and classification',
        'High-stakes enterprise knowledge synthesis',
      ],
    },
    {
      id: 'automation-agents',
      number: '02',
      name: 'Automation & Agents',
      whatItIs:
        'Autonomous and semi-autonomous multi-agent state machines that decompose high-level business goals into planned, executed, and verified operations.',
      whatWeBuild: [
        'Multi-agent consensus and peer-verification execution loops',
        'Stateful worker agents with persistent memory',
        'Autonomous error recovery and self-healing task queues',
        'Human-in-the-loop exception review gateways',
      ],
      applications: [
        'Multi-step back-office workflow orchestration',
        'Cross-system record synchronization and invoice clearing',
        'End-to-end inbound customer request triage',
      ],
    },
    {
      id: 'software-engineering',
      number: '03',
      name: 'Software Engineering',
      whatItIs:
        'Modern, resilient software systems built with high-velocity full-stack frameworks, typed APIs, and modular microservices architectures.',
      whatWeBuild: [
        'High-concurrency web and enterprise applications (Next.js, Node, Go, Python)',
        'Custom internal tools, portals, and operational control planes',
        'Modular REST and gRPC API microservices',
        'Secure multi-tenant software architectures',
      ],
      applications: [
        'B2B SaaS platforms and customer-facing web apps',
        'Custom enterprise operating systems and management portals',
        'Mission-critical business workflow engines',
      ],
    },
    {
      id: 'cloud-infrastructure',
      number: '04',
      name: 'Cloud & Infrastructure',
      whatItIs:
        'Scalable, secure cloud deployment architectures engineered for high availability, low latency, and zero data leakage across distributed environments.',
      whatWeBuild: [
        'Dedicated VPC and private cloud infrastructure deployment',
        'Kubernetes container orchestration and auto-scaling pods',
        'Edge compute inferencing and global CDN caching',
        'Infrastructure-as-Code (Terraform / Pulumi) blueprints',
      ],
      applications: [
        'High-throughput real-time AI workload hosting',
        'Sovereign enterprise data enclaves with strict residency',
        'Multi-region high-availability disaster recovery clusters',
      ],
    },
    {
      id: 'data-analytics',
      number: '05',
      name: 'Data & Analytics',
      whatItIs:
        'High-throughput data ingestion, vector indexing, and analytical pipelines converting fragmented records into structured, actionable business intelligence.',
      whatWeBuild: [
        'Hybrid PostgreSQL / pgvector and specialized vector databases',
        'Automated ETL / ELT data cleaning and normalization pipelines',
        'Real-time streaming event processing (Kafka / RabbitMQ)',
        'Strict schema validation and data governance frameworks',
      ],
      applications: [
        'Enterprise semantic knowledge bases and vector search',
        'High-velocity transaction ledger auditing',
        'Automated operational telemetry aggregation',
      ],
    },
    {
      id: 'voice-ai',
      number: '06',
      name: 'Voice AI',
      whatItIs:
        'Sub-200ms real-time conversational audio pipelines integrating WebRTC edge audio ingress, acoustic feature separation, and streaming synthesis.',
      whatWeBuild: [
        'Ultra-low latency streaming voice runtimes',
        'Acoustic background gating and voice activity detection (VAD)',
        'Telephony SIP trunking and Twilio / FreeSWITCH integrations',
        'Natural conversational turn-taking and interruption handling',
      ],
      applications: [
        '24/7 inbound phone reservation and scheduling lines',
        'Real-time call center voice triage and escalation',
        'Automated outbound appointment confirmations',
      ],
    },
    {
      id: 'conversational-ai',
      number: '07',
      name: 'Conversational AI',
      whatItIs:
        'Intelligent omnichannel chat assistants that solve customer inquiries directly rather than redirecting users to static FAQ links.',
      whatWeBuild: [
        'CRM-connected conversational chat interfaces',
        'Deterministic action dispatch (booking, refunds, ticketing)',
        'Multilingual intent classification and conversational routing',
        'Context-aware memory systems preserving dialogue state',
      ],
      applications: [
        'Omnichannel customer support (Web, WhatsApp, Slack, Email)',
        'Inbound sales lead qualification and meeting booking',
        'Internal employee IT and HR helpdesk automation',
      ],
    },
    {
      id: 'systems-integration',
      number: '08',
      name: 'Systems Integration',
      whatItIs:
        'The connective nervous system linking legacy software, modern SaaS tools, databases, and third-party APIs into synchronized operating environments.',
      whatWeBuild: [
        'Bi-directional synchronization connectors (Salesforce, HubSpot, SAP, Epic)',
        'Webhook ingestion brokers with replay buffers and idempotency',
        'Legacy database and mainframe bridging microservices',
        'Event-driven architectures with two-phase commit state integrity',
      ],
      applications: [
        'Eliminating manual copy-paste data entry across departments',
        'Unifying siloed legacy ERPs with modern AI agent tools',
        'Automated real-time inventory and customer state propagation',
      ],
    },
    {
      id: 'business-intelligence',
      number: '09',
      name: 'Business Intelligence',
      whatItIs:
        'Interactive dashboards, automated anomaly detection, and KPI reporting systems giving leadership live visibility into organizational health.',
      whatWeBuild: [
        'Real-time operational command dashboards',
        'Autonomous anomaly alerting and metric deviation monitors',
        'Automated executive weekly/monthly summary reports',
        'Predictive forecasting models based on historical operational data',
      ],
      applications: [
        'Executive operations and revenue tracking',
        'Supply chain bottleneck and inventory turnover monitoring',
        'Customer satisfaction and ticket resolution analytics',
      ],
    },
    {
      id: 'emerging-technology',
      number: '10',
      name: 'Emerging Technology',
      whatItIs:
        'Forward-looking applied research in sparse neural architectures, local edge computing, multimodal perception, and next-generation autonomous systems.',
      whatWeBuild: [
        'Sparse mixture-of-experts (MoE) routing research',
        'Local on-device inference for mobile and edge environments',
        'Multimodal vision-language workflow verification',
        'Cryptographically auditable state trails for autonomous systems',
      ],
      applications: [
        'Next-generation software products under active R&D',
        'Air-gapped and disconnected operational environments',
        'Future operating companies within the NexAgent Group ecosystem',
      ],
    },
  ];

  const sdkTokens = ['Python SDK', 'TypeScript / Node', 'REST API', 'gRPC Streaming', 'WebRTC Voice', 'PostgreSQL / pgvector'];

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-20">
      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
                TECHNOLOGY &amp; CAPABILITIES
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] leading-[1.08]">
              ONE TECHNOLOGY GROUP. <br />
              <span className="font-light italic text-[#3D9D99]">MULTIPLE CAPABILITIES.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#738290] max-w-2xl leading-relaxed">
              NexAgent couples modern AI models, automation runtimes, custom software engineering, and digital infrastructure into cohesive, practical systems. Explore the 10 technology layers we engineer with.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/book-a-strategy-call"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-[#3D9D99] hover:bg-[#2E827E] shadow-sm transition-all"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-[#2A2B2E] bg-white hover:bg-neutral-50 border border-[rgba(205,211,219,0.7)] transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5 h-[380px] w-full" delay={0.15}>
            <NexAgentCore3D
              allowFullscreen={true}
              showHud={true}
              isStatic={false}
              autoRotateSpeed={0.65}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── 10 Technology Categories Architecture ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99] block mb-2">
            FOUNDATIONAL LAYERS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            What NexAgent Builds With
          </h2>
          <p className="text-sm sm:text-base text-[#738290] max-w-2xl mt-2 leading-relaxed">
            Each technology domain represents verified engineering capabilities applied across custom client solutions, automation architectures, and internal product developments.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-10 shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)] hover:border-[#3D9D99]/40 transition-all flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-bold text-[#3D9D99] bg-[rgba(61,157,153,0.10)] px-3 py-1 rounded-full">
                      LAYER {cat.number}
                    </span>
                    <span className="text-xs font-mono text-[#738290] uppercase">
                      Engineering Domain
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl font-bold text-[#2A2B2E] mb-3">
                    {cat.name}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#738290] mb-1">
                        What It Is:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                        {cat.whatItIs}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#738290] mb-1.5">
                        What NexAgent Can Build:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#2A2B2E]">
                        {cat.whatWeBuild.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#3D9D99] font-bold mt-0.5">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#738290] mb-1.5">
                        Where It Can Be Applied:
                      </h4>
                      <ul className="space-y-1 text-xs text-[#5E6572]">
                        {cat.applications.map((app, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#15803D] font-bold mt-0.5">✓</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(205,211,219,0.3)] flex items-center justify-between">
                  <Link
                    href={`/solutions?tech=${cat.id}`}
                    className="text-xs font-bold text-[#3D9D99] hover:text-[#2E827E] uppercase tracking-wider transition-colors"
                  >
                    View Related Solutions →
                  </Link>
                  <Link
                    href="/book-a-strategy-call"
                    className="text-xs text-[#738290] hover:text-[#2A2B2E] transition-colors"
                  >
                    Discuss Architecture ↗
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Developer Interoperability & Tech Stack ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99]">
              STACK &amp; INTEGRATION MATRIX
            </span>
            <h2 className="font-sans text-3xl font-extrabold text-[#2A2B2E]">
              Connected to the World&apos;s Leading Developer Ecosystems.
            </h2>
            <p className="text-sm text-[#738290] leading-relaxed">
              We do not invent proprietary lock-in. Our software and automation architectures integrate seamlessly with modern open-source toolchains, frontier AI model providers, standard SQL/NoSQL databases, and enterprise cloud networks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {sdkTokens.map((token) => (
                <span
                  key={token}
                  className="px-3 py-1.5 bg-white rounded-full border border-[rgba(205,211,219,0.6)] font-mono text-xs text-[#2A2B2E] shadow-2xs font-semibold"
                >
                  {token}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#2A2B2E] text-white p-6 sm:p-8 rounded-3xl shadow-lg font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[#3D9D99] font-bold">nexagent-system-architecture.ts</span>
              <span className="text-[#738290]">Production Blueprint</span>
            </div>
            <pre className="text-[#CDD3DB] leading-relaxed overflow-x-auto text-[11px]">
{`import { NexAgent, Orchestrator, IntegrationGateway } from '@nexagent/core';

// Initialize intelligent business system
const system = new NexAgent.System({
  organization: 'Enterprise Partner',
  environment: 'production',
  guardrails: { determinism: 'STRICT', zeroHallucination: true }
});

// Configure multi-system automation pipeline
const pipeline = await system.orchestrator.deploy({
  name: 'OperationsSync',
  triggers: ['inbound_customer_request', 'crm_deal_won'],
  actions: [
    'enrich_account_data',
    'dispatch_agentic_workflow',
    'synchronize_erp_record'
  ],
  consensus: 'MULTI_AGENT_VERIFIED'
});

console.log('Intelligent system active:', pipeline.id);`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── Conversion Section ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
        <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99]">
              ARCHITECTURAL EVALUATION
            </span>
            <h3 className="text-2xl font-extrabold text-[#2A2B2E]">
              Have an operational friction point or software challenge?
            </h3>
            <p className="text-sm text-[#738290]">
              Explore how custom AI, intelligent automation, or modern software can simplify your operations.
            </p>
          </div>
          <Link
            href="/book-a-strategy-call"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-[#3D9D99] hover:bg-[#2E827E] shadow-sm transition-all whitespace-nowrap"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
