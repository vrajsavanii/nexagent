import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_DATA } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Globe2, Mail, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | NexAgent",
  description:
    "Get in touch with the NexAgent engineering team for technical inquiries, platform details, and collaboration opportunities."
};

export default function ContactPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="COMMUNICATION"
          badgeVariant="teal"
          title="CONTACT NEXAGENT."
          subtitle="Whether you have an immediate business workflow to automate, a question about our platforms, or wish to schedule an architectural consultation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Global Commercial Focus */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Commercial Orientation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                NexAgent operates with a distributed engineering model, actively partnering with organizations across four primary commercial markets:
              </p>

              <div className="flex flex-col gap-3">
                {COMPANY_DATA.globalFocus.map((g, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface-ground border border-slate-200/70">
                    <Globe2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <div>
                      <span className="font-display font-bold text-xs text-slate-900 block">
                        {g.country}
                      </span>
                      <span className="font-sans text-[11px] text-slate-500">
                        {g.focus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-900 text-white shadow-premium">
              <h4 className="font-display font-bold text-base mb-2">
                Seeking a System Diagnosis?
              </h4>
              <p className="font-sans text-xs text-slate-300 mb-4 leading-relaxed">
                For in-depth operational reviews, we recommend scheduling a dedicated Strategy Call with our technical founders.
              </p>
              <Button
                href="/strategy-call"
                variant="primary"
                size="sm"
                className="bg-white hover:bg-slate-100 text-brand-950 border-none w-full justify-center shadow-md"
                icon={<ArrowRight className="w-3.5 h-3.5 text-brand-900" />}
              >
                Book a Strategy Call
              </Button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
