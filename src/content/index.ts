import {
  TechnologyItem,
  SolutionItem,
  IndustryItem,
  ProductItem,
  CaseStudyItem,
  InsightItem,
} from './types';
import { technologies } from './technologies';
import { solutions } from './solutions';
import { industries } from './industries';
import { products } from './products';
import { caseStudies } from './case-studies';
import { insights } from './insights';

export * from './types';
export { technologies } from './technologies';
export { solutions } from './solutions';
export { industries } from './industries';
export { products } from './products';
export { caseStudies } from './case-studies';
export { insights } from './insights';

// ---------------------------------------------------------------------------
// PUBLISHED GETTERS (Lifecycle Guard: Only 'PUBLISHED' items are exposed)
// ---------------------------------------------------------------------------

export function getPublishedTechnologies(): TechnologyItem[] {
  return technologies.filter((t) => t.status === 'PUBLISHED');
}

export function getTechnologyBySlug(slug: string): TechnologyItem | undefined {
  return getPublishedTechnologies().find((t) => t.slug === slug);
}

export function getPublishedSolutions(): SolutionItem[] {
  return solutions.filter((s) => s.status === 'PUBLISHED');
}

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return getPublishedSolutions().find((s) => s.slug === slug);
}

export function getPublishedIndustries(): IndustryItem[] {
  return industries.filter((i) => i.status === 'PUBLISHED');
}

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return getPublishedIndustries().find((i) => i.slug === slug);
}

export function getPublishedProducts(): ProductItem[] {
  return products.filter((p) => p.status === 'PUBLISHED');
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return getPublishedProducts().find((p) => p.slug === slug);
}

export function getPublishedCaseStudies(): CaseStudyItem[] {
  return caseStudies.filter((c) => c.status === 'PUBLISHED');
}

export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  return getPublishedCaseStudies().find((c) => c.slug === slug);
}

export function getPublishedInsights(): InsightItem[] {
  return insights.filter((i) => i.status === 'PUBLISHED');
}

export function getInsightBySlug(slug: string): InsightItem | undefined {
  return getPublishedInsights().find((i) => i.slug === slug);
}

// ---------------------------------------------------------------------------
// BIDIRECTIONAL SEMANTIC CROSS-LINKING RESOLVER
// ---------------------------------------------------------------------------

export interface ResolvedRelatedContent {
  technologies: TechnologyItem[];
  solutions: SolutionItem[];
  industries: IndustryItem[];
  products: ProductItem[];
  caseStudies: CaseStudyItem[];
  insights: InsightItem[];
}

export function getRelatedContent(slugs: {
  techSlugs?: string[];
  solutionSlugs?: string[];
  industrySlugs?: string[];
  productSlugs?: string[];
  caseStudySlugs?: string[];
  insightSlugs?: string[];
}): ResolvedRelatedContent {
  const allTech = getPublishedTechnologies();
  const allSol = getPublishedSolutions();
  const allInd = getPublishedIndustries();
  const allProd = getPublishedProducts();
  const allCases = getPublishedCaseStudies();
  const allInsights = getPublishedInsights();

  const resolvedTech = (slugs.techSlugs || [])
    .map((s) => allTech.find((t) => t.slug === s))
    .filter((t): t is TechnologyItem => !!t);

  const resolvedSol = (slugs.solutionSlugs || [])
    .map((s) => allSol.find((sol) => sol.slug === s))
    .filter((sol): sol is SolutionItem => !!sol);

  const resolvedInd = (slugs.industrySlugs || [])
    .map((s) => allInd.find((i) => i.slug === s))
    .filter((i): i is IndustryItem => !!i);

  const resolvedProd = (slugs.productSlugs || [])
    .map((s) => allProd.find((p) => p.slug === s))
    .filter((p): p is ProductItem => !!p);

  const resolvedCases = (slugs.caseStudySlugs || [])
    .map((s) => allCases.find((c) => c.slug === s))
    .filter((c): c is CaseStudyItem => !!c);

  const resolvedInsights = (slugs.insightSlugs || [])
    .map((s) => allInsights.find((i) => i.slug === s))
    .filter((i): i is InsightItem => !!i);

  return {
    technologies: resolvedTech,
    solutions: resolvedSol,
    industries: resolvedInd,
    products: resolvedProd,
    caseStudies: resolvedCases,
    insights: resolvedInsights,
  };
}

// ---------------------------------------------------------------------------
// UNIFIED SEARCH ENGINE (Cross-Entity Index)
// ---------------------------------------------------------------------------

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'TECHNOLOGY' | 'SOLUTION' | 'INDUSTRY' | 'PRODUCT' | 'CASE STUDY' | 'INSIGHT';
  readiness?: string;
  category?: string;
}

export function searchAllContent(query: string): SearchResultItem[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();

  const results: SearchResultItem[] = [];

  // Technologies
  getPublishedTechnologies().forEach((t) => {
    if (
      t.name.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q) ||
      t.capabilities.some((c) => c.toLowerCase().includes(q))
    ) {
      results.push({
        id: t.id,
        title: t.name,
        description: t.shortDescription,
        href: `/technology/${t.slug}`,
        type: 'TECHNOLOGY',
        readiness: t.readiness,
        category: t.category,
      });
    }
  });

  // Solutions
  getPublishedSolutions().forEach((s) => {
    if (
      s.name.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.problem.toLowerCase().includes(q)
    ) {
      results.push({
        id: s.id,
        title: s.name,
        description: s.summary,
        href: `/solutions/${s.slug}`,
        type: 'SOLUTION',
        readiness: s.readiness,
        category: s.category,
      });
    }
  });

  // Industries
  getPublishedIndustries().forEach((i) => {
    if (
      i.name.toLowerCase().includes(q) ||
      i.overview.toLowerCase().includes(q) ||
      i.technologyApplications.some((ta) => ta.toLowerCase().includes(q))
    ) {
      results.push({
        id: i.id,
        title: i.name,
        description: i.overview,
        href: `/industries/${i.slug}`,
        type: 'INDUSTRY',
        readiness: i.readiness,
      });
    }
  });

  // Products
  getPublishedProducts().forEach((p) => {
    if (
      p.name.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.capabilities.some((c) => c.toLowerCase().includes(q))
    ) {
      results.push({
        id: p.id,
        title: p.name,
        description: p.summary,
        href: `/products/${p.slug}`,
        type: 'PRODUCT',
        readiness: p.readiness,
        category: p.category,
      });
    }
  });

  // Case Studies
  getPublishedCaseStudies().forEach((c) => {
    if (
      c.title.toLowerCase().includes(q) ||
      c.industry.toLowerCase().includes(q) ||
      c.outcome.toLowerCase().includes(q)
    ) {
      results.push({
        id: c.id,
        title: c.title,
        description: c.challenge,
        href: `/case-studies/${c.slug}`,
        type: 'CASE STUDY',
        readiness: c.readiness,
      });
    }
  });

  // Insights
  getPublishedInsights().forEach((ins) => {
    if (
      ins.title.toLowerCase().includes(q) ||
      ins.excerpt.toLowerCase().includes(q) ||
      ins.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        id: ins.id,
        title: ins.title,
        description: ins.excerpt,
        href: `/insights/${ins.slug}`,
        type: 'INSIGHT',
        readiness: ins.readiness,
        category: ins.category,
      });
    }
  });

  return results;
}
