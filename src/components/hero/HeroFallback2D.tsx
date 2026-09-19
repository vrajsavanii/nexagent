"use client";

import React, { useState } from "react";
import { Cpu, Workflow, Layers, Database, PhoneCall, GitBranch, Server } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemNode {
  id: string;
  name: string;
  category: string;
  description: string;
  x: number;
  y: number;
  icon: React.ElementType;
  accent: "teal" | "titanium" | "navy";
}

const NODES: SystemNode[] = [
  {
    id: "ai",
    name: "AI & REASONING",
    category: "Cognitive Tier",
    description: "Reasoning, classification, generation and intelligent decision support.",
    x: 50,
    y: 18,
    icon: Cpu,
    accent: "teal"
  },
  {
    id: "automation",
    name: "AUTOMATION",
    category: "Execution Tier",
    description: "Turn repetitive manual handoffs into reliable, event-driven pipelines.",
    x: 82,
    y: 30,
    icon: Workflow,
    accent: "teal"
  },
  {
    id: "software",
    name: "SOFTWARE",
    category: "Application Tier",
    description: "Build the bespoke applications and unified portals businesses actually need.",
    x: 85,
    y: 70,
    icon: Layers,
    accent: "navy"
  },
  {
    id: "data",
    name: "DATA & BI",
    category: "Intelligence Tier",
    description: "Turn fragmented information and spreadsheets into usable intelligence.",
    x: 50,
    y: 84,
    icon: Database,
    accent: "titanium"
  },
  {
    id: "voice",
    name: "VOICE AI",
    category: "Telephony Tier",
    description: "Deploy conversational voice experiences for real-time business calls.",
    x: 18,
    y: 70,
    icon: PhoneCall,
    accent: "titanium"
  },
  {
    id: "workflows",
    name: "WORKFLOWS",
    category: "Coordination Tier",
    description: "Orchestrate multi-step execution graphs and approvals across teams.",
    x: 15,
    y: 30,
    icon: GitBranch,
    accent: "teal"
  }
];

export function HeroFallback2D() {
  const [activeNode, setActiveNode] = useState<SystemNode>(NODES[0]);

  return (
    <div className="relative w-full h-full min-h-[460px] flex flex-col items-center justify-center p-4 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-premium overflow-hidden">
      {/* Background SVG Connective Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-200/90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F9CB0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BDA28B" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {NODES.map((node) => (
          <line
            key={node.id}
            x1="50%"
            y1="50%"
            x2={`${node.x}%`}
            y2={`${node.y}%`}
            stroke={activeNode.id === node.id ? "url(#lineGrad)" : "#E2E8F0"}
            strokeWidth={activeNode.id === node.id ? "2" : "1"}
            strokeDasharray={activeNode.id === node.id ? "none" : "3,3"}
          />
        ))}
      </svg>

      {/* Center Core Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 border-2 border-brand-400/40 shadow-glow-teal flex flex-col items-center justify-center text-white p-2 text-center transition-transform hover:scale-105">
          <Server className="w-5 h-5 text-brand-300 mb-1" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-200 font-bold">
            NEXAGENT
          </span>
          <span className="font-display text-[8px] uppercase tracking-wider text-slate-300">
            INTELLIGENCE
          </span>
        </div>
      </div>

      {/* Orbiting Satellite Nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const isSelected = activeNode.id === node.id;

        return (
          <button
            key={node.id}
            type="button"
            onClick={() => setActiveNode(node)}
            onMouseEnter={() => setActiveNode(node)}
            aria-label={`Inspect ${node.name}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border text-left transition-all duration-200 shadow-sm",
              isSelected
                ? "bg-white border-brand-500 ring-2 ring-brand-400/30 scale-105 shadow-md"
                : "bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white"
            )}
          >
            <div
              className={cn(
                "p-1 rounded-md",
                node.accent === "teal"
                  ? "bg-brand-50 text-brand-700"
                  : node.accent === "titanium"
                  ? "bg-titanium-50 text-titanium-700"
                  : "bg-slate-100 text-slate-700"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-900">
                {node.name}
              </span>
              <span className="text-[9px] text-slate-500">{node.category}</span>
            </div>
          </button>
        );
      })}

      {/* Real-time Telemetry Card */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm z-40 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-brand-200/70 shadow-elevated">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-700 font-bold">
            NODE TELEMETRY // {activeNode.name}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
        </div>
        <p className="font-sans text-xs text-slate-700 leading-relaxed mb-2">
          {activeNode.description}
        </p>
        <span className="font-mono text-[9px] text-slate-400">
          Click or hover any node to inspect system topology
        </span>
      </div>
    </div>
  );
}
