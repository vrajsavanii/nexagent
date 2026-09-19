import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQ_DATA } from "@/data/faq";
import { getFAQPageSchema } from "@/lib/schema";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions regarding NexAgent's capabilities, custom software engineering, AI agent systems, pricing, engagement models, and operations."
};

export default function FAQPage() {
  const faqSchema = getFAQPageSchema(
    FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="QUESTIONS & ANSWERS"
          badgeVariant="teal"
          title="FREQUENTLY ASKED QUESTIONS."
          subtitle="Clear, verified information regarding our technical capabilities, engagement models, and operational scope."
        />

        <div className="mb-14">
          <Accordion items={FAQ_DATA} />
        </div>

        {/* Still have questions card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-premium text-center flex flex-col items-center">
          <div className="p-3 rounded-2xl bg-brand-50 text-brand-700 mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
            Have a Specific Architectural or Scope Question?
          </h2>
          <p className="font-sans text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
            Our founders and engineering leads are available to discuss your specific technical stack and operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              href="/strategy-call"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Strategy Call
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Send Direct Inquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
