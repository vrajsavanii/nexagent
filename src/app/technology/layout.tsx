import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Architecture & Systems',
  description:
    'Discover the NexAgent technology architecture: autonomous agent runtimes, sovereign cloud infrastructure, high-throughput event meshes, and cryptographic trust systems.',
  alternates: {
    canonical: '/technology',
  },
  openGraph: {
    title: 'Technology Architecture & Systems | NexAgent',
    description:
      'Discover the NexAgent technology architecture: autonomous agent runtimes, sovereign cloud infrastructure, high-throughput event meshes, and cryptographic trust systems.',
    url: 'https://nexagent.group/technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Architecture & Systems | NexAgent',
    description:
      'Discover the NexAgent technology architecture: autonomous agent runtimes, sovereign cloud infrastructure, high-throughput event meshes, and cryptographic trust systems.',
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
      name: 'Technology',
      item: 'https://nexagent.group/technology',
    },
  ],
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
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
