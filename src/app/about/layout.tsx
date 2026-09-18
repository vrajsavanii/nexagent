import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NexAgent | Autonomous Enterprise Systems',
  description:
    'Learn about NexAgent, founded by 2 technical co-founders building AI-powered software, deterministic automation systems, and digital infrastructure under the mandate to Build smarter, Grow faster.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NexAgent | Autonomous Enterprise Systems',
    description:
      'NexAgent was founded by 2 technical co-founders building AI-powered software, deterministic automation systems, and core digital infrastructure.',
    url: 'https://nexagent.group/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NexAgent | Autonomous Enterprise Systems',
    description:
      'NexAgent was founded by 2 technical co-founders building AI-powered software, deterministic automation systems, and core digital infrastructure.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://nexagent.group',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About NexAgent',
      item: 'https://nexagent.group/about',
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
