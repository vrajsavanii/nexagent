'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Precision Engineering Over Hype',
      desc: 'We do not build speculative demonstrations. Every system, platform, and model we deploy is engineered for deterministic, mission-critical uptime in production enterprise environments.',
    },
    {
      num: '02',
      title: 'Decade-Scale Stewardship',
      desc: 'We are structured as a permanent technology parent company, not a transient fund. We build, acquire, and hold category-leading businesses with an infinite time horizon.',
    },
    {
      num: '03',
      title: 'Sovereignty & Complete Privacy',
      desc: 'Enterprise intelligence cannot compromise data boundaries. We mandate strict data isolation, private enclaves, and cryptographic auditability across all group companies.',
    },
    {
      num: '04',
      title: 'Compound Leverage Across the Group',
      desc: 'Our subsidiaries share research breakthroughs, sovereign compute clusters, and global enterprise relationships, creating compounding returns that single-product startups cannot match.',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      role: 'Global Headquarters & AI Research',
      address: 'Market Street Financial Center, San Francisco, CA',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      role: 'European Governance & Fintech Rails',
      address: 'Canary Wharf Financial District, London, UK',
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'Middle East Sovereign Compute & DIFC Hub',
      address: 'DIFC Innovation Precinct, Dubai, UAE',
    },
    {
      city: 'Bengaluru',
      country: 'India',
      role: 'Distributed Systems & Cloud Engineering',
      address: 'Outer Ring Road Technology Corridor, Bengaluru, India',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 border-b border-[#17191A]/10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#57595B]">
              Parent Group &amp; Governance
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase font-light tracking-tight text-[#17191A] max-w-4xl leading-[1.08]">
            We Build The Companies
            <br />
            <span className="font-normal italic text-[#3D9D99]">That Power Modern Enterprise.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#57595B] max-w-2xl leading-relaxed font-sans">
            NexAgent is an international technology parent company. We conceive, engineer, and scale operating
            businesses across artificial intelligence, sovereign cloud infrastructure, enterprise software, and
            decision intelligence.
          </p>
        </FadeIn>
      </section>

      {/* Brand Heritage & Slogan Card */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <FadeIn className="bg-white rounded-3xl border border-[#17191A]/10 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-semibold">
              Our Core Mandate
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#17191A] font-light leading-snug">
              Build smarter,
              <br />
              <span className="italic font-normal text-[#3D9D99]">Grow faster.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#57595B] leading-relaxed">
              We started NexAgent with a singular conviction: as artificial intelligence shifts from experimental
              models into core business infrastructure, enterprises need durable, institutional partners. Not
              another consulting agency, and not another uncoordinated collection of point SaaS tools.
            </p>
            <p className="text-sm sm:text-base text-[#57595B] leading-relaxed">
              We design cohesive technological ecosystems where cognitive agents, sovereign data infrastructure,
              and enterprise workflows operate as one synchronized engine.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md h-40 rounded-2xl overflow-hidden border border-[#17191A]/10 shadow-inner bg-[#17191A]">
              <Image
                src="/images/slogan-logo.jpeg"
                alt="NexAgent - Build Smarter, Grow Faster"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-mono text-[11px] text-[#57595B] mt-3">
              Official NexAgent Brand Slogan &amp; Identity
            </span>
          </div>
        </FadeIn>
      </section>

      {/* Operating Principles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[#17191A]/10">
        <FadeIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-medium block mb-2">
            Institutional Values
          </span>
          <h2 className="font-display text-3xl uppercase font-light text-[#17191A]">
            Our Operating Principles
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((pr) => (
            <StaggerItem key={pr.num}>
              <div className="p-8 bg-white rounded-2xl border border-[#17191A]/10 shadow-sm h-full flex flex-col justify-between space-y-4 hover:border-[#3D9D99]/40 transition-all">
                <span className="font-mono text-base font-bold text-[#3D9D99]">{pr.num}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#17191A]">{pr.title}</h3>
                  <p className="text-sm text-[#57595B] mt-2 leading-relaxed">{pr.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Global Presence Hubs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[#17191A]/10">
        <FadeIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-medium block mb-2">
            International Network
          </span>
          <h2 className="font-display text-3xl uppercase font-light text-[#17191A]">
            Global Technology Footprint
          </h2>
          <p className="text-sm text-[#57595B] mt-2 leading-relaxed">
            Technology operates across borders. Our primary offices coordinate engineering, sovereign cloud
            infrastructure, and institutional partnerships across key financial and technological capitals.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((off, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 bg-white rounded-2xl border border-[#17191A]/10 shadow-sm flex flex-col justify-between h-full space-y-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#3D9D99] font-semibold block">
                    {off.country}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#17191A] mt-1">{off.city}</h3>
                  <p className="text-xs font-mono text-[#57595B] mt-2">{off.role}</p>
                </div>
                <p className="text-[11px] text-[#84888A] pt-4 border-t border-[#17191A]/06">
                  {off.address}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Leadership & Strategic Advisory CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[#17191A]/10">
        <FadeIn className="bg-[#17191A] text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99]">
              Executive Advisory
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase font-light leading-tight">
              Connect With The NexAgent Group.
            </h2>
            <p className="text-sm text-[#B9BCBA] leading-relaxed">
              We regularly consult with executive leadership, sovereign wealth funds, and enterprise founders looking
              to scale intelligent systems or explore strategic partnerships.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#17191A] hover:bg-[#F0EFEA] rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Connect With Leadership
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
