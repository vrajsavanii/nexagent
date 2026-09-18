import { MetadataRoute } from 'next';
import {
  getPublishedTechnologies,
  getPublishedSolutions,
  getPublishedIndustries,
  getPublishedProducts,
  getPublishedInsights,
} from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexagent.group';
  const currentDate = new Date().toISOString();

  // Core Pages
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/technology', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/insights', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/book-a-strategy-call', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  // Dynamic Content Routes (Only status === 'PUBLISHED')
  const techRoutes = getPublishedTechnologies().map((t) => ({
    path: `/technology/${t.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const solutionRoutes = getPublishedSolutions().map((s) => ({
    path: `/solutions/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const industryRoutes = getPublishedIndustries().map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const productRoutes = getPublishedProducts().map((p) => ({
    path: `/products/${p.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const insightRoutes = getPublishedInsights().map((ins) => ({
    path: `/insights/${ins.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    lastModified: ins.updatedAt || ins.publishedAt,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...techRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...insightRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: (route as any).lastModified || currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
