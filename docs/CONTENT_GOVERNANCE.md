# NexAgent Content Governance & Editorial Standard

**Document Version**: 1.0.0  
**Effective Date**: September 2026  
**Custodian**: NexAgent Systems Architecture Group & Editorial Governance Board  
**Classification**: Engineering & Operations Standard

---

## 1. Executive Summary & Purpose

NexAgent operates as an enterprise-grade artificial intelligence and autonomous systems engineering group. The NexAgent digital knowledge base and content ecosystem serve as an authoritative technical reference for enterprise buyers, systems architects, and research institutions.

This governance standard establishes non-negotiable guidelines for content authoring, technical verification, lifecycle transitions, citation rigor, and search discovery (SEO/GEO). Every piece of content published under `nexagent.ai` must conform to these principles.

---

## 2. Content Taxonomy & URL Routing Architecture

NexAgent organizes institutional knowledge into six discrete, typed entities. Every route follows an immutable canonical structure:

| Entity Type | URL Pattern | Content Schema | Primary Audience |
| :--- | :--- | :--- | :--- |
| **Technology** | `/technology/[slug]` | `TechnologyItem` | CTOs, VP Eng, Systems Architects |
| **Solutions** | `/solutions/[slug]` | `SolutionItem` | Line-of-Business Leaders, CIOs |
| **Industries** | `/industries/[slug]` | `IndustryItem` | Industry Ops Heads, Transformation Leaders |
| **Products** | `/products/[slug]` | `ProductItem` | Technical Buyers, Enterprise Architects |
| **Case Studies** | `/case-studies/[slug]` | `CaseStudyItem` | Executive Decision Makers, Procurement |
| **Insights** | `/insights/[slug]` | `InsightItem` | Applied AI Researchers, Systems Engineers |

### URL Rules:
1. Slugs must be lowercase, alphanumeric, hyphen-delimited (`kebab-case`).
2. Slugs must remain immutable once indexed to prevent link rot and preserve internal graph integrity.
3. If an entity slug must be altered, a permanent `301` HTTP redirect must be configured in `next.config.js`.

---

## 3. Lifecycle States & Access Controls

Every content asset within `src/content/` is strictly typed with both a **Lifecycle Status** and an operational **Readiness Status**.

### 3.1 Content Lifecycle (`ContentLifecycleStatus`)
- `DRAFT`: In-progress document. Accessible only in local/sandbox environments. Never rendered on public routes or indexed.
- `REVIEW`: Feature-complete draft undergoing architectural and claims validation.
- `PUBLISHED`: Verified and approved by the Governance Board. Exported via `getPublished*()`, crawled by search engines, included in `sitemap.xml`, and searchable via the Command Palette.
- `ARCHIVED`: Deprecated technical specifications. Retained with `noindex` or historical notices.

> [!IMPORTANT]
> Public production routes MUST exclusively call filtered accessors (`getPublishedTechnologies()`, `getPublishedSolutions()`, `getPublishedProducts()`, `getPublishedCaseStudies()`, `getPublishedInsights()`). Internal accessors (`getAll*()`) are strictly restricted to editorial preview tooling.

### 3.2 System Readiness (`ContentReadinessStatus`)
NexAgent distinguishes between production-proven capabilities and exploratory initiatives:
- `ACTIVE`: General Availability (GA) systems deployed in production environments.
- `IN DEVELOPMENT`: Fully scoped engineering initiatives with active sprint commitments and prototype harnesses.
- `EXPLORING`: R&D lab investigations, academic synthesis, and theoretical proofs of concept.
- `CONCEPT`: Strategic architectural visions not yet backed by active engineering pipelines.
- `ARCHIVED`: Legacy versions superseded by newer iterations.

All customer-facing components must visibly display the appropriate readiness badge (e.g., `<Badge variant="outline">IN DEVELOPMENT</Badge>`) to prevent misrepresenting roadmap features as deployed software.

---

## 4. Claims Verification & Anti-Fabrication Standards

NexAgent adheres to zero-tolerance engineering honesty. Fabricated claims, phantom client logos, and unverified benchmarks undermine institutional credibility and violate this governance policy.

### 4.1 Client Identification & Anonymity
- **Institutional Anonymity**: Unless a countersigned public case study agreement is executed, all enterprise implementations must be referred to by institutional descriptor rather than corporate trademarks (e.g., *"Tier-1 Regional Healthcare Network"*, *"Institutional Treasury Custodian"*).
- **Zero Stock Testimonials**: Generic corporate headshots, synthetic customer quotes, and unverified attribution are strictly prohibited.

### 4.2 Benchmark & Performance Rigor
- Every latency claim must define the operational envelope (e.g., *"sub-120ms p95 voice synthesis under 500 concurrent sessions"*).
- Throughput and accuracy metrics must state testing conditions, hardware accelerators, model versions, and evaluation datasets.
- Prohibited phrasing: *"Unlimited scaling"*, *"100% accuracy"*, *"Guaranteed 10x ROI in 30 days"*.

---

## 5. Authorship & Citation Protocols

### 5.1 Authorship Entities
Technical writing is credited to either:
1. **Institutional Research Units**: e.g., `NexAgent Systems Architecture Group`, `NexAgent Applied Intelligence Lab`.
2. **Identified Technical Leads**: Documented with verified titles, roles, and institutional affiliations.

### 5.2 Citation & RFC References
All technical architecture analyses, latency models, and consensus strategies must include academic or industry standard citations (`CitationSource`):
- **Standards**: IETF RFCs (e.g., RFC 8446 TLS 1.3, RFC 7540 HTTP/2).
- **Academic Papers**: Peer-reviewed conference papers or arXiv preprints with explicit author lists, publication venues, and DOIs.
- **Source Code / Benchmarks**: Public or auditable open-source references where applicable.

---

## 6. Semantic Web, SEO & GEO Optimization Standards

All content entities must optimize for both traditional search crawlers and Generative AI Search Engines (Perplexity, SearchGPT, Claude, Gemini).

### 6.1 Structured Data (JSON-LD)
Every route must render appropriate Schema.org structured metadata:
- Technology & Insight routes: `TechArticle` or `ScholarlyArticle` with author, publisher, datePublished, and citations.
- Product & Solution routes: `SoftwareApplication` or `Service` with operational features, security specifications, and provider.
- All pages: `BreadcrumbList` establishing hierarchical site depth.

### 6.2 Generative Engine Optimization (GEO)
To maximize authoritative citation in AI answer generation:
- Provide clear **Definitional Openings** within the first 150 words.
- Structure content with semantic tables, quantitative benchmarks, and step-by-step workflow diagrams.
- Include structured FAQ elements targeting high-intent architectural queries.

### 6.3 Semantic Cross-Linking
- Every entity must link to at least 2 relevant related items across differing content categories using `getRelatedContent()`.
- Orphaned content (content without incoming or outgoing contextual links) is blocked during validation builds.

---

## 7. Editorial Review & Merge Checklist

Before transitioning any document from `REVIEW` to `PUBLISHED`:

- [ ] **Type Compliance**: All TypeScript fields populated without runtime fallbacks.
- [ ] **Readiness Classification**: Verified against the actual engineering release cycle.
- [ ] **Benchmark Validation**: Latency and throughput figures validated against empirical test logs.
- [ ] **Anonymity Audit**: No unauthorized client trademarks or identifiable proprietary data.
- [ ] **Citations**: Minimum of 2 verified RFCs or peer-reviewed citations for insight papers.
- [ ] **Cross-Links**: Tested bidirectional resolution in `getRelatedContent()`.
- [ ] **Build Validation**: Clean execution of `npm run build` with static route pre-rendering.
- [ ] **OpenSEO Compliance**: 100/100 OpenSEO audit score verified via `scratch/verify_seo.js`.
