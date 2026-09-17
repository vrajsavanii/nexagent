'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { trackEvent } from '@/lib/analytics';

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [partnerFormOpen, setPartnerFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    orgName: '',
    category: 'Technology Alliance (ISV / SaaS Integration)',
    contactName: '',
    email: '',
    scope: '',
  });

  const partners = [
    {
      id: 'nvidia',
      name: 'NVIDIA DGX & Inception',
      category: 'compute',
      tier: 'Strategic Infrastructure Alliance',
      role: 'Hardware Acceleration & TensorRT-LLM',
      desc: 'Co-engineering bare-metal H100 and B200 GPU clusters with customized TensorRT-LLM kernels, achieving sub-120ms time-to-first-token across all sovereign NexCloud regions.',
      integrationBadge: 'Certified Hardware Enclave',
    },
    {
      id: 'snowflake',
      name: 'Snowflake Data Cloud',
      category: 'data',
      tier: 'Premier Data Mesh Partner',
      role: 'Zero-ETL Enterprise Feature Store',
      desc: 'Direct bidirectional data sharing allowing NexCore agents to query petabyte-scale structured enterprise data lakes without intermediate data egress or compliance vulnerability.',
      integrationBadge: 'Native Data App',
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      category: 'cloud',
      tier: 'Advanced Technology Partner',
      role: 'Dedicated Outposts & GovCloud',
      desc: 'Sovereign private interconnects bridging AWS GovCloud and regional European datacenters with hardware-enforced cryptographic air-gapping.',
      integrationBadge: 'AWS Marketplace Certified',
    },
    {
      id: 'salesforce',
      name: 'Salesforce & MuleSoft',
      category: 'enterprise',
      tier: 'Enterprise System of Record',
      role: 'Autonomous Action Dispatch',
      desc: 'Bi-directional state synchronization enabling NexAgent autonomous revenue engines to update pipeline stages, reconcile CRM records, and trigger automated meeting briefs.',
      integrationBadge: 'AppExchange Integrated',
    },
    {
      id: 'sap',
      name: 'SAP NetWeaver & S/4HANA',
      category: 'enterprise',
      tier: 'ERP Connector Alliance',
      role: 'Deterministic Supply Chain Execution',
      desc: 'ACID-compliant transaction gateway allowing automated supply chain replenishment and purchase order validation with 100% auditable accounting trails.',
      integrationBadge: 'Certified ERP Connector',
    },
    {
      id: 'livekit',
      name: 'LiveKit & WebRTC Global',
      category: 'voice',
      tier: 'Real-Time Media Alliance',
      role: 'Sub-180ms Conversational Audio',
      desc: 'Distributed edge WebRTC audio mesh powering NexVoice conversational agents with sub-second interruption handling and human-cadence turn-taking.',
      integrationBadge: 'Ultra-Low Latency Voice',
    },
    {
      id: 'hashicorp',
      name: 'HashiCorp Vault & Boundary',
      category: 'security',
      tier: 'Zero-Trust Security Partner',
      role: 'Ephemeral Secret Management',
      desc: 'Automated cryptographic credential rotation and privilege delegation for autonomous agents executing multi-system enterprise workflows.',
      integrationBadge: 'Zero-Trust Certified',
    },
    {
      id: 'epic',
      name: 'Epic Systems FHIR Mesh',
      category: 'enterprise',
      tier: 'Healthcare Integration Partner',
      role: 'EHR Ambient Clinical Sync',
      desc: 'FHIR-compliant bidirectional electronic health record integration ensuring automated clinical notes and lab orders populate clinical charts securely.',
      integrationBadge: 'HIPAA Verified FHIR API',
    },
  ];

  const developerTools = [
    {
      title: 'NexAgent Python SDK',
      version: 'v4.2.0',
      cmd: 'pip install nexagent-runtime',
      desc: 'High-performance Python client with built-in multi-agent consensus, state rollback, and streaming token telemetry.',
    },
    {
      title: 'TypeScript / React Client',
      version: 'v2.8.4',
      cmd: 'npm install @nexagent/core-react',
      desc: 'Reactive UI hooks for streaming audio, real-time agent state visualization, and declarative component state synchronization.',
    },
    {
      title: 'Enterprise Event Mesh (gRPC)',
      version: 'Protobuf v3',
      cmd: 'git clone github.com/nexagent/event-mesh-proto',
      desc: 'High-throughput event protocol definitions with strict typing and schema validation for mission-critical enterprise microservices.',
    },
  ];

  const filteredPartners =
    activeCategory === 'all'
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              Ecosystem & Technology Alliances
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.05] max-w-4xl">
            THE CONNECTED GLOBAL NETWORK OF{' '}
            <span className="italic font-light text-[#3D9D99]">ENTERPRISE INTELLIGENCE.</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            NexAgent does not operate in isolation. Our group subsidiaries interconnect seamlessly with the world’s leading hardware architectures, enterprise systems of record, cloud environments, and developer ecosystems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => setPartnerFormOpen(true)}
              className="px-6 py-3 bg-[#17191A] hover:bg-[#3D9D99] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer shadow"
            >
              Apply For Technology Partnership →
            </button>
            <Link
              href="/technology"
              className="px-6 py-3 bg-white hover:bg-black/05 border border-[#17191A]/15 text-[#17191A] font-mono text-xs uppercase tracking-wider font-medium rounded transition-all"
            >
              Inspect Core Architecture
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Section 01: Certified Alliances & Partner Directory */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold block mb-2">
              CERTIFIED ALLIANCES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium">
              Enterprise Integration Ecosystem
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Alliances' },
              { id: 'compute', label: 'Compute / GPU' },
              { id: 'data', label: 'Data Mesh' },
              { id: 'enterprise', label: 'ERP & CRM' },
              { id: 'voice', label: 'Real-Time Voice' },
              { id: 'security', label: 'Security' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#17191A] text-white font-medium'
                    : 'bg-white border border-[#17191A]/15 text-[#57595B] hover:text-[#17191A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPartners.map((p, idx) => (
            <FadeIn key={p.id} direction="up" delay={idx * 0.08}>
              <div className="p-8 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase text-[#3D9D99] font-bold tracking-wider">
                      {p.tier}
                    </span>
                    <span className="px-2 py-0.5 bg-[#F0EFEA] border border-[#17191A]/10 text-[#57595B] font-mono text-[9px] uppercase tracking-wider rounded">
                      {p.integrationBadge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#17191A] mb-1">
                    {p.name}
                  </h3>
                  <div className="font-mono text-xs text-[#57595B] mb-4">
                    {p.role}
                  </div>
                  <p className="font-sans text-sm text-[#57595B] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 02: Developer Platform & SDKs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              DEVELOPER HUB
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
            Open Standards & Developer Tooling
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {developerTools.map((tool, idx) => (
            <FadeIn key={tool.title} direction="up" delay={idx * 0.1}>
              <div className="p-6 bg-[#17191A] text-white rounded-sm border border-[#3D9D99]/30 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-medium text-base text-white">
                      {tool.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#3D9D99] bg-[#3D9D99]/10 px-2 py-0.5 rounded">
                      {tool.version}
                    </span>
                  </div>
                  <div className="p-3 bg-black/40 rounded font-mono text-xs text-[#3D9D99] select-all mb-4 border border-white/05">
                    $ {tool.cmd}
                  </div>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50">
                  <span>Documentation</span>
                  <span className="text-[#3D9D99] hover:underline cursor-pointer">API Reference →</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 03: Partner Application Modal */}
      {partnerFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white max-w-xl w-full p-8 rounded shadow-2xl border border-[#17191A]/20 relative">
            <button
              onClick={() => {
                setPartnerFormOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-4 right-4 text-xs font-mono uppercase text-[#57595B] hover:text-[#17191A]"
            >
              ✕ Close
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-[#3D9D99]/20 text-[#3D9D99] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-display text-xl uppercase font-semibold text-[#17191A]">
                  Application Submitted
                </h3>
                <p className="font-sans text-xs text-[#57595B] mt-2">
                  Our ecosystem alliances director will review your integration profile and reach out within 2 business days.
                </p>
              </div>
            ) : (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#3D9D99] font-bold block mb-1">
                  ALLIANCE REGISTRATION
                </span>
                <h3 className="font-display text-xl uppercase font-semibold text-[#17191A] mb-4">
                  Join The NexAgent Partner Network
                </h3>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    try {
                      trackEvent('ecosystem_partner_apply', {
                        category: partnerFormData.category,
                      });

                      await fetch('/api/strategy-call', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: partnerFormData.contactName,
                          email: partnerFormData.email,
                          company: partnerFormData.orgName,
                          category: 'PARTNERSHIP',
                          solution: partnerFormData.category,
                          scale: 'Partner Network',
                          context: partnerFormData.scope,
                          preferredStep: 'PARTNERSHIP_DISCOVERY',
                        }),
                      });
                    } catch {
                      // Graceful fallback
                    } finally {
                      setSubmitting(false);
                      setFormSubmitted(true);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerFormData.orgName}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, orgName: e.target.value })}
                      placeholder="e.g. Acme Cloud Corp"
                      className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Partnership Category *
                    </label>
                    <select
                      value={partnerFormData.category}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, category: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A]"
                    >
                      <option>Technology Alliance (ISV / SaaS Integration)</option>
                      <option>Hardware & Compute Infrastructure</option>
                      <option>Global System Integrator (GSI / Advisory)</option>
                      <option>Regional Cloud Reseller</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerFormData.contactName}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, contactName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={partnerFormData.email}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
                        placeholder="partnerships@acme.com"
                        className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Proposed Integration Scope
                    </label>
                    <textarea
                      rows={3}
                      value={partnerFormData.scope}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, scope: e.target.value })}
                      placeholder="Briefly describe the technical synergy, target mutual customers, or integration architecture."
                      className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-[#17191A] hover:bg-[#3D9D99] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? 'Submitting Application...' : 'Submit Alliance Application →'}
                  </button>
                  <div className="text-center pt-2">
                    <Link
                      href="/book-a-strategy-call?interest=partnership"
                      className="text-[11px] font-mono text-[#3D9D99] hover:underline"
                    >
                      Prefer a direct advisory session? Book a Strategy Call →
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
