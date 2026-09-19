import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, AlertTriangle, Workflow, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center py-16 sm:py-24 bg-surface-ground">
      <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Disconnected Node Visualization */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300 animate-spin" style={{ animationDuration: "20s" }} />
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-rose-400 shadow-premium flex flex-col items-center justify-center text-rose-600">
            <Workflow className="w-8 h-8 stroke-1" />
          </div>
          <span className="absolute -bottom-2 font-mono text-[9px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 font-bold">
            NODE 404: SEVERED
          </span>
        </div>

        <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold px-3 py-1 rounded-full bg-brand-50 border border-brand-200 mb-3">
          ERROR 404 // UNRESOLVED ROUTE
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
          THIS WORKFLOW DOESN&apos;T EXIST.
        </h1>

        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mb-8">
          The requested system node, endpoint, or page could not be located in our routing table. It may have been moved, deprecated, or re-architected.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Operating Home
          </Button>
          <Button
            href="/solutions"
            variant="outline"
            size="md"
          >
            Explore Active Solutions
          </Button>
        </div>
      </div>
    </div>
  );
}
