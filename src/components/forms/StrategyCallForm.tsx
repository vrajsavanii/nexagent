"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  country: string;
  industry: string;
  businessSize: string;
  primaryChallenge: string;
  whatToBuild: string;
  currentTech: string;
  timeline: string;
  additionalInfo: string;
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  country: "United States",
  industry: "B2B & Technology",
  businessSize: "10-50 employees",
  primaryChallenge: "",
  whatToBuild: "",
  currentTech: "",
  timeline: "1-3 months",
  additionalInfo: ""
};

export function StrategyCallForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = "Please enter a valid work email";
    if (!formData.company.trim()) errs.company = "Please enter your company name";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.primaryChallenge.trim())
      errs.primaryChallenge = "Please describe your primary operational bottleneck";
    if (!formData.whatToBuild.trim())
      errs.whatToBuild = "Please share what you want to automate or build";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate high-fidelity submission state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-14 rounded-3xl bg-white border border-brand-200 shadow-premium text-center flex flex-col items-center animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-3 py-1 rounded-full bg-brand-50 border border-brand-200 mb-3">
          REQUEST RECEIVED
        </span>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">
          Strategy Call Request Submitted
        </h3>

        <p className="font-sans text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed mb-8">
          Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our technical co-founders will review your architecture notes for <strong className="text-slate-900">{formData.company}</strong> and reply directly to <strong className="text-slate-900">{formData.email}</strong> within 24 business hours to confirm call timing.
        </p>

        <div className="p-4 rounded-xl bg-surface-ground border border-slate-200 text-left w-full max-w-md mb-8 text-xs font-mono text-slate-600">
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span>Primary Focus:</span>
            <span className="font-semibold text-slate-900">{formData.industry}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span>Target Timeline:</span>
            <span className="font-semibold text-slate-900">{formData.timeline}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Review SLA:</span>
            <span className="font-semibold text-emerald-700">Sub-24h Direct Founder Review</span>
          </div>
        </div>

        <Button
          onClick={() => {
            setFormData(INITIAL_DATA);
            setStep(1);
            setSubmitted(false);
          }}
          variant="outline"
          size="sm"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium">
      {/* Progress Indicators */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors",
                  step === s
                    ? "bg-brand-900 text-white shadow-2xs"
                    : step > s
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-400"
                )}
              >
                {step > s ? "✓" : s}
              </div>
              <span
                className={cn(
                  "font-display text-xs font-semibold hidden sm:inline",
                  step === s ? "text-slate-900" : "text-slate-400"
                )}
              >
                {s === 1 ? "Organization" : s === 2 ? "Operational Scope" : "Logistics"}
              </span>
            </div>
          ))}
        </div>

        <span className="font-mono text-xs text-slate-400">Step {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Contact & Organization */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-display font-bold text-lg text-slate-900">
              01 // Contact & Company Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-xl border font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500",
                    errors.name ? "border-rose-400 bg-rose-50/40" : "border-slate-200 bg-surface-ground"
                  )}
                />
                {errors.name && <span className="text-xs text-rose-600 mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-xl border font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500",
                    errors.email ? "border-rose-400 bg-rose-50/40" : "border-slate-200 bg-surface-ground"
                  )}
                />
                {errors.email && <span className="text-xs text-rose-600 mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Systems"
                  className={cn(
                    "w-full px-4 py-2.5 rounded-xl border font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500",
                    errors.company ? "border-rose-400 bg-rose-50/40" : "border-slate-200 bg-surface-ground"
                  )}
                />
                {errors.company && <span className="text-xs text-rose-600 mt-1 block">{errors.company}</span>}
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Company Website (Optional)
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Operating Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="European Union">European Union</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                  Industry / Sector
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Healthcare & Life Sciences">Healthcare & Clinics</option>
                  <option value="Hospitality & Travel">Hospitality & Guest Operations</option>
                  <option value="B2B & Technology">B2B SaaS & Services</option>
                  <option value="Retail & Commerce">Retail & Commerce</option>
                  <option value="Professional Services">Professional Services (Legal, Finance, Advisory)</option>
                  <option value="Financial Technology">Financial Technology & Back-Office</option>
                  <option value="Other Industry">Other Industry</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Operational Scope */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-display font-bold text-lg text-slate-900">
              02 // Operational Scope & Architecture Needs
            </h3>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                Business Scale (Employees)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["1-10", "10-50", "50-250", "250+"].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, businessSize: sz }))}
                    className={cn(
                      "p-2.5 rounded-xl border text-xs font-mono text-center transition-colors",
                      formData.businessSize === sz
                        ? "bg-brand-900 text-white border-brand-950 font-bold"
                        : "bg-surface-ground border-slate-200 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {sz} employees
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                Primary Operational Challenge / Bottleneck *
              </label>
              <textarea
                name="primaryChallenge"
                rows={3}
                value={formData.primaryChallenge}
                onChange={handleChange}
                placeholder="What repetitive tasks, fragmented handoffs, or software friction are currently slowing your team down?"
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl border font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500",
                  errors.primaryChallenge ? "border-rose-400 bg-rose-50/40" : "border-slate-200 bg-surface-ground"
                )}
              />
              {errors.primaryChallenge && (
                <span className="text-xs text-rose-600 mt-1 block">{errors.primaryChallenge}</span>
              )}
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                What Would You Like To Build or Automate? *
              </label>
              <textarea
                name="whatToBuild"
                rows={3}
                value={formData.whatToBuild}
                onChange={handleChange}
                placeholder="e.g. AI-powered lead qualification, custom CRM dashboard, voice AI assistant for appointments, or document extraction pipeline..."
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl border font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500",
                  errors.whatToBuild ? "border-rose-400 bg-rose-50/40" : "border-slate-200 bg-surface-ground"
                )}
              />
              {errors.whatToBuild && (
                <span className="text-xs text-rose-600 mt-1 block">{errors.whatToBuild}</span>
              )}
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                Current Technology Stack (Optional)
              </label>
              <input
                type="text"
                name="currentTech"
                value={formData.currentTech}
                onChange={handleChange}
                placeholder="e.g. HubSpot, Salesforce, Postgres, Slack, Shopify, Custom Node/Python..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        )}

        {/* Step 3: Logistics & Review */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-display font-bold text-lg text-slate-900">
              03 // Engagement Logistics & Schedule
            </h3>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                Target Implementation Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Immediate (<1 mo)", "1-3 months", "3-6 months", "Exploratory"].map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, timeline: tl }))}
                    className={cn(
                      "p-2.5 rounded-xl border text-xs font-mono text-center transition-colors",
                      formData.timeline === tl
                        ? "bg-brand-900 text-white border-brand-950 font-bold"
                        : "bg-surface-ground border-slate-200 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {tl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
                Additional Notes or Specific Architectural Constraints (Optional)
              </label>
              <textarea
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any security requirements, compliance mandates (HIPAA/GDPR), or preferred meeting timezones..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="p-4 rounded-xl bg-brand-50/80 border border-brand-200/80 flex items-start gap-3 text-xs text-brand-900 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <p>
                <strong>Confidentiality Commitment:</strong> All business workflows, technological details, and challenge descriptions shared in this intake are held in strict commercial confidence. We never share proprietary scope.
              </p>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Step {step + 1}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="bg-brand-900 text-white"
              icon={<Send className="w-4 h-4" />}
            >
              Submit Strategy Call Request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
