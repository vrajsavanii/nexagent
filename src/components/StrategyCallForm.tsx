'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

interface BookingResult {
  bookingId: string;
  status: string;
  aiReadout: {
    qualificationScore: number;
    recommendedTier: string;
    deploymentEstimate: string;
  };
  message: string;
}

export default function StrategyCallForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scale: 'Enterprise',
    objective: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<BookingResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/strategy-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          scale: formData.scale,
          objective: formData.company
            ? `[Company: ${formData.company}] ${formData.objective}`
            : formData.objective,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit strategy consultation request.');
      }

      const data: BookingResult = await res.json();
      setResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error transmitting brief. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-28 bg-surface-container-low border-b border-outline-variant/30 relative" id="strategy">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <FadeIn direction="up">
          <div className="bg-surface-container-lowest border border-outline-variant/60 p-8 lg:p-16 shadow-xl relative overflow-hidden">
            {/* Header Telemetry Status Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-outline-variant/20 mb-8 font-mono text-xs text-on-surface-variant">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                CONFIDENTIAL STRATEGY BRIEFING
              </span>
              <span className="text-primary font-semibold">SOC-2 TYPE II ENCRYPTED</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Editorial Prompt */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                  <span className="font-label-code text-xs uppercase text-primary font-semibold">
                    DIRECT ARCHITECT ENGAGEMENT
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight leading-[1.05]">
                  WHAT SHOULD WE BUILD NEXT?
                </h2>

                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  “Tell us what you're trying to change, automate, build or scale.”
                </p>

                <p className="font-body-md text-body-md text-on-surface-variant/90 leading-relaxed">
                  Whether you are an ambitious solo founder seeking 10x leverage, a high-growth scaleup removing
                  operational friction, or a global enterprise deploying air-gapped autonomous agents, NexAgent
                  architects the solution directly around your problem.
                </p>

                <div className="pt-6 border-t border-outline-variant/30 space-y-3 font-mono text-xs text-on-surface-variant">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    <span>Direct Consultation with Senior Technology Architects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                    <span>Strict Mutual Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">speed</span>
                    <span>Rapid Architectural Scoping Delivered within 48 Hours</span>
                  </div>
                </div>

                {/* Secondary CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-label-code text-xs uppercase font-semibold hover:underline"
                  >
                    <span>Prefer an asynchronous inquiry? Talk to NexAgent</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Right Form Card */}
              <div className="lg:col-span-6">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-surface-container-low border-2 border-primary/60 space-y-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                        <span className="font-label-code text-sm uppercase font-bold text-on-surface">
                          STRATEGY BRIEFING CONFIRMED // #{result.bookingId}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 bg-primary text-on-primary font-mono text-[10px] uppercase font-bold">
                        DISPATCHED
                      </span>
                    </div>

                    <p className="font-body-md text-on-surface leading-relaxed">{result.message}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-outline-variant/20 font-mono text-xs">
                      <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                        <span className="text-outline uppercase block text-[10px]">READINESS SCORE</span>
                        <span className="font-label-code text-headline-sm text-primary font-bold">
                          {result.aiReadout.qualificationScore}/100
                        </span>
                      </div>
                      <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                        <span className="text-outline uppercase block text-[10px]">RECOMMENDED TIER</span>
                        <span className="font-label-code text-xs text-on-surface font-semibold mt-1 block">
                          {result.aiReadout.recommendedTier}
                        </span>
                      </div>
                      <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                        <span className="text-outline uppercase block text-[10px]">DISPATCH WINDOW</span>
                        <span className="font-label-code text-xs text-on-surface font-semibold mt-1 block">
                          {result.aiReadout.deploymentEstimate}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setResult(null)}
                      className="w-full py-3 bg-on-surface text-surface font-label-code text-xs uppercase font-semibold hover:bg-secondary transition-colors"
                    >
                      Submit Another Consultation Brief
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 bg-surface-container-low border border-outline-variant/50 space-y-5">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-outline uppercase font-semibold">
                        EXECUTIVE BRIEFING FORM
                      </span>
                      <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                        Book a Strategy Call
                      </h3>
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block font-mono text-xs text-on-surface uppercase mb-1 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Victoria Vance"
                        className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant/60 font-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-on-surface uppercase mb-1 font-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vance@enterprise.com"
                        className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant/60 font-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs text-on-surface uppercase mb-1 font-semibold">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant/60 font-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-on-surface uppercase mb-1 font-semibold">
                          Organization Scale
                        </label>
                        <select
                          value={formData.scale}
                          onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                          className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant/60 font-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="Solo Founder">1 Person / Solo Founder</option>
                          <option value="Small Business">Small Business</option>
                          <option value="MSME">MSME</option>
                          <option value="Startup">Startup (Seed / Series A)</option>
                          <option value="Scaleup">Scaleup (Series B+)</option>
                          <option value="Unicorn">Unicorn ($1B+ Valuation)</option>
                          <option value="Enterprise">Global Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-on-surface uppercase mb-1 font-semibold">
                        What are you trying to change, automate, build or scale? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.objective}
                        onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                        placeholder="Describe your current bottlenecks, target workflow automation, or custom software requirements..."
                        className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant/60 font-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-on-surface text-surface font-label-code text-xs uppercase tracking-widest font-semibold hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-3 group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Transmitting Brief...' : 'Book a Strategy Call'}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
