'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackEvent, getAttributionData } from '@/lib/analytics';

export interface StrategyCallFunnelProps {
  initialSolution?: string;
  sourceLocation?: string;
  className?: string;
}

export default function StrategyCallFunnel({
  initialSolution,
  sourceLocation = 'strategy_page',
  className = '',
}: StrategyCallFunnelProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    bookingId: string;
    category?: string;
    workflow?: string;
    aiReadout?: {
      qualificationScore: number;
      recommendedTier: string;
      deploymentEstimate: string;
    };
  } | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    solution: initialSolution || 'AI Automation',
    customSolution: '',
    name: '',
    email: '',
    company: '',
    website: '',
    country: '',
    companySize: 'Enterprise',
    objective: '',
    preferredNextStep: 'Strategy Call',
  });

  // Track funnel start
  useEffect(() => {
    trackEvent('strategy_call_started', { ctaLocation: sourceLocation });
  }, [sourceLocation]);

  const solutionOptions = [
    { id: 'AI Automation', label: 'AI Automation', desc: 'End-to-end intelligent workflow & document automation' },
    { id: 'AI Agents', label: 'AI Agents', desc: 'Autonomous multi-agent swarms & conversational agents' },
    { id: 'Software / SaaS', label: 'Software / SaaS', desc: 'Custom enterprise software and cloud platforms' },
    { id: 'Business Process Automation', label: 'Business Process Automation', desc: 'Unified cross-system integration (CRM, ERP, Billing)' },
    { id: 'Sales & Marketing Automation', label: 'Sales & Marketing Automation', desc: 'Lead qualification pipelines & outbound intelligence' },
    { id: 'Cloud / Digital Infrastructure', label: 'Cloud / Digital Infrastructure', desc: 'Dedicated bare-metal GPU clusters & sovereign compute' },
    { id: 'Custom Technology', label: 'Custom Technology', desc: 'Bespoke engineering for unique enterprise requirements' },
    { id: 'Other', label: 'Other', desc: 'Strategic technology advisory or exploratory evaluation' },
  ];

  const companySizes = [
    'Solo / Individual',
    'Small Business',
    'MSME',
    'Startup',
    'Scaleup',
    'Enterprise',
    'Other',
  ];

  const nextStepOptions = [
    { id: 'Strategy Call', label: 'Strategy Call', desc: 'Executive consultation with a senior systems architect' },
    { id: 'Technical Discussion', label: 'Technical Discussion', desc: 'In-depth architecture & feasibility review' },
    { id: 'Product Discussion', label: 'Product Discussion', desc: 'Evaluation of Model-010 or proprietary software' },
    { id: 'Partnership / Venture Conversation', label: 'Partnership / Venture Conversation', desc: 'Strategic collaboration or capital incubation' },
    { id: 'General Inquiry', label: 'General Inquiry', desc: 'General questions regarding NexAgent capabilities' },
  ];

  const handleNextStep = (currentStep: number) => {
    setErrorMessage(null);

    if (currentStep === 1) {
      if (!formData.solution) {
        setErrorMessage('Please select what you are looking to build or improve.');
        return;
      }
      trackEvent('strategy_call_step_completed', { step: 1, solution: formData.solution });
      setStep(2);
    } else if (currentStep === 2) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        setErrorMessage('Please enter your full name (minimum 2 characters).');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMessage('Please provide a valid corporate work email address.');
        return;
      }
      if (!formData.company.trim()) {
        setErrorMessage('Please provide your organization name.');
        return;
      }
      trackEvent('strategy_call_step_completed', { step: 2, companySize: formData.companySize });
      setStep(3);
    } else if (currentStep === 3) {
      if (!formData.objective.trim() || formData.objective.trim().length < 5) {
        setErrorMessage('Please describe what you are looking to build, automate, or discuss.');
        return;
      }
      trackEvent('strategy_call_step_completed', { step: 3 });
      setStep(4);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const attribution = getAttributionData();

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      website: formData.website || undefined,
      country: formData.country || undefined,
      companySize: formData.companySize,
      solution: formData.solution === 'Other' && formData.customSolution ? formData.customSolution : formData.solution,
      objective: formData.objective,
      preferredNextStep: formData.preferredNextStep,
      ctaSource: sourceLocation,
      attribution,
    };

    try {
      const res = await fetch('/api/strategy-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to process request.');
      }

      setSubmissionResult(data);
      trackEvent('strategy_call_submitted', {
        selectedSolution: payload.solution,
        companySize: payload.companySize,
        inquiryType: payload.preferredNextStep,
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Error transmitting your brief. Your entered details have been preserved. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calendar configuration (if client configured an external calendar like Cal.com or Calendly)
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

  return (
    <div className={`w-full bg-white border border-[#17191A]/15 rounded shadow-sm overflow-hidden ${className}`}>
      {/* Telemetry Header Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#F7F7F5] border-b border-[#17191A]/10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
          <span className="font-semibold text-[#17191A] uppercase tracking-wider">
            EXECUTIVE QUALIFICATION BRIEF
          </span>
        </div>
        {!submissionResult && (
          <span className="text-[#57595B] uppercase text-[11px]">
            Step {step} of 4
          </span>
        )}
      </div>

      <div className="p-6 sm:p-10">
        {/* PROGRESS INDICATOR */}
        {!submissionResult && (
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto mb-2">
              {[
                { num: 1, label: 'Focus' },
                { num: 2, label: 'Organization' },
                { num: 3, label: 'Context' },
                { num: 4, label: 'Next Step' },
              ].map((item, idx) => (
                <div key={item.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all ${
                        step === item.num
                          ? 'bg-[#17191A] text-white shadow-sm'
                          : step > item.num
                          ? 'bg-[#3D9D99] text-white'
                          : 'bg-[#F0EFEA] text-[#57595B]'
                      }`}
                    >
                      {step > item.num ? '✓' : item.num}
                    </div>
                    <span className="font-mono text-[10px] text-[#57595B] mt-1 hidden sm:block">
                      {item.label}
                    </span>
                  </div>
                  {idx < 3 && (
                    <div
                      className={`w-10 sm:w-16 h-[1px] mx-1 transition-colors ${
                        step > item.num ? 'bg-[#3D9D99]' : 'bg-[#17191A]/15'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INLINE ERROR BANNER */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded text-red-700 text-xs font-mono flex items-start gap-2">
            <span className="font-bold">⚠</span>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* POST-SUBMISSION STATE (Section 16) */}
        {submissionResult ? (
          <div className="py-8 text-center space-y-6 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#3D9D99]/15 text-[#3D9D99] flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#3D9D99] font-bold block mb-1">
                TRANSMISSION VERIFIED // {submissionResult.bookingId}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase font-bold text-[#17191A] tracking-tight">
                REQUEST RECEIVED.
              </h2>
            </div>

            <p className="font-sans text-sm text-[#57595B] leading-relaxed">
              Your information has been received. The NexAgent team will review the details and determine the appropriate next step based on your requirements.
            </p>

            {submissionResult.aiReadout && (
              <div className="p-4 bg-[#F7F7F5] border border-[#17191A]/10 rounded text-left font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-[#17191A]/08 pb-1.5">
                  <span className="text-[#57595B]">Strategic Classification:</span>
                  <span className="font-semibold text-[#17191A]">{submissionResult.category || 'STRATEGY'}</span>
                </div>
                <div className="flex justify-between border-b border-[#17191A]/08 pb-1.5">
                  <span className="text-[#57595B]">Target Workflow:</span>
                  <span className="font-semibold text-[#17191A]">{submissionResult.workflow || 'Enterprise / Strategic'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#57595B]">Recommended Architecture:</span>
                  <span className="font-semibold text-[#3D9D99]">{submissionResult.aiReadout.recommendedTier}</span>
                </div>
              </div>
            )}

            {/* Optional Calendar Direct Booking if Configured */}
            {calendarUrl && (
              <div className="pt-2">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('calendar_opened')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3D9D99] hover:bg-[#348582] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all shadow-sm"
                >
                  <span>Select Live Discussion Slot</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                </a>
              </div>
            )}

            {/* Contextual Navigation (Section 16) */}
            <div className="pt-6 border-t border-[#17191A]/10">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#57595B] block mb-3">
                Continue Exploring NexAgent
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
                <Link
                  href="/technology"
                  className="px-3 py-1.5 bg-[#F0EFEA] hover:bg-white border border-[#17191A]/15 text-[#17191A] rounded transition-colors"
                >
                  Explore Technology
                </Link>
                <Link
                  href="/solutions"
                  className="px-3 py-1.5 bg-[#F0EFEA] hover:bg-white border border-[#17191A]/15 text-[#17191A] rounded transition-colors"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/solutions#cases"
                  className="px-3 py-1.5 bg-[#F0EFEA] hover:bg-white border border-[#17191A]/15 text-[#17191A] rounded transition-colors"
                >
                  Read Case Studies
                </Link>
                <Link
                  href="/"
                  className="px-3 py-1.5 bg-[#17191A] text-white hover:bg-black rounded transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* STEP 1: WHAT ARE YOU LOOKING TO BUILD OR IMPROVE? */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#3D9D99] uppercase font-semibold block mb-1">
                    Step 1 // Strategic Initiative
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase text-[#17191A] tracking-tight">
                    What are you looking to build or improve?
                  </h2>
                  <p className="font-sans text-xs text-[#57595B] mt-1">
                    Select the capability or focus area that best reflects your current organizational priorities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutionOptions.map((opt) => {
                    const isSelected = formData.solution === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, solution: opt.id })}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#3D9D99] bg-[#3D9D99]/06 ring-1 ring-[#3D9D99]'
                            : 'border-[#17191A]/15 hover:border-[#17191A]/40 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-semibold text-sm text-[#17191A]">
                            {opt.label}
                          </span>
                          {isSelected && <span className="text-[#3D9D99] text-xs font-bold font-mono">✓</span>}
                        </div>
                        <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {formData.solution === 'Other' && (
                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Please specify your focus area:
                    </label>
                    <input
                      type="text"
                      value={formData.customSolution}
                      onChange={(e) => setFormData({ ...formData, customSolution: e.target.value })}
                      placeholder="e.g. Sovereign private LLM deployment on-premise"
                      className="w-full px-3.5 py-2 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>
                )}

                <div className="flex justify-end pt-4 border-t border-[#17191A]/10">
                  <button
                    type="button"
                    onClick={() => handleNextStep(1)}
                    className="px-6 py-3 bg-[#17191A] hover:bg-[#2A2E32] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue: Organization Profile</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TELL US ABOUT YOUR ORGANIZATION */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#3D9D99] uppercase font-semibold block mb-1">
                    Step 2 // Stakeholder & Scale
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase text-[#17191A] tracking-tight">
                    Tell us about your organization.
                  </h2>
                  <p className="font-sans text-xs text-[#57595B] mt-1">
                    This ensures we allocate architects suited to your operational footprint.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@enterprise.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Vanguard Logistics"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Website (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://company.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Country / Region
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United States, United Kingdom, UAE"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                      Company Size *
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    >
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#17191A]/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 font-mono text-xs uppercase text-[#57595B] hover:text-[#17191A]"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNextStep(2)}
                    className="px-6 py-3 bg-[#17191A] hover:bg-[#2A2E32] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue: Discussion Context</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: WHAT WOULD YOU LIKE TO DISCUSS? */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#3D9D99] uppercase font-semibold block mb-1">
                    Step 3 // Technical Objectives
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase text-[#17191A] tracking-tight">
                    What would you like to discuss?
                  </h2>
                  <p className="font-sans text-xs text-[#57595B] mt-1">
                    Provide brief context on your current operational friction, target scale, or technical ambition.
                  </p>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#17191A] uppercase font-semibold mb-1">
                    Operational Context & Objectives *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    placeholder="e.g. We are looking to automate customer intake across 14 global branch offices, eliminate manual spreadsheet data entry, and integrate conversational AI triage into our legacy CRM."
                    className="w-full p-4 bg-[#F7F7F5] border border-[#17191A]/20 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99] leading-relaxed"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#57595B] mt-1">
                    <span>Protected under mutual confidentiality</span>
                    <span>{formData.objective.length}/1200 chars</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#17191A]/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 font-mono text-xs uppercase text-[#57595B] hover:text-[#17191A]"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNextStep(3)}
                    className="px-6 py-3 bg-[#17191A] hover:bg-[#2A2E32] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Continue: Next Step Selection</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: PREFERRED NEXT STEP */}
            {step === 4 && (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#3D9D99] uppercase font-semibold block mb-1">
                    Step 4 // Preferred Engagement
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase text-[#17191A] tracking-tight">
                    Preferred next step
                  </h2>
                  <p className="font-sans text-xs text-[#57595B] mt-1">
                    Indicate how you prefer our technology architects to engage with your team.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {nextStepOptions.map((opt) => {
                    const isSelected = formData.preferredNextStep === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, preferredNextStep: opt.id })}
                        className={`p-3.5 rounded border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#3D9D99] bg-[#3D9D99]/06 ring-1 ring-[#3D9D99]'
                            : 'border-[#17191A]/15 hover:border-[#17191A]/40 bg-white'
                        }`}
                      >
                        <div>
                          <span className="font-display font-semibold text-sm text-[#17191A] block">
                            {opt.label}
                          </span>
                          <span className="font-sans text-xs text-[#57595B]">
                            {opt.desc}
                          </span>
                        </div>
                        {isSelected && <span className="text-[#3D9D99] text-xs font-bold font-mono">✓</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-[#F7F7F5] border border-[#17191A]/10 rounded flex items-start gap-3">
                  <span className="text-[#3D9D99] font-bold text-sm">🔒</span>
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] font-semibold text-[#17191A] block">
                      Enterprise Non-Disclosure Guarantee
                    </span>
                    <p className="font-sans text-xs text-[#57595B]">
                      All architecture diagnostic requests and organizational details are protected under standard mutual NDA protocol.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#17191A]/10">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2 font-mono text-xs uppercase text-[#57595B] hover:text-[#17191A]"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-[#17191A] hover:bg-[#2A2E32] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer shadow-md disabled:opacity-50 flex items-center gap-2"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Strategy Request →'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
