import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexVentures | Technology Incubation & Strategic Capital',
  description:
    'NexVentures incubates and backs foundational software products, proprietary AI models, and next-generation operating platforms across AI, cloud, SaaS, and fintech.',
  alternates: {
    canonical: '/ventures',
  },
  openGraph: {
    title: 'NexVentures | Technology Incubation & Strategic Capital | NexAgent',
    description:
      'NexVentures incubates and backs foundational software products, proprietary AI models, and next-generation operating platforms across AI, cloud, SaaS, and fintech.',
    url: 'https://nexagent.group/ventures',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexVentures | Technology Incubation & Strategic Capital | NexAgent',
    description:
      'NexVentures incubates and backs foundational software products, proprietary AI models, and next-generation operating platforms across AI, cloud, SaaS, and fintech.',
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
      name: 'Ventures',
      item: 'https://nexagent.group/ventures',
    },
  ],
};

export default function VenturesLayout({ children }: { children: React.ReactNode }) {
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
