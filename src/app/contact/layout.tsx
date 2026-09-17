import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to NexAgent | Contact & Direct Inquiry',
  description:
    'Connect directly with the NexAgent technology team for project evaluations, enterprise partnerships, and technical inquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Talk to NexAgent | Contact & Direct Inquiry | NexAgent',
    description:
      'Connect directly with the NexAgent technology team for project evaluations, enterprise partnerships, and technical inquiries.',
    url: 'https://nexagent.group/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talk to NexAgent | Contact & Direct Inquiry | NexAgent',
    description:
      'Connect directly with the NexAgent technology team for project evaluations, enterprise partnerships, and technical inquiries.',
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
      name: 'Contact',
      item: 'https://nexagent.group/contact',
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
