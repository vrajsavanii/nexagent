'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/MotionWrapper';
import { trackEvent } from '@/lib/analytics';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
  FormField,
  Input,
  Textarea,
  Select,
  FormError,
  FormSuccess,
  Button,
} from '@/components/ui';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scale: 'Enterprise (500+ employees)',
    focus: 'Autonomous Operations & Agentic Systems',
    message: '',
  });

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      trackEvent('contact_form_submit', {
        focus: formData.focus,
        scale: formData.scale,
      });

      const res = await fetch('/api/strategy-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          category: 'GENERAL',
          solution: formData.focus,
          scale: formData.scale,
          context: formData.message,
          preferredStep: 'EXECUTIVE_BRIEF',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit advisory brief.');
      }

      setReferenceId(data.bookingId || `NEX-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">

      {/* ── Hero Header ─────────────────────────────────────────────────────── */}
      <SectionContainer border="bottom" size="sm">
        <PageContainer>
          <FadeIn>
            <SectionHeader
              eyebrow="NEXAGENT / EXECUTIVE ADVISORY"
              heading="What Should We Build Next?"
              accentWord="Build Next?"
              headingAs="h1"
              headingSize="xl"
              description="Tell us what you are trying to change, automate, engineer, or scale. Our senior partners and systems architects work directly with your leadership team."
            />
          </FadeIn>
        </PageContainer>
      </SectionContainer>

      {/* ── Main Split: Form + Channels ──────────────────────────────────────── */}
      <SectionContainer size="md">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Strategy Form */}
            <FadeIn className="lg:col-span-7 bg-white p-8 sm:p-10 rounded border border-[rgba(23,25,26,0.10)] shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="mb-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#9E7B78] font-semibold block mb-1">
                      Confidential Brief
                    </span>
                    <h2 className="text-xl font-semibold text-[#17191A] tracking-tight">
                      Book an Executive Strategy Session
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Full Name" required>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="e.g. Katherine Shaw"
                        autoComplete="name"
                      />
                    </FormField>
                    <FormField label="Work Email" required>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="katherine@enterprise.com"
                        autoComplete="email"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Organization Name" required>
                      <Input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="e.g. Vanguard Logistics Corp"
                        autoComplete="organization"
                      />
                    </FormField>
                    <FormField label="Operational Scale" required>
                      <Select
                        value={formData.scale}
                        onChange={(e) => update('scale', e.target.value)}
                      >
                        <option>Individual Founder / Studio</option>
                        <option>Small Business / MSME</option>
                        <option>Growth Startup (Series A–B)</option>
                        <option>Unicorn Scale ($1B+ Valuation)</option>
                        <option>Enterprise (500+ employees)</option>
                        <option>Global Conglomerate</option>
                      </Select>
                    </FormField>
                  </div>

                  <FormField label="Primary Transformation Focus" required>
                    <Select
                      value={formData.focus}
                      onChange={(e) => update('focus', e.target.value)}
                    >
                      <option>Autonomous Operations &amp; Agentic Systems</option>
                      <option>Private Sovereign Cloud &amp; Compute</option>
                      <option>Conversational Voice AI Systems</option>
                      <option>Enterprise Workflow Automation &amp; Integration</option>
                      <option>Strategic Partnership or M&amp;A</option>
                    </Select>
                  </FormField>

                  <FormField label="Project Context & Objectives">
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Describe your operational friction points, latency requirements, or scaling milestones..."
                    />
                  </FormField>

                  {errorMsg && <FormError message={errorMsg} />}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={submitting}
                    className="w-full justify-center"
                  >
                    {submitting ? 'Submitting Architecture Brief...' : 'Submit Architecture Brief'}
                  </Button>

                  <div className="flex flex-col items-center gap-2 pt-1">
                    <p className="text-[11px] font-mono text-[#84888A] text-center">
                      Protected under mutual NDA. We respond to verified corporate inquiries within 24 hours.
                    </p>
                    <Link
                      href="/book-a-strategy-call"
                      className="text-xs font-mono text-[#9E7B78] hover:underline flex items-center gap-1"
                    >
                      Looking for a structured 4-step evaluation? Book a Strategy Call →
                    </Link>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="py-4 space-y-5">
                  <FormSuccess
                    title="Brief Received"
                    message={`Thank you, ${formData.name}. An executive partner from our ${formData.scale} practice has been notified and will coordinate scheduling within 24 hours.`}
                  />
                  <div className="p-4 bg-[#F7F7F5] rounded-sm text-xs font-mono text-[#57595B] space-y-1">
                    <div>Reference: {referenceId}</div>
                    <div>Focus: {formData.focus}</div>
                    <div>Status: Queued for Senior Partner Review</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#9E7B78] hover:underline"
                  >
                    Submit another consultation brief
                  </button>
                </div>
              )}
            </FadeIn>

            {/* Right: Direct Inquiries & Global Offices */}
            <FadeIn className="lg:col-span-5 space-y-6" delay={0.1}>
              {/* Direct Channels */}
              <div className="p-7 bg-white rounded border border-[rgba(23,25,26,0.10)] shadow-sm space-y-5">
                <h3 className="text-base font-semibold text-[#17191A] tracking-tight">
                  Direct Group Inquiries
                </h3>
                <div className="space-y-4 text-xs">
                  {[
                    { dept: 'Enterprise Partnerships & Advisory', email: 'advisory@nexagent.com' },
                    { dept: 'Ventures & Strategic M&A',           email: 'ventures@nexagent.com' },
                    { dept: 'Media & Institutional Relations',    email: 'press@nexagent.com'    },
                  ].map(({ dept, email }) => (
                    <div key={email} className="pb-4 border-b border-[rgba(23,25,26,0.08)] last:border-b-0 last:pb-0">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#57595B] block mb-0.5">
                        {dept}
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-medium text-[#17191A] hover:text-[#9E7B78] transition-colors duration-150"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hubs */}
              <div className="p-7 bg-[#17191A] text-white rounded shadow-md space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E7B78] block">
                  Executive Offices
                </span>
                <h3 className="text-lg font-light text-white">Global Presence</h3>
                <div className="space-y-3 pt-1 text-xs">
                  {[
                    { city: 'San Francisco (Global HQ)',   sub: 'Financial District, Market St'   },
                    { city: 'London (European HQ)',        sub: 'Canary Wharf Financial Hub'       },
                    { city: 'Dubai (Middle East Hub)',     sub: 'DIFC Innovation Center'           },
                    { city: 'Bengaluru (Engineering Lab)', sub: 'Outer Ring Road Tech Park'        },
                  ].map(({ city, sub }) => (
                    <div key={city}>
                      <span className="font-semibold block text-white">{city}</span>
                      <span className="text-[#84888A] font-mono text-[11px]">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </PageContainer>
      </SectionContainer>
    </div>
  );
}
