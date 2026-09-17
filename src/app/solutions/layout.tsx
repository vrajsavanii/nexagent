import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation & Intelligent Solutions',
  description:
    'Explore NexAgent solutions across autonomous AI agents, workflow automation, custom enterprise software, voice AI, sales automation, and sovereign cloud infrastructure.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'AI Automation & Intelligent Solutions | NexAgent',
    description:
      'Explore NexAgent solutions across autonomous AI agents, workflow automation, custom enterprise software, voice AI, sales automation, and sovereign cloud infrastructure.',
    url: 'https://nexagent.group/solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & Intelligent Solutions | NexAgent',
    description:
      'Explore NexAgent solutions across autonomous AI agents, workflow automation, custom enterprise software, voice AI, sales automation, and sovereign cloud infrastructure.',
  },
};

const solutionsStructuredData = {
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
          name: 'Solutions',
          item: 'https://nexagent.group/solutions',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'AI Automation Solutions',
      provider: {
        '@type': 'Organization',
        name: 'NexAgent',
        url: 'https://nexagent.group',
      },
      serviceType: 'AI Automation, Workflow Automation & Business Operating Systems',
      description:
        'End-to-end intelligent automation connecting AI agents, enterprise software, and cloud workflows into unified operating architectures.',
      areaServed: ['United States', 'United Kingdom', 'United Arab Emirates', 'India', 'Global'],
    },
    {
      '@type': 'Service',
      name: 'Custom AI Agent Development',
      provider: {
        '@type': 'Organization',
        name: 'NexAgent',
        url: 'https://nexagent.group',
      },
      serviceType: 'Autonomous AI Agent Engineering',
      description:
        'Goal-directed AI agents capable of reasoning, executing complex business logic, invoking external APIs, and managing operational workflows.',
      areaServed: ['United States', 'United Kingdom', 'United Arab Emirates', 'India', 'Global'],
    },
  ],
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsStructuredData) }}
      />
      {children}
    </>
  );
}
