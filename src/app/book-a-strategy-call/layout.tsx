import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Strategy Call | Technical Consultation',
  description:
    'Schedule an executive technology consultation with NexAgent architects to diagnose operational friction and engineer automated business systems.',
  alternates: {
    canonical: '/book-a-strategy-call',
  },
  openGraph: {
    title: 'Book a Strategy Call | Technical Consultation | NexAgent',
    description:
      'Schedule an executive technology consultation with NexAgent architects to diagnose operational friction and engineer automated business systems.',
    url: 'https://nexagent.group/book-a-strategy-call',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Strategy Call | Technical Consultation | NexAgent',
    description:
      'Schedule an executive technology consultation with NexAgent architects to diagnose operational friction and engineer automated business systems.',
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
      name: 'Book a Strategy Call',
      item: 'https://nexagent.group/book-a-strategy-call',
    },
  ],
};

export default function BookStrategyCallLayout({ children }: { children: React.ReactNode }) {
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
