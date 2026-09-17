import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Model-010 | Autonomous Neural Runtime Engine',
  description:
    'Model-010 is NexAgent’s proprietary enterprise neural runtime engineered for deterministic workflow execution, 16-head sparse MoE routing, and sub-100ms inference.',
  alternates: {
    canonical: '/model-010',
  },
  openGraph: {
    title: 'Model-010 | Autonomous Neural Runtime Engine | NexAgent',
    description:
      'Model-010 is NexAgent’s proprietary enterprise neural runtime engineered for deterministic workflow execution, 16-head sparse MoE routing, and sub-100ms inference.',
    url: 'https://nexagent.group/model-010',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Model-010 | Autonomous Neural Runtime Engine | NexAgent',
    description:
      'Model-010 is NexAgent’s proprietary enterprise neural runtime engineered for deterministic workflow execution, 16-head sparse MoE routing, and sub-100ms inference.',
  },
};

const modelStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'Model-010',
          item: 'https://nexagent.group/model-010',
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Model-010 Neural Runtime',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud, Linux, Sovereign Bare-Metal',
      description:
        'Enterprise mixture-of-experts neural inference engine delivering deterministic workflow execution, sub-100ms latency, and mathematical safety guardrails.',
      author: {
        '@type': 'Organization',
        name: 'NexAgent',
        url: 'https://nexagent.group',
      },
    },
  ],
};

export default function Model010Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(modelStructuredData) }}
      />
      {children}
    </>
  );
}
