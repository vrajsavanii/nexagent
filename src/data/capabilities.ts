export interface CapabilityLayer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: {
    title: string;
    description: string;
    features: string[];
    technicalDetails: string;
  }[];
}

export const CAPABILITY_LAYERS: CapabilityLayer[] = [
  {
    id: "intelligence",
    name: "01 / INTELLIGENCE",
    tagline: "Reasoning, contextual decision support, and agentic autonomy",
    description: "The cognitive tier that evaluates unstructured business inputs, extracts semantic intent, and determines system execution paths.",
    items: [
      {
        title: "AI Agents",
        description: "Autonomous software units configured to plan, select tools, and execute multi-step business objectives.",
        features: ["Goal decomposition", "Tool execution", "Memory management", "Self-correction loops"],
        technicalDetails: "Utilizes stateful orchestration graph engines with structured schema outputs and validation."
      },
      {
        title: "Voice AI Systems",
        description: "Low-latency conversational voice agents engineered for inbound inquiries, qualification, and appointment workflows.",
        features: ["Sub-500ms voice pipeline", "Real-time interruption handling", "Context extraction", "CRM synchronization"],
        technicalDetails: "Built on streaming WebSockets connecting neural speech-to-text, low-latency LLMs, and neural voice synthesis."
      },
      {
        title: "Conversational AI & Chatbots",
        description: "Context-aware conversational interfaces connected directly to internal knowledge bases and operational APIs.",
        features: ["Vector RAG search", "Document citations", "Multi-turn memory", "Human handoff triggers"],
        technicalDetails: "Hybrid semantic vector embeddings with re-ranking filters and token-optimized prompt assemblies."
      },
      {
        title: "Decision & Reasoning Engines",
        description: "Deterministic guardrails paired with probabilistic AI models to classify, score, and route complex inputs.",
        features: ["Entity extraction", "Confidence scoring", "Policy verification", "Automated escalation"],
        technicalDetails: "Type-safe JSON schema enforcement ensuring zero hallucinated parameters in business-critical paths."
      }
    ]
  },
  {
    id: "automation",
    name: "02 / AUTOMATION",
    tagline: "Bridging human actions into continuous, error-free system execution",
    description: "The execution engine turning manual, multi-system handoffs into instant automated events.",
    items: [
      {
        title: "Workflow Automation",
        description: "Event-triggered execution pipelines connecting CRM, email, databases, documents, and notifications.",
        features: ["Multi-branch logic", "State persistence", "Retry & error queues", "Audit logging"],
        technicalDetails: "Distributed job queues with idempotent execution and distributed tracing."
      },
      {
        title: "Business Process Automation (BPA)",
        description: "End-to-end automation of operational procedures across administrative, financial, and client-service operations.",
        features: ["Approval gates", "Role-based workflows", "SLA tracking", "Exception routing"],
        technicalDetails: "State machine architecture with asynchronous webhooks and automated escalation triggers."
      },
      {
        title: "Agentic Workflows",
        description: "Dynamic workflow graphs where AI agents evaluate interim outputs and conditionally choose subsequent tools.",
        features: ["Dynamic routing", "Multi-agent coordination", "Context preservation", "Human-in-the-loop approvals"],
        technicalDetails: "Directed Acyclic Graph (DAG) executors designed for high-concurrency throughput."
      }
    ]
  },
  {
    id: "applications",
    name: "03 / APPLICATIONS",
    tagline: "Unified interfaces designed for clarity, operational speed, and ease of use",
    description: "Custom software and unified operating portals built specifically around your organization's workflows.",
    items: [
      {
        title: "CRM & Business Management",
        description: "Bespoke operating systems uniting lead management, operational pipelines, team tasks, and client records.",
        features: ["Unified timeline", "Custom pipeline stages", "Automated activity logging", "Role-based access"],
        technicalDetails: "Next.js frontend with optimistic UI updates and real-time WebSocket syncing."
      },
      {
        title: "Custom Dashboards & BI",
        description: "Real-time telemetry and management views consolidating operational velocity and key business metrics.",
        features: ["Live telemetry feeds", "Interactive drill-downs", "Scheduled reporting", "Anomaly alerts"],
        technicalDetails: "High-performance vector rendering with optimized columnar database queries."
      },
      {
        title: "Custom Web & SaaS Software",
        description: "Engineered web platforms, customer portals, and internal enterprise tools built for security and scale.",
        features: ["Modern UI/UX", "Multi-tenant architecture", "Robust auth systems", "Responsive design"],
        technicalDetails: "Modern TypeScript full-stack architecture with containerized deployment."
      }
    ]
  },
  {
    id: "infrastructure",
    name: "04 / INFRASTRUCTURE",
    tagline: "Resilient digital plumbing engineered for high uptime and rapid data flow",
    description: "Cloud backends, microservices, databases, and secure APIs connecting disparate enterprise software.",
    items: [
      {
        title: "Cloud Architecture",
        description: "Scalable cloud infrastructure utilizing modern serverless and containerized deployment standards.",
        features: ["Auto-scaling capacity", "Zero-downtime rollouts", "Encrypted storage", "Regional routing"],
        technicalDetails: "Cloud-agnostic IaC templates targeting AWS, GCP, Azure, or Cloudflare edge networks."
      },
      {
        title: "API Engineering & Gateways",
        description: "High-throughput REST and GraphQL endpoints connecting legacy internal databases with modern AI tools.",
        features: ["Rate limiting", "Payload caching", "JWT/OAuth2 auth", "OpenAPI schemas"],
        technicalDetails: "Edge-computed API middleware with sub-millisecond route dispatching."
      },
      {
        title: "Systems Integration",
        description: "Seamless integration between CRM, ERP, finance tools, communication platforms, and proprietary databases.",
        features: ["Bi-directional sync", "Conflict resolution", "Transformation pipelines", "Webhook listeners"],
        technicalDetails: "Guaranteed delivery message brokers with automatic deduplication."
      }
    ]
  },
  {
    id: "data",
    name: "05 / DATA & INTELLIGENCE",
    tagline: "Transforming fragmented information into structured, actionable intelligence",
    description: "Data pipelines that extract, normalize, and synthesize documents and transactional records for operational use.",
    items: [
      {
        title: "Document Workflow Automation",
        description: "Intelligent extraction and parsing of complex business documents into structured database records.",
        features: ["OCR & layout analysis", "Key-value extraction", "Schema validation", "Review workflows"],
        technicalDetails: "Multimodal vision-language models with confidence scoring and human verification flags."
      },
      {
        title: "Business Intelligence & Analytics",
        description: "Synthesizing raw operational activity into clear historical patterns and forward-looking operational indicators.",
        features: ["Cross-system aggregation", "Custom metric calculation", "Executive summaries", "Automated audits"],
        technicalDetails: "Optimized analytical pipelines translating relational schemas into clear executive digests."
      }
    ]
  }
];
