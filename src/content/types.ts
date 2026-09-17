/**
 * NexAgent Content System & Information Architecture Types
 * Strict typed models for enterprise publishing, authority clusters, and semantic cross-linking.
 */

export type ContentLifecycleStatus = 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED';

export type ContentReadinessStatus =
  | 'ACTIVE'
  | 'IN_DEVELOPMENT'
  | 'EXPLORING'
  | 'CONCEPT'
  | 'ARCHIVED';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
}

export interface AuthorItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  avatarUrl?: string;
}

export interface CitationSource {
  title: string;
  publisher: string;
  url?: string;
  date?: string;
  type?: 'RFC' | 'Whitepaper' | 'Academic' | 'Industry Standard';
}

export interface WorkflowStage {
  step: string;
  name: string;
  description: string;
  systemLayer: 'Ingress & Perception' | 'Intelligence & Routing' | 'Execution & Automation' | 'Verification & Audit';
}

export interface TechnologyItem {
  id: string;
  slug: string;
  name: string;
  category: 'AI' | 'Infrastructure' | 'Runtime' | 'Automation' | 'Systems' | 'Software';
  shortDescription: string;
  description: string;
  whyItMatters: string;
  whatItEnables: string[];
  systemArchitecture: string[];
  capabilities: string[];
  applications: string[];
  relatedSolutions: string[];
  relatedIndustries: string[];
  relatedProducts: string[];
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  featured?: boolean;
  ctaText?: string;
  seo: SeoMetadata;
}

export interface SolutionItem {
  id: string;
  slug: string;
  name: string;
  category: 'Automation' | 'Intelligence' | 'Operations' | 'Integration';
  summary: string;
  problem: string;
  traditionalBreakdown: string[];
  approach: string;
  systemComponents: {
    name: string;
    description: string;
    badge: string;
  }[];
  workflows: WorkflowStage[];
  whoItIsFor: string[];
  industries: string[];
  relatedTechnology: string[];
  relatedProducts: string[];
  relatedCaseStudies?: string[];
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  ctaText?: string;
  seo: SeoMetadata;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  overview: string;
  operationalChallenges: string[];
  automationOpportunities: string[];
  aiOpportunities: string[];
  exampleWorkflows: {
    title: string;
    flow: string;
    outcome: string;
  }[];
  technologyApplications: string[];
  solutions: string[];
  relatedCaseStudies: string[];
  relatedInsights: string[];
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  ctaText?: string;
  seo: SeoMetadata;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: 'Neural Runtime' | 'Infrastructure Engine' | 'Event Fabric' | 'Developer SDK';
  isCustomSystem?: boolean; // false = NexAgent Product, true = NexAgent Custom System
  summary: string;
  description: string;
  capabilities: string[];
  useCases: string[];
  targetOrganizations: string[];
  relatedTechnology: string[];
  relatedSolutions: string[];
  documentationUrl?: string;
  demoUrl?: string;
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  ctaText?: string;
  seo: SeoMetadata;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientDescriptor: string; // e.g., "Tier-1 Healthcare Network (Confidential)"
  industry: string;
  challenge: string;
  system: string;
  automation: string;
  outcome: string;
  verifiedArchitecture: {
    latency?: string;
    throughput?: string;
    deploymentEnclave?: string;
    compliance?: string;
  };
  keyLessons: string[];
  relatedSolutions: string[];
  relatedTechnology: string[];
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  ctaText?: string;
  seo: SeoMetadata;
}

export interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface InsightSection {
  id: string;
  title: string;
  paragraphs: string[];
  callout?: {
    type: 'spec' | 'architecture' | 'framework';
    title: string;
    text: string;
  };
}

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  format: 'Technical Analysis' | 'Architecture Breakdown' | 'Operational Framework' | 'Engineering Guide';
  author: AuthorItem;
  publishedAt: string;
  updatedAt?: string;
  category: 'AI' | 'AI Agents' | 'Automation' | 'Cloud & Compute' | 'Engineering';
  tags: string[];
  readTimeMinutes: number;
  tableOfContents: TocItem[];
  sections: InsightSection[];
  relatedTechnology: string[];
  relatedSolutions: string[];
  relatedIndustries: string[];
  relatedProducts: string[];
  sources?: CitationSource[];
  status: ContentLifecycleStatus;
  readiness: ContentReadinessStatus;
  ctaText?: string;
  seo: SeoMetadata;
}
