import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexagent.ai"),
  title: {
    default: "NexAgent — Building Intelligent Systems for the Businesses of the World",
    template: "%s | NexAgent"
  },
  description:
    "NexAgent is a founder-led technology company building AI-powered software, automation systems, intelligent business applications, and digital infrastructure.",
  keywords: [
    "AI automation",
    "AI automation company",
    "AI agents",
    "AI voice agents",
    "business automation",
    "workflow automation",
    "custom software development",
    "business intelligence",
    "systems integration",
    "CRM automation",
    "intelligent systems"
  ],
  authors: [{ name: "NexAgent" }],
  creator: "NexAgent",
  publisher: "NexAgent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexagent.ai",
    title: "NexAgent — Building Intelligent Systems for the Businesses of the World",
    description:
      "AI-powered software, custom business systems, automation pipelines, and scalable digital infrastructure for modern businesses.",
    siteName: "NexAgent",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "NexAgent Intelligent Systems"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NexAgent — Building Intelligent Systems for the Businesses of the World",
    description:
      "AI-powered software, custom business systems, automation pipelines, and scalable digital infrastructure.",
    images: ["/logo.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-surface-ground text-slate-900 selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
