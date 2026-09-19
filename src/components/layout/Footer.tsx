import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    technology: [
      { name: "AI & Intelligence", href: "/technology#intelligence" },
      { name: "Workflow Automation", href: "/technology#automation" },
      { name: "Autonomous AI Agents", href: "/technology#agents" },
      { name: "Voice AI Telephony", href: "/technology#voice" },
      { name: "Custom Software", href: "/technology#software" },
      { name: "Cloud Infrastructure", href: "/technology#cloud" },
      { name: "Systems Integration", href: "/technology#integration" }
    ],
    solutions: [
      { name: "Business Automation", href: "/solutions#business-automation" },
      { name: "Sales Automation", href: "/solutions#sales-automation" },
      { name: "Marketing Automation", href: "/solutions#marketing-automation" },
      { name: "AI Chatbots & RAG", href: "/solutions#ai-assistants" },
      { name: "CRM & Management", href: "/solutions#business-systems" },
      { name: "Business Intelligence", href: "/solutions#business-intelligence" },
      { name: "Documentation Automation", href: "/solutions#documentation-automation" }
    ],
    industries: [
      { name: "Healthcare Technology", href: "/industries#healthcare" },
      { name: "Hospitality & Guest Ops", href: "/industries#hospitality" },
      { name: "B2B & Enterprise Services", href: "/industries#b2b" },
      { name: "Retail & Commerce", href: "/industries#retail" },
      { name: "Professional Services", href: "/industries#professional-services" },
      { name: "Financial Technology", href: "/industries#financial-technology" }
    ],
    company: [
      { name: "About NexAgent", href: "/about" },
      { name: "Founders & Ownership", href: "/about#founders" },
      { name: "How We Work", href: "/about#process" },
      { name: "Global Ambition", href: "/about#global" },
      { name: "Contact Team", href: "/contact" },
      { name: "Book Strategy Call", href: "/strategy-call" }
    ],
    resources: [
      { name: "Insights & Articles", href: "/insights" },
      { name: "Product Portfolio", href: "/products" },
      { name: "Frequently Asked Questions", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Use", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" }
    ]
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-14 border-b border-slate-100">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-6">
            <Logo size="lg" />
            <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-sm mt-1">
              AI-powered technology, software, and automation systems for modern businesses. Built to reduce operational friction and connect complex workflows.
            </p>
            <div className="flex flex-col gap-1.5 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-medium">
                Founding Structure
              </span>
              <p className="font-sans text-xs text-slate-500">
                Founder-led technology company founded & owned equally by two co-founders.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-medium">
                Initial Commercial Focus
              </span>
              <p className="font-sans text-xs text-slate-500">
                United States • United Kingdom • United Arab Emirates • India
              </p>
            </div>
          </div>

          {/* Technology */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Technology
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.technology.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Industries
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100">
                <Link
                  href="/faq"
                  className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="font-sans text-xs sm:text-sm text-slate-600 hover:text-brand-800 transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-500 text-center sm:text-left">
            © {currentYear} NexAgent. Built for the long term. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms of Use
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/cookies" className="hover:text-slate-800 transition-colors">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
