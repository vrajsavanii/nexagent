"use client";

import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Layers, Mail, FileText, Database, TrendingUp,
  Megaphone, Cog, Headphones, MessageSquare, BarChart3,
  CheckCircle2, AlertTriangle, ArrowRight, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolItem {
  id: string;
  name: string;
  icon: React.ElementType;
  isolatedState: string;
  connectedState: string;
}

const TOOLS: ToolItem[] = [
  { id: "crm", name: "CRM", icon: Layers, isolatedState: "Manual record updates & stale lead stages", connectedState: "Auto-synced on every client touchpoint" },
  { id: "email", name: "Email", icon: Mail, isolatedState: "Unstructured inboxes & buried requests", connectedState: "Context parsed & routed to task boards" },
  { id: "docs", name: "Documents", icon: FileText, isolatedState: "Re-typed PDF details & manual filing", connectedState: "Structured data extracted instantly" },
  { id: "db", name: "Databases", icon: Database, isolatedState: "Siloed schemas requiring SQL exports", connectedState: "Live event bus syncing changes" },
  { id: "sales", name: "Sales", icon: TrendingUp, isolatedState: "Manual prospecting & delayed follow-up", connectedState: "Automated qualification & briefing" },
  { id: "marketing", name: "Marketing", icon: Megaphone, isolatedState: "Disconnected campaign attribution", connectedState: "Real-time lifecycle cohort triggers" },
  { id: "ops", name: "Operations", icon: Cog, isolatedState: "Fragile spreadsheets & duplicate entry", connectedState: "Orchestrated multi-step workflows" },
  { id: "support", name: "Customer Support", icon: Headphones, isolatedState: "Tier-1 ticket overload & queue delays", connectedState: "AI assistants resolve common inquiries" },
  { id: "comms", name: "Communication", icon: MessageSquare, isolatedState: "Lost internal Slack/Teams threads", connectedState: "Actionable system notifications" },
  { id: "analytics", name: "Analytics", icon: BarChart3, isolatedState: "Delayed end-of-month reporting", connectedState: "Real-time operational command center" }
];

export function BusinessComplexitySection() {
  const [viewMode, setViewMode] = useState<"fragmented" | "connected">("connected");
  const [animating, setAnimating] = useState(false);

  const handleSwitch = (mode: "fragmented" | "connected") => {
    if (mode === viewMode) return;
    setAnimating(true);
    setTimeout(() => {
      setViewMode(mode);
      setAnimating(false);
    }, 180);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="BUSINESS COMPLEXITY"
            badgeVariant="titanium"
            title="BUSINESS SYSTEMS SHOULDN'T FIGHT EACH OTHER."
            subtitle="Businesses often operate through disconnected tools, repetitive workflows and fragmented information. NexAgent builds systems that connect those pieces."
          />
        </FadeIn>

        {/* Interactive Mode Selector */}
        <FadeIn delay={100}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => handleSwitch("fragmented")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-display text-xs sm:text-sm font-semibold transition-all duration-200",
                  viewMode === "fragmented"
                    ? "bg-white text-rose-800 shadow-sm border border-rose-200"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                Fragmented Silos
              </button>
              <button
                type="button"
                onClick={() => handleSwitch("connected")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-display text-xs sm:text-sm font-semibold transition-all duration-200",
                  viewMode === "connected"
                    ? "bg-brand-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <Sparkles className="w-4 h-4 text-brand-300" />
                Connected by NexAgent
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Topology Grid */}
        <FadeIn delay={150}>
          <div className="relative rounded-2xl border border-slate-200/90 bg-surface-ground p-6 sm:p-10 shadow-2xs">
            {/* Connected mode banner — slides in from top */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-400 ease-out",
                viewMode === "connected" ? "max-h-24 mb-8 opacity-100" : "max-h-0 mb-0 opacity-0"
              )}
            >
              <div className="p-4 rounded-xl bg-brand-50/80 border border-brand-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-600 animate-pulse-subtle" />
                  <span className="font-mono text-xs font-bold text-brand-900 uppercase tracking-wider">
                    NEXAGENT ORCHESTRATION LAYER ACTIVE
                  </span>
                </div>
                <span className="text-xs text-brand-700 font-sans">
                  Data, events, and approvals flow bi-directionally across all 10 business modules.
                </span>
              </div>
            </div>

            <div
              className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-180",
                animating ? "opacity-0" : "opacity-100"
              )}
            >
              {TOOLS.map((tool, i) => {
                const Icon = tool.icon;
                const isConnected = viewMode === "connected";

                return (
                  <div
                    key={tool.id}
                    className={cn(
                      "p-4 rounded-xl border transition-all duration-300 relative flex flex-col justify-between min-h-[140px] card-hover",
                      isConnected
                        ? "bg-white border-brand-200/80 shadow-2xs"
                        : "bg-slate-50/90 border-slate-200/60 opacity-80"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "p-2 rounded-lg",
                            isConnected
                              ? "bg-brand-50 text-brand-700"
                              : "bg-slate-200/80 text-slate-500"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-display font-bold text-sm text-slate-900">
                          {tool.name}
                        </span>
                      </div>

                      {isConnected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {isConnected ? tool.connectedState : tool.isolatedState}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center text-[10px] font-mono">
                      <span className={isConnected ? "text-brand-600 font-semibold" : "text-slate-400"}>
                        {isConnected ? "CONNECTED" : "ISOLATED"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Narrative Callout */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-xs sm:text-sm text-slate-600 text-center sm:text-left max-w-2xl">
                We design non-invasive architectures that respect your existing investments—connecting current software tools rather than forcing disruptive rip-and-replace cycles.
              </p>
              <Button
                href="/technology#integration"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Learn About Systems Integration
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
