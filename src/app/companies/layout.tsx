import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operating Companies & Strategic Holdings',
  description:
    'The NexAgent holding structure and operating portfolio across vertical AI platforms, autonomous software, voice intelligence, and enterprise business infrastructure.',
  alternates: {
    canonical: '/companies',
  },
  openGraph: {
    title: 'Operating Companies & Strategic Holdings | NexAgent',
    description:
      'The NexAgent holding structure and operating portfolio across vertical AI platforms, autonomous software, voice intelligence, and enterprise business infrastructure.',
    url: 'https://nexagent.group/companies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operating Companies & Strategic Holdings | NexAgent',
    description:
      'The NexAgent holding structure and operating portfolio across vertical AI platforms, autonomous software, voice intelligence, and enterprise business infrastructure.',
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
      name: 'Companies',
      item: 'https://nexagent.group/companies',
    },
  ],
};

export default function CompaniesLayout({ children }: { children: React.ReactNode }) {
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
