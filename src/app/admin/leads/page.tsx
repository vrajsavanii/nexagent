'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Booking {
  bookingId: string;
  name: string;
  email: string;
  scale: string;
  objective: string;
  createdAt: string;
  qualificationScore: number;
  recommendedTier: string;
  deploymentEstimate: string;
  category?: string;
  workflow?: string;
  contact?: {
    name?: string;
    email?: string;
    company?: string;
    website?: string;
    country?: string;
    companySize?: string;
  };
  inquiry?: {
    solution?: string;
    preferredNextStep?: string;
    objective?: string;
  };
  attribution?: {
    landingPage?: string;
    conversionPage?: string;
    ctaSource?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  };
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="w-full bg-surface text-on-surface py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label-code text-label-code text-primary font-bold">
                INTERNAL // EXECUTIVE MONITOR
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary font-micro-annotation text-[10px] uppercase font-bold">
                CONFIDENTIAL
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-1">
              STRATEGY CALL INBOUND QUEUE
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 font-label-code text-body-sm text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              <span>Refresh Telemetry</span>
            </button>
            <Link
              href="/book-a-strategy-call"
              className="inline-flex items-center gap-2 px-5 py-2 bg-on-surface text-inverse-on-surface font-label-code text-body-sm uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>New Booking</span>
            </Link>
          </div>
        </div>

        {/* Lead Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-surface-container-lowest border border-outline-variant/40">
            <span className="font-micro-annotation text-micro-annotation text-outline uppercase block">
              TOTAL INBOUND DISPATCHES
            </span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1 block">
              {leads.length}
            </span>
          </div>

          <div className="p-4 bg-surface-container-lowest border border-outline-variant/40">
            <span className="font-micro-annotation text-micro-annotation text-outline uppercase block">
              AVG AI QUALIFICATION
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary mt-1 block">
              {leads.length > 0
                ? Math.round(leads.reduce((acc, l) => acc + l.qualificationScore, 0) / leads.length)
                : 0}
              /100
            </span>
          </div>

          <div className="p-4 bg-surface-container-lowest border border-outline-variant/40">
            <span className="font-micro-annotation text-micro-annotation text-outline uppercase block">
              ENTERPRISE RATIO
            </span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface mt-1 block">
              {leads.length > 0
                ? `${Math.round(
                    (leads.filter((l) => l.scale === 'Enterprise' || l.scale === 'Global').length / leads.length) * 100
                  )}%`
                : '100%'}
            </span>
          </div>

          <div className="p-4 bg-surface-container-lowest border border-outline-variant/40">
            <span className="font-micro-annotation text-micro-annotation text-outline uppercase block">
              SYSTEM POSTURE
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary mt-1 block">NOMINAL</span>
          </div>
        </div>

        {/* Lead Table / List */}
        <div className="bg-surface-container-lowest border border-outline-variant/50 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between font-micro-annotation text-micro-annotation text-on-surface-variant uppercase">
            <span>REGISTERED ENTERPRISE REQUESTS</span>
            <span>AUTONOMOUS STREAM // ACTIVE</span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-on-surface-variant font-label-code">
              FETCHING TELEMETRY RECORDS...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <span className="material-symbols-outlined text-[36px] text-outline">inbox</span>
              <p className="font-body-md text-on-surface-variant">No strategy call requests registered yet.</p>
              <Link
                href="/book-a-strategy-call"
                className="inline-block font-label-code text-primary underline text-body-sm"
              >
                Submit a test strategy briefing &rarr;
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-outline-variant/20">
              {leads.map((lead) => (
                <div key={lead.bookingId} className="p-6 space-y-3 hover:bg-surface-container-low transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-on-surface text-surface font-label-code text-micro-annotation font-bold">
                        {lead.bookingId}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        {lead.name}
                      </h3>
                      <span className="text-body-sm text-on-surface-variant font-label-code">&lt;{lead.email}&gt;</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-micro-annotation text-micro-annotation">
                      {lead.category && (
                        <span className="px-2 py-0.5 bg-[#9E7B78]/15 text-[#9E7B78] font-bold uppercase">
                          {lead.category}
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-semibold uppercase">
                        {lead.contact?.companySize || lead.scale}
                      </span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary font-bold">
                        AI SCORE: {lead.qualificationScore}/100
                      </span>
                      <span className="text-outline">
                        {new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface bg-surface-container-low/60 p-3 border border-outline-variant/20">
                    &ldquo;{lead.objective}&rdquo;
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-micro-annotation text-outline pt-1">
                    {lead.workflow && (
                      <span>
                        ROUTED WORKFLOW: <strong className="text-on-surface">{lead.workflow}</strong>
                      </span>
                    )}
                    {lead.workflow && <span>/</span>}
                    <span>
                      RECOMMENDED TIER: <strong className="text-on-surface">{lead.recommendedTier}</strong>
                    </span>
                    <span>/</span>
                    <span>
                      DISPATCH: <strong className="text-primary">{lead.deploymentEstimate}</strong>
                    </span>
                    {lead.attribution?.utmSource && (
                      <>
                        <span>/</span>
                        <span>
                          UTM SOURCE: <strong className="text-[#9E7B78]">{lead.attribution.utmSource}</strong>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
