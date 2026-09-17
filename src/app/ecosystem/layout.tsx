import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Ecosystem & Interconnected Mesh',
  description:
    'An interconnected technology ecosystem uniting autonomous compute alliances, enterprise systems of record, low-latency voice meshes, and developer SDKs.',
  alternates: {
    canonical: '/ecosystem',
  },
  openGraph: {
    title: 'Technology Ecosystem & Interconnected Mesh | NexAgent',
    description:
      'An interconnected technology ecosystem uniting autonomous compute alliances, enterprise systems of record, low-latency voice meshes, and developer SDKs.',
    url: 'https://nexagent.group/ecosystem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Ecosystem & Interconnected Mesh | NexAgent',
    description:
      'An interconnected technology ecosystem uniting autonomous compute alliances, enterprise systems of record, low-latency voice meshes, and developer SDKs.',
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
      name: 'Ecosystem',
      item: 'https://nexagent.group/ecosystem',
    },
  ],
};

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
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
