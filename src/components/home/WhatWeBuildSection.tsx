"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Workflow, Cpu, PhoneCall, Bot, Code2, Layers,
  BarChart3, Cloud, Network, ArrowRight, ChevronDown,
  CheckCircle2, Zap, GitBranch, MessageSquare, Mic,
  Database, Globe, Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InnerSolution {
  title: string;
  detail: string;
  icon: React.ElementType;
}

interface CategoryCard {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  link: string;
  innerSolutions: InnerSolution[];
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "ai-automation",
    title: "AI Workflow Automation",
    category: "Operations",
    description: "Event-triggered automation pipelines that eliminate manual handoffs, data re-entry, and administrative friction.",
    icon: Workflow,
    link: "/solutions#business-automation",
    innerSolutions: [
      { title: "Multi-step DAG Pipelines", detail: "Directed acyclic graph execution across 10+ connected systems", icon: GitBranch },
      { title: "Webhook Orchestration", detail: "Real-time event processing with guaranteed delivery", icon: Zap },
      { title: "Human-in-the-loop", detail: "Approval gates with Slack/email escalation paths", icon: CheckCircle2 },
    ]
  },
  {
    id: "ai-agents",
    title: "Autonomous AI Agents",
    category: "Intelligence",
    description: "Goal-directed software agents configured with explicit tool permissions to plan and execute multi-step business objectives.",
    icon: Cpu,
    link: "/solutions#ai-agents",
    innerSolutions: [
      { title: "Tool-calling Agents", detail: "GPT/Claude agents with API, calendar, and CRM permissions", icon: Settings },
      { title: "Memory & Context", detail: "Persistent agent memory across sessions via vector stores", icon: Database },
      { title: "Multi-agent Graphs", detail: "Orchestrator + specialist agent networks for complex tasks", icon: Network },
    ]
  },
  {
    id: "voice-ai",
    title: "Voice AI Systems",
    category: "Telephony",
    description: "Sub-500ms conversational telephony agents for inbound customer calls, qualification, and appointment routing.",
    icon: PhoneCall,
    link: "/solutions#voice-ai",
    innerSolutions: [
      { title: "Real-time STT/TTS", detail: "Deepgram + ElevenLabs pipeline under 500ms latency", icon: Mic },
      { title: "Inbound Call Routing", detail: "Intent classification and priority-based queue dispatch", icon: PhoneCall },
      { title: "CRM Auto-sync", detail: "Call transcript, summary, and action items written automatically", icon: Database },
    ]
  },
  {
    id: "ai-assistants",
    title: "AI Chatbots & Assistants",
    category: "Conversational",
    description: "Grounded conversational interfaces connected directly to corporate documentation, FAQs, and operational databases.",
    icon: Bot,
    link: "/solutions#ai-assistants",
    innerSolutions: [
      { title: "RAG Knowledge Base", detail: "Answers grounded in your proprietary documentation", icon: Database },
      { title: "Multi-channel Deploy", detail: "Web widget, WhatsApp, Slack, Teams simultaneously", icon: MessageSquare },
      { title: "Escalation Routing", detail: "Graceful handoff to human agents when confidence is low", icon: ArrowRight },
    ]
  },
  {
    id: "software",
    title: "Custom Software Engineering",
    category: "Applications",
    description: "High-performance web applications, internal operational tools, and customer portals built with modern TypeScript.",
    icon: Code2,
    link: "/solutions#custom-software",
    innerSolutions: [
      { title: "Next.js Web Apps", detail: "Server-rendered, SEO-optimized, production-grade frontends", icon: Globe },
      { title: "Operational Portals", detail: "Role-based dashboards tailored to your team hierarchy", icon: Layers },
      { title: "API-first Backends", detail: "REST/GraphQL services with auth, rate limiting, logging", icon: Network },
    ]
  },
  {
    id: "crm-systems",
    title: "CRM & Business Systems",
    category: "Operations",
    description: "Bespoke operational backbones tailored to your exact team hierarchy, customer pipelines, and business workflows.",
    icon: Layers,
    link: "/solutions#business-systems",
    innerSolutions: [
      { title: "Pipeline Architecture", detail: "Custom deal stages, ownership, and automated transitions", icon: GitBranch },
      { title: "Bi-directional Sync", detail: "Real-time event bridging between CRM and operational tools", icon: Zap },
      { title: "Reporting Engine", detail: "Live performance telemetry visible to leadership teams", icon: BarChart3 },
    ]
  },
  {
    id: "business-intelligence",
    title: "AI Dashboards & BI",
    category: "Analytics",
    description: "Real-time visual telemetry, throughput analysis, and bottleneck detection aggregated across all active enterprise tools.",
    icon: BarChart3,
    link: "/solutions#business-intelligence",
    innerSolutions: [
      { title: "Live Data Streams", detail: "WebSocket-fed metrics updated without page refresh", icon: Zap },
      { title: "Anomaly Detection", detail: "AI flags throughput drops before they become incidents", icon: CheckCircle2 },
      { title: "Custom KPI Views", detail: "Role-specific metric sets for ops, sales, and executive teams", icon: Layers },
    ]
  },
  {
    id: "cloud-systems",
    title: "Cloud & Digital Infrastructure",
    category: "Infrastructure",
    description: "Resilient backend architectures, databases, and microservices engineered for high uptime, security, and scalability.",
    icon: Cloud,
    link: "/solutions#cloud-systems",
    innerSolutions: [
      { title: "Microservice Design", detail: "Containerized services with independent scaling and deploy", icon: Settings },
      { title: "Database Architecture", detail: "PostgreSQL, Redis, and vector DB selection and tuning", icon: Database },
      { title: "CI/CD Pipelines", detail: "Automated test, build, and deploy workflows on push", icon: GitBranch },
    ]
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    category: "Middleware",
    description: "Reliable event brokers and webhook orchestrators bridging disconnected legacy databases, SaaS, and modern AI.",
    icon: Network,
    link: "/solutions#systems-integration",
    innerSolutions: [
      { title: "Event Bus Architecture", detail: "Guaranteed-delivery message queues linking all systems", icon: Zap },
      { title: "Legacy API Bridging", detail: "REST shims for SOAP, FTP, and proprietary endpoints", icon: Network },
      { title: "Schema Transformation", detail: "Field mapping and normalization across conflicting data models", icon: Settings },
    ]
  }
];

function CapabilityCard({ card, index }: { card: CategoryCard; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  // Close on Escape
  useEffect(() => {
    if (!expanded) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [expanded]);

  return (
    <div
      className={cn(
        "module-card relative flex flex-col rounded-2xl bg-white border transition-all duration-350",
        expanded
          ? "border-brand-300/60 shadow-[0_24px_60px_-12px_rgba(26,59,70,0.14),0_0_0_1.5px_rgba(49,127,148,0.2)] expanded"
          : hovered
          ? "border-brand-300/50 shadow-premium -translate-y-1"
          : "border-slate-200/80 shadow-2xs"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Header — always visible */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <div
            className={cn(
              "p-3 rounded-xl transition-all duration-300",
              expanded || hovered
                ? "bg-brand-900 text-white"
                : "bg-brand-50/80 text-brand-700"
            )}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-100">
            {card.category}
          </span>
        </div>

        <h3 className={cn(
          "font-display font-bold text-lg mb-2.5 transition-colors duration-200",
          expanded || hovered ? "text-brand-900" : "text-slate-900"
        )}>
          {card.title}
        </h3>

        <p className="font-sans text-sm text-slate-600 leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Expand / Explore row */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={card.link}
            className="font-display text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1 transition-colors"
            tabIndex={0}
          >
            Explore Solution
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse inner solutions" : "Expand inner solutions"}
            className={cn(
              "flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider font-bold px-2.5 py-1.5 rounded-lg transition-all duration-200",
              expanded
                ? "bg-brand-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-800"
            )}
          >
            {expanded ? "Collapse" : "Details"}
            <ChevronDown
              className={cn(
                "w-3 h-3 transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {/* Expandable Inner Solutions Panel */}
      <div
        className={cn("inner-solutions", expanded && "open")}
      >
        <div className="inner-solutions-content">
          <div className="px-7 pb-6 pt-0 flex flex-col gap-3 border-t border-slate-100">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold pt-4 block">
              Technical Capabilities
            </span>
            {card.innerSolutions.map((sol, i) => {
              const SolIcon = sol.icon;
              return (
                <div
                  key={i}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100 transition-all duration-300",
                    expanded && "hover:bg-brand-50/60 hover:border-brand-200/60"
                  )}
                  style={{
                    transitionDelay: expanded ? `${i * 60}ms` : "0ms",
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? "translateY(0)" : "translateY(6px)",
                    transition: `opacity 0.3s ${i * 60}ms, transform 0.3s ${i * 60}ms, background 0.2s, border-color 0.2s`
                  }}
                >
                  <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-brand-700 shrink-0 mt-0.5">
                    <SolIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-slate-900">{sol.title}</p>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed mt-0.5">{sol.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatWeBuildSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="CAPABILITIES"
            badgeVariant="teal"
            title="FROM ONE WORKFLOW TO AN ENTIRE INTELLIGENT SYSTEM."
            subtitle="NexAgent works on everything from a focused repetitive workflow to a complex interconnected enterprise system. Click any card to see technical capabilities."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((card, index) => (
            <FadeIn key={card.id} delay={index * 60} direction="scale">
              <CapabilityCard card={card} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
