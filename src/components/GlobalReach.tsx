'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';
import GlobalNetwork3D from './GlobalNetwork3D';

export default function GlobalReach() {
  const [activeMarket, setActiveMarket] = useState<number>(0);

  const primaryMarkets = [
    {
      country: 'UNITED STATES',
      hubs: 'San Francisco & New York',
      role: 'Group R&D, Neural Model Clusters & Global Commercial Operations',
      latency: '< 14ms',
      coordinates: '37.7749° N, 122.4194° W',
      svgX: 18, // approximate percentage for abstract map
      svgY: 38,
      status: 'FLAGSHIP HUB',
    },
    {
      country: 'UNITED KINGDOM',
      hubs: 'London, UK',
      role: 'European Governance, Algorithmic Systems & Sovereign Compliance',
      latency: '< 18ms',
      coordinates: '51.5074° N, 0.1278° W',
      svgX: 47,
      svgY: 30,
      status: 'EUROPEAN HUB',
    },
    {
      country: 'UNITED ARAB EMIRATES',
      hubs: 'DIFC, Dubai',
      role: 'Cross-Border Trade Infrastructure, Logistics AI & MENA Headquarters',
      latency: '< 22ms',
      coordinates: '25.2048° N, 55.2708° E',
      svgX: 61,
      svgY: 45,
      status: 'MENA HUB',
    },
    {
      country: 'INDIA',
      hubs: 'Bengaluru',
      role: 'High-Throughput Engineering Labs & 24/7 Autonomous Operations Fabric',
      latency: '< 24ms',
      coordinates: '12.9716° N, 77.5946° E',
      svgX: 72,
      svgY: 53,
      status: 'APAC HUB',
    },
  ];

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative overflow-hidden" id="global-network">
      {/* Background Subtle Tech Lattice */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                GLOBAL TECHNOLOGY NETWORK
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                BUILT FOR ONE WORLD.
              </h2>
              <p className="font-body-md text-body-md text-primary font-light italic mt-1">
                “Technology has no borders. Neither do we.”
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              A planetary digital mesh engineered for enterprise availability, low-latency edge coordination, and
              multi-jurisdiction sovereign compliance.
            </p>
          </div>
        </FadeIn>

        {/* Abstract Planetary Infrastructure Mesh Visualization */}
        <div className="p-8 bg-surface-container-low border border-outline-variant/50 relative overflow-hidden shadow-sm space-y-8">
          {/* Header Status Telemetry */}
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 font-mono text-xs text-outline">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              GLOBAL TOPOLOGY // ACTIVE MESH
            </span>
            <span className="text-primary font-semibold">EDGE ROUNDTRIP &lt; 25MS</span>
          </div>

          {/* 3D Global Network Spatial Mesh */}
          <div className="relative w-full h-56 sm:h-72 bg-surface-container-lowest border border-outline-variant/40 overflow-hidden flex items-center justify-center">
            <GlobalNetwork3D activeHubIndex={activeMarket} onSelectHub={setActiveMarket} />
          </div>

          {/* 4 Strategic Axis Hubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryMarkets.map((market, idx) => {
              const isSelected = activeMarket === idx;
              return (
                <div
                  key={market.country}
                  onClick={() => setActiveMarket(idx)}
                  className={`p-6 border transition-all cursor-pointer flex flex-col justify-between h-64 ${
                    isSelected
                      ? 'bg-surface-container-lowest border-primary shadow-md ring-1 ring-primary/30'
                      : 'bg-surface-container-lowest/80 border-outline-variant/40 hover:border-outline-variant'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-primary font-bold">
                        NODE 0{idx + 1}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-primary animate-ping' : 'bg-outline'
                        }`}
                      ></span>
                    </div>

                    <div>
                      <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                        {market.country}
                      </h3>
                      <p className="font-mono text-[11px] text-primary mt-0.5">{market.hubs}</p>
                    </div>

                    <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                      {market.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-outline-variant/20 font-mono text-[10px] text-outline flex items-center justify-between">
                    <span>LATENCY: {market.latency}</span>
                    <span className="text-on-surface font-semibold">{market.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Planetary Network Footprint Status Bar */}
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
            <span>NETWORK CLUSTERS: AMERICAS • EMEA • APAC • SOVEREIGN EDGE</span>
            <span className="text-primary font-bold">GLOBAL REACH: UNRESTRICTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
