import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexAgent Core | Real-Time 3D Brand Engine & WebGL Lab',
  description:
    'Technical architecture of the NexAgent Core 3D engine: real-time Three.js rendering, physical shaders, and responsive mathematical framing.',
  alternates: {
    canonical: '/core',
  },
  openGraph: {
    title: 'NexAgent Core | Real-Time 3D Brand Engine & WebGL Lab | NexAgent',
    description:
      'Technical architecture of the NexAgent Core 3D engine: real-time Three.js rendering, physical shaders, and responsive mathematical framing.',
    url: 'https://nexagent.group/core',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent Core | Real-Time 3D Brand Engine & WebGL Lab | NexAgent',
    description:
      'Technical architecture of the NexAgent Core 3D engine: real-time Three.js rendering, physical shaders, and responsive mathematical framing.',
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
      name: 'Core Lab',
      item: 'https://nexagent.group/core',
    },
  ],
};

export default function CoreLayout({ children }: { children: React.ReactNode }) {
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
