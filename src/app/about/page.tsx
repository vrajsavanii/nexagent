import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { COMPANY_DATA } from "@/data/company";
import { ArrowRight, ShieldCheck, Cpu, Globe2, Compass, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About NexAgent | Founder-Led Technology Company",
  description:
    "Learn about NexAgent's mission, equal co-founder ownership, hybrid operating model, and global ambition to build intelligent business systems."
};

export default function AboutPage() {
  const principles = [
    {
      title: "Grounded Systems Over Fluffy Claims",
      detail: "We do not sell magic or revolution. We build disciplined, typed, observable software that eliminates real manual friction."
    },
    {
      title: "Deterministic Execution For Probabilistic Models",
      detail: "AI models generate hypotheses; our software enforces validation, retry queues, schema checks, and human sign-off."
    },
    {
      title: "Respect Existing Software Investments",
      detail: "We connect the applications businesses already rely on through event-driven middleware instead of forcing painful migrations."
    },
    {
      title: "Built For The Long Term",
      detail: "We are an equal-ownership, founder-led company building resilient technology foundations meant to compound over decades."
    }
  ];

  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="COMPANY PROFILE"
          badgeVariant="teal"
          title="ABOUT NEXAGENT."
          subtitle="A founder-led technology company building AI-powered software, automation systems, intelligent business applications, and digital infrastructure."
        />

        {/* Who We Are & Why We Exist */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold block mb-3">
            WHO WE ARE & WHY WE EXIST
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-6 leading-snug">
            Bridging the gap between fragmented business software and intelligent, autonomous operations.
          </h2>

          <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Modern businesses operate on an increasingly fractured landscape of cloud software, spreadsheets, communication tools, and databases. While each tool serves an isolated function, teams lose hundreds of hours each month acting as manual connective tissue—re-typing data, chasing approvals, and copying statuses between apps.
            </p>
            <p>
              NexAgent was founded to solve this fundamental operational bottleneck. We combine modern artificial intelligence, custom software engineering, event-driven automation, and systems integration to transform disconnected tools into unified, intelligent operating environments.
            </p>
            <p>
              We are not a bloated marketing agency or a generic reseller. We are engineers and product builders who partner with organizations to diagnose friction and build enduring solutions.
            </p>
          </div>
        </div>

        {/* How We Think: Engineering Principles */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold block mb-3">
            OUR ENGINEERING PHILOSOPHY
          </span>

          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-8">
            How We Think About Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((pr, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-brand-700 block mb-2">
                  0{idx + 1} // PRINCIPLE
                </span>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {pr.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pr.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders & Ownership Integrity */}
        <div id="founders" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium mb-12 scroll-mt-24">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold block mb-3">
            LEADERSHIP & GOVERNANCE
          </span>

          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-4">
            Built by Two Founders. Built for the Long Term.
          </h2>

          <p className="font-sans text-sm text-slate-600 leading-relaxed mb-8">
            {COMPANY_DATA.foundingModel} We do not invent imaginary executives, artificial advisory panels, or fabricated global offices. Our governance structure is built on accountability, technical rigor, and equal partnership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANY_DATA.founders.map((f, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface-ground border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-brand-700 uppercase block mb-1">
                  CO-FOUNDER 0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                  {f.title}
                </h3>
                <span className="font-mono text-xs text-titanium-700 font-semibold block mb-3">
                  {f.ownership}
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Ambition & Current Focus */}
        <div id="global" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium mb-12 scroll-mt-24">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold block mb-3">
            MARKET ORIENTATION
          </span>

          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-4">
            Global Ambition. Pragmatic Focus.
          </h2>

          <p className="font-sans text-sm text-slate-600 leading-relaxed mb-8">
            NexAgent is globally oriented from day one. Rather than fabricating worldwide physical campuses, we operate with a distributed engineering structure serving clients across four initial commercial focus regions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_DATA.globalFocus.map((g, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-surface-ground border border-slate-200/80">
                <Globe2 className="w-5 h-5 text-brand-600 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
                  {g.country}
                </h3>
                <p className="font-sans text-xs text-slate-500">
                  {g.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-900 text-white text-center flex flex-col items-center shadow-elevated">
          <h2 className="font-display font-bold text-2xl mb-2">
            Work Directly With Our Technical Leadership
          </h2>
          <p className="font-sans text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
            Schedule a confidential discovery conversation to explore how NexAgent can engineer intelligent workflows for your business.
          </p>
          <Button
            href="/strategy-call"
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
