import React from "react";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Workflow,
  Cpu,
  PhoneCall,
  Bot,
  Code2,
  Layers,
  BarChart3,
  Cloud,
  Network,
  ArrowRight
} from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  accent: "teal" | "titanium" | "slate";
  link: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "ai-automation",
    title: "AI Workflow Automation",
    category: "Operations",
    description: "Event-triggered automation pipelines that eliminate manual handoffs, data re-entry, and administrative friction.",
    icon: Workflow,
    accent: "teal",
    link: "/solutions#business-automation"
  },
  {
    id: "ai-agents",
    title: "Autonomous AI Agents",
    category: "Intelligence",
    description: "Goal-directed software agents configured with explicit tool permissions to plan and execute multi-step business objectives.",
    icon: Cpu,
    accent: "teal",
    link: "/solutions#ai-agents"
  },
  {
    id: "voice-ai",
    title: "Voice AI Systems",
    category: "Telephony",
    description: "Sub-500ms conversational telephony agents designed for inbound customer calls, qualification, and appointment routing.",
    icon: PhoneCall,
    accent: "titanium",
    link: "/solutions#voice-ai"
  },
  {
    id: "ai-assistants",
    title: "AI Chatbots & Assistants",
    category: "Conversational",
    description: "Grounded conversational interfaces connected directly to corporate documentation, FAQs, and operational databases.",
    icon: Bot,
    accent: "teal",
    link: "/solutions#ai-assistants"
  },
  {
    id: "software",
    title: "Custom Software Engineering",
    category: "Applications",
    description: "High-performance web applications, internal operational tools, and customer portals built with modern TypeScript.",
    icon: Code2,
    accent: "slate",
    link: "/solutions#custom-software"
  },
  {
    id: "crm-systems",
    title: "CRM & Business Systems",
    category: "Operations",
    description: "Bespoke operational backbones tailored to your exact team hierarchy, customer pipelines, and business workflows.",
    icon: Layers,
    accent: "titanium",
    link: "/solutions#business-systems"
  },
  {
    id: "business-intelligence",
    title: "AI Dashboards & BI",
    category: "Analytics",
    description: "Real-time visual telemetry, throughput analysis, and bottleneck detection aggregated across all active enterprise tools.",
    icon: BarChart3,
    accent: "slate",
    link: "/solutions#business-intelligence"
  },
  {
    id: "cloud-systems",
    title: "Cloud & Digital Infrastructure",
    category: "Infrastructure",
    description: "Resilient backend architectures, databases, and microservices engineered for high uptime, security, and scalability.",
    icon: Cloud,
    accent: "teal",
    link: "/solutions#cloud-systems"
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    category: "Middleware",
    description: "Reliable event brokers and webhook orchestrators bridging disconnected legacy databases, SaaS, and modern AI.",
    icon: Network,
    accent: "titanium",
    link: "/solutions#systems-integration"
  }
];

export function WhatWeBuildSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="03 / CAPABILITIES"
          badgeVariant="teal"
          title="FROM ONE WORKFLOW TO AN ENTIRE INTELLIGENT SYSTEM."
          subtitle="NexAgent works on everything from a focused repetitive workflow to a complex interconnected enterprise system. Scalable engineering tailored to the problem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.id}
                href={card.link}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs transition-all duration-300 hover:border-brand-400 hover:shadow-premium hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-brand-50/80 text-brand-700 transition-colors group-hover:bg-brand-900 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-100">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5 group-hover:text-brand-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-display font-semibold text-brand-700 group-hover:text-brand-900">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
