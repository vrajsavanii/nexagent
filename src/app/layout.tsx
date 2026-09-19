import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { ScrollProgressBar } from '@/components/MotionWrapper';
import AttributionTracker from '@/components/AttributionTracker';
import MobileBottomCta from '@/components/MobileBottomCta';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexagent.group'),
  title: {
    default: 'NexAgent | AI, Automation & Intelligent Business Technology',
    template: '%s | NexAgent',
  },
  description:
    'NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology for organizations of every scale.',
  keywords: [
    'NexAgent',
    'AI automation',
    'AI agents',
    'AI agent development',
    'business automation',
    'workflow automation',
    'custom AI solutions',
    'AI software development',
    'conversational AI',
    'voice AI agents',
    'sales automation',
    'marketing automation',
    'custom business software',
    'cloud infrastructure',
    'enterprise automation',
    'intelligent business technology',
  ],
  authors: [{ name: 'NexAgent' }],
  creator: 'NexAgent',
  publisher: 'NexAgent',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NexAgent | AI, Automation & Intelligent Business Technology',
    description:
      'NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology for organizations of every scale.',
    url: 'https://nexagent.group',
    siteName: 'NexAgent',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexAgent | AI, Automation & Intelligent Business Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent | AI, Automation & Intelligent Business Technology',
    description:
      'NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology for organizations of every scale.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logo.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const rootStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nexagent.group/#organization',
      name: 'NexAgent',
      url: 'https://nexagent.group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexagent.group/images/logo.jpeg',
        caption: 'NexAgent',
      },
      description:
        'NexAgent is a founder-led technology company that builds AI-powered software, automation systems, and digital infrastructure helping businesses reduce manual work, connect workflows, and scale operations.',
      slogan: 'AI-Powered Technology for Businesses That Want to Operate Better.',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'AI Agents',
        'Workflow Automation',
        'Business Process Automation',
        'Custom Software Development',
        'Enterprise SaaS',
        'Conversational Voice AI',
        'Cloud Infrastructure',
        'Business Intelligence',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nexagent.group/#website',
      url: 'https://nexagent.group',
      name: 'NexAgent',
      description:
        'NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology for organizations of every scale.',
      publisher: {
        '@id': 'https://nexagent.group/#organization',
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=JetBrains+Mono:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
        {/* WCAG 2.4.1 Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#17191A] focus:text-[#F7F7F5] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:rounded focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9E7B78]"
        >
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Header />
        <main id="main-content" className="w-full pt-20 bg-surface flex-grow focus:outline-none">{children}</main>
        <Footer />
        <CommandPalette />
        <AttributionTracker />
        <MobileBottomCta />
      </body>
    </html>
  );
}
