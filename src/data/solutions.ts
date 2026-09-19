export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  typicalApplications: string[];
  architectureSteps: {
    stage: string;
    description: string;
  }[];
  engineeringHighlights: string[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "business-automation",
    slug: "business-automation",
    title: "AI-Powered Business Automation",
    shortDescription: "Eliminate repetitive tasks, bridge disconnected applications, and streamline daily operational handoffs.",
    problem: "Operational teams spend substantial hours copying data between disparate tools, chasing approvals manually, and managing repetitive status updates across email, chat, and spreadsheets.",
    approach: "We design and build event-driven automation pipelines that link your software systems, trigger multi-step actions automatically, and flag edge cases for human review without stalling operations.",
    typicalApplications: [
      "Cross-system data synchronization",
      "Multi-stage internal approval workflows",
      "Document ingestion and processing pipelines",
      "Automated exception flagging and escalation",
      "Operational status reporting across teams"
    ],
    architectureSteps: [
      { stage: "Event Trigger", description: "Webhook or scheduled polling detects new operational event" },
      { stage: "Validation & Parse", description: "Payload is normalized and verified against system schema" },
      { stage: "Intelligent Routing", description: "Decision rules or AI classifier assigns priority and route" },
      { stage: "Cross-System Action", description: "API dispatch executes updates in CRM, ERP, and communication tools" },
      { stage: "Audit & Confirmation", description: "Transaction is logged to central dashboard with full audit trail" }
    ],
    engineeringHighlights: ["Idempotent execution to prevent duplicate transactions", "Configurable retry logic with exponential backoff", "Human-in-the-loop exception fallbacks"]
  },
  {
    id: "sales-automation",
    slug: "sales-automation",
    title: "AI Sales Automation",
    shortDescription: "Accelerate pipeline velocity through automated lead qualification, research enrichment, and disciplined follow-up.",
    problem: "Sales representatives lose valuable selling hours on manual prospect research, data entry in CRM systems, and tracking follow-up intervals across multiple communication channels.",
    approach: "We engineer intelligent sales pipelines that automatically enrich inbound prospects with verifiable business data, score fit based on your criteria, and coordinate timely follow-up workflows.",
    typicalApplications: [
      "Inbound lead qualification and scoring",
      "Automated firmographic and demographic enrichment",
      "CRM pipeline updates and stage progression",
      "Automated follow-up scheduling and reminders",
      "Sales meeting preparation briefing notes"
    ],
    architectureSteps: [
      { stage: "Inbound Capture", description: "Lead details captured via website, form, or inbound channel" },
      { stage: "Data Enrichment", description: "Automated lookup fetches verified company profile and size" },
      { stage: "Qualification Engine", description: "Deterministic criteria score buyer fit and intent level" },
      { stage: "CRM Dispatch", description: "Lead record created, categorized, and assigned to representative" },
      { stage: "Workflow Initiation", description: "Personalized sequence queued and calendar link dispatched" }
    ],
    engineeringHighlights: ["Zero revenue guarantees; focus on operational discipline", "Customizable qualification scorecards", "Direct synchronization with leading CRMs"]
  },
  {
    id: "marketing-automation",
    slug: "marketing-automation",
    title: "AI Marketing Automation",
    shortDescription: "Unify campaign operations, dynamic customer segmentation, and lifecycle nurturing workflows.",
    problem: "Marketing teams face fragmented campaign data, manual list segmentation, and delayed customer touchpoints that break the continuity of prospect engagement.",
    approach: "We build integrated marketing operations systems that react dynamically to user signals, segment audiences with precision, and automate multi-channel communication journeys.",
    typicalApplications: [
      "Dynamic customer lifecycle segmentation",
      "Automated multi-stage email workflows",
      "Campaign performance aggregation dashboards",
      "Form attribution and conversion tracking",
      "Content publishing operations and review gates"
    ],
    architectureSteps: [
      { stage: "Behavior Signal", description: "User actions on website, app, or email trigger event log" },
      { stage: "Segment Evaluation", description: "Real-time query assigns user to appropriate lifecycle cohort" },
      { stage: "Workflow Coordination", description: "Next action calculated based on cadence and past interaction" },
      { stage: "Channel Dispatch", description: "Personalized messaging dispatched across email or SMS gateways" },
      { stage: "Metric Recording", description: "Engagement signals piped to central reporting dashboard" }
    ],
    engineeringHighlights: ["Granular opt-out and compliance handling", "Multi-touch attribution logging", "High-throughput event queueing"]
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    title: "Autonomous AI Agents",
    shortDescription: "Deploy specialized software agents capable of reasoning, utilizing tools, and executing multi-step goals.",
    problem: "Complex administrative and analytical tasks require multiple steps, tool switches, and contextual evaluations that rigid, rule-based scripts cannot handle.",
    approach: "We develop focused AI agents with bounded domain knowledge, clear tool execution permissions, and strict safety guardrails to plan and complete procedural workflows autonomously.",
    typicalApplications: [
      "Multi-step information synthesis and research",
      "Automated discrepancy reconciliation between systems",
      "Scheduled data verification and reporting checks",
      "Tool-assisted operations for customer care teams",
      "Operational queue triage and resolution"
    ],
    architectureSteps: [
      { stage: "Goal Input", description: "Structured task objective submitted by user or system trigger" },
      { stage: "Plan Decomposition", description: "Agent creates step-by-step execution roadmap" },
      { stage: "Tool Invocation", description: "Agent executes approved APIs, queries, and file parsers" },
      { stage: "Validation Loop", description: "Outputs evaluated against expected constraints and schemas" },
      { stage: "Final Resolution", description: "Completed result delivered with verifiable reference audit" }
    ],
    engineeringHighlights: ["Strict sandboxed tool permissions", "Defensive JSON schema validation", "Human intervention breakpoints"]
  },
  {
    id: "voice-ai",
    slug: "voice-ai",
    title: "AI Voice Agents",
    shortDescription: "Low-latency, natural conversational voice agents for inbound inquiries and appointment routing.",
    problem: "Front-desk and support lines suffer from missed calls during peak hours, repetitive informational inquiries, and slow manual appointment booking.",
    approach: "We engineer natural conversational voice systems designed for specific business operations—capable of understanding accents, handling interruptions, and securely updating back-office software.",
    typicalApplications: [
      "After-hours inbound call handling",
      "Appointment scheduling, cancellation, and rescheduling",
      "Front-office call triage and department routing",
      "Pre-qualification intake for professional services",
      "Automated customer service status inquiries"
    ],
    architectureSteps: [
      { stage: "Call Ingestion", description: "SIP / telephony connection streams audio over low-latency WebSockets" },
      { stage: "Speech to Text", description: "Streaming neural transcription converts speech with sub-150ms latency" },
      { stage: "Reasoning & Tools", description: "Contextual engine processes inquiry and checks calendar/database APIs" },
      { stage: "Neural Voice TTS", description: "Natural vocal response synthesized and streamed to caller" },
      { stage: "Post-Call Sync", description: "Call recording, transcription, and updated records saved to CRM" }
    ],
    engineeringHighlights: ["No claims of universal human replacement", "Deterministic fallback to live staff", "Strict privacy and voice record policies"]
  },
  {
    id: "ai-assistants",
    slug: "ai-assistants",
    title: "AI Chatbots & Intelligent Assistants",
    shortDescription: "Accurate conversational interfaces grounded in verified company documentation and live system data.",
    problem: "Employees and customers waste time searching through dense documentation wikis, fragmented PDFs, and disconnected customer portal pages.",
    approach: "We build conversational assistants using Retrieval-Augmented Generation (RAG) that reference verified corporate knowledge to deliver instant, cited, and accurate answers.",
    typicalApplications: [
      "Internal employee knowledge and SOP search",
      "Customer self-service support portals",
      "Complex product catalog navigation",
      "Onboarding and training support bots",
      "Operational policy verification"
    ],
    architectureSteps: [
      { stage: "Query Ingestion", description: "User submits question via embedded web component or messaging app" },
      { stage: "Semantic Retrieval", description: "Vector search queries indexed internal documentation chunks" },
      { stage: "Re-ranking & Context", description: "Most relevant passages assembled with strict boundary constraints" },
      { stage: "Grounded Response", description: "Model generates answer citing exact source documents" },
      { stage: "Feedback & Escalation", description: "User rates answer; complex queries routed to human support" }
    ],
    engineeringHighlights: ["Strict grounding to eliminate unverified claims", "Role-based document access restrictions", "Comprehensive query latency monitoring"]
  },
  {
    id: "business-systems",
    slug: "business-systems",
    title: "CRM & Custom Business Systems",
    shortDescription: "Bespoke operational backbones tailored to your exact team hierarchy, workflows, and business model.",
    problem: "Off-the-shelf CRM and ERP platforms often force businesses into rigid workflows, require expensive third-party add-ons, and leave operational gaps between departments.",
    approach: "We design and build bespoke business management systems with intuitive UI, custom pipeline stages, automated data logging, and seamless integrations built around how you actually operate.",
    typicalApplications: [
      "Unified client and project management portals",
      "Tailored sales pipeline tracking",
      "Internal task management and dispatch boards",
      "Automated client onboarding portals",
      "Role-specific operational workspaces"
    ],
    architectureSteps: [
      { stage: "Data Modeling", description: "Relational database schema designed to mirror business entities" },
      { stage: "Role & Permission Layer", description: "Granular access control defined for executives, managers, and staff" },
      { stage: "UI/UX Engineering", description: "Fast, responsive web interface built for daily operational clarity" },
      { stage: "Automated Triggers", description: "Stage transitions trigger automated notifications and task dispatch" },
      { stage: "Analytics Integration", description: "Live operational metrics feed directly into management views" }
    ],
    engineeringHighlights: ["Optimized for high data density and quick keyboard entry", "Responsive across desktop and mobile browsers", "Full ownership of business data"]
  },
  {
    id: "business-intelligence",
    slug: "business-intelligence",
    title: "AI Dashboards & Business Intelligence",
    shortDescription: "Turn scattered operational records into real-time visual telemetry, trend analysis, and actionable insights.",
    problem: "Management teams rely on delayed end-of-month spreadsheets and siloed reports that conceal operational bottlenecks until it is too late to react.",
    approach: "We engineer real-time intelligence dashboards that continuously aggregate metrics across sales, support, finance, and operations into clean, intuitive command centers.",
    typicalApplications: [
      "Executive management command centers",
      "Operational pipeline and throughput telemetry",
      "Customer support SLA and response monitoring",
      "Financial overview and revenue tracking",
      "Workflow bottleneck and error rate analysis"
    ],
    architectureSteps: [
      { stage: "Data Extraction", description: "Scheduled pipelines pull transactional logs from all active systems" },
      { stage: "Normalization & Warehousing", description: "Data sanitized and stored in high-performance columnar store" },
      { stage: "Aggregation Querying", description: "Fast indexed views calculate key operational indicators" },
      { stage: "Visual Telemetry", description: "Interactive charts and tables render metrics with sub-second responsiveness" },
      { stage: "Automated Alerts", description: "Threshold breaches dispatch instant alerts to team channels" }
    ],
    engineeringHighlights: ["Sub-second dashboard query performance", "Exportable compliance and audit reports", "No misleading vanity metrics"]
  },
  {
    id: "documentation-automation",
    slug: "documentation-automation",
    title: "Documentation Workflow Automation",
    shortDescription: "Extract data, structure records, and automate administrative paperwork with high precision.",
    problem: "Highly regulated and administrative sectors (such as healthcare and logistics) spend unsustainable hours manually re-typing forms, summarizing notes, and auditing records.",
    approach: "We deploy multimodal extraction systems that convert unstructured documents, scanned forms, and meeting recordings into verified database records with strict human verification gates.",
    typicalApplications: [
      "Administrative record transcription and structuring",
      "Invoice and receipts processing pipelines",
      "Compliance audit paperwork preparation",
      "Standard operating procedure drafting",
      "Contract and agreement metadata extraction"
    ],
    architectureSteps: [
      { stage: "Document Capture", description: "PDF, scan, or digital document uploaded to secure pipeline" },
      { stage: "OCR & Multimodal Parsing", description: "Vision algorithms extract layout, tables, and handwritten fields" },
      { stage: "Schema Validation", description: "Extracted fields matched against strict regulatory schemas" },
      { stage: "Human Review Gate", description: "Low-confidence fields highlighted for rapid staff confirmation" },
      { stage: "System Update", description: "Verified records written directly to destination database or ERP" }
    ],
    engineeringHighlights: ["Explicit disclaimers: no autonomous medical or legal diagnosis", "Confidence scoring for every extracted field", "Audit trail of all manual verifications"]
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Engineering",
    shortDescription: "High-performance web applications, enterprise SaaS platforms, and internal tools built to institutional standards.",
    problem: "Generic SaaS tools are often either too rigid to adapt to proprietary business processes or too bloated with irrelevant features that hinder team velocity.",
    approach: "We engineer production-grade custom software—from client-facing portals to internal workflow systems—built with modern TypeScript, scalable backends, and clean UI design.",
    typicalApplications: [
      "Client portals and self-service accounts",
      "Internal operational platforms",
      "Multi-tenant SaaS products",
      "B2B marketplace and ordering systems",
      "Proprietary computation and simulation engines"
    ],
    architectureSteps: [
      { stage: "Requirements Architecture", description: "User journeys, system boundaries, and security models mapped" },
      { stage: "Full-Stack Development", description: "Modern React/Next.js frontend engineered alongside robust APIs" },
      { stage: "Security Hardening", description: "Authentication, role authorization, and encryption verified" },
      { stage: "Automated Testing", description: "Unit, integration, and end-to-end regression suites validated" },
      { stage: "Continuous Deployment", description: "Zero-downtime release pipeline configured for ongoing iteration" }
    ],
    engineeringHighlights: ["Clean, documented TypeScript codebases", "Full client IP ownership upon delivery", "Modern modular architecture"]
  },
  {
    id: "cloud-systems",
    slug: "cloud-systems",
    title: "Cloud & Digital Infrastructure",
    shortDescription: "Scalable backends, microservices, databases, and deployment systems engineered for stability and uptime.",
    problem: "Growing businesses outgrow shared web hosting, fragile servers, and unmonitored scripts that create single points of failure and security risks.",
    approach: "We design resilient cloud architectures on leading hyperscalers (AWS, GCP, Cloudflare) with automated backups, load balancing, and comprehensive observability.",
    typicalApplications: [
      "Containerized microservices and API gateways",
      "Serverless event-driven processing pipelines",
      "Relational and vector database clustering",
      "Automated CI/CD deployment pipelines",
      "Infrastructure telemetry, monitoring, and alerting"
    ],
    architectureSteps: [
      { stage: "Topology Design", description: "Cloud infrastructure architected for fault tolerance and cost efficiency" },
      { stage: "Infrastructure as Code", description: "Environments provisioned via declarative configuration" },
      { stage: "Database Optimization", description: "Indexing, read replicas, and backup retention policies established" },
      { stage: "Telemetry & Logs", description: "Centralized logging, uptime pinging, and APM tracing configured" },
      { stage: "Disaster Recovery", description: "Automated failover and point-in-time recovery tested" }
    ],
    engineeringHighlights: ["Zero claims of proprietary hyperscaler infrastructure", "Focus on proven cloud engineering standards", "Cost optimization and right-sizing"]
  },
  {
    id: "systems-integration",
    slug: "systems-integration",
    title: "Enterprise Systems Integration",
    shortDescription: "Make disconnected legacy databases, SaaS platforms, and modern AI models communicate seamlessly.",
    problem: "Enterprises run on a mosaic of software—legacy ERPs, modern marketing platforms, specialized industry tools—that do not natively share information.",
    approach: "We build reliable middleware connectors, webhook orchestrators, and data translation pipelines that synchronize information bi-directionally without disrupting existing tools.",
    typicalApplications: [
      "Legacy ERP to modern CRM data bridges",
      "Billing gateway to accounting ledger sync",
      "Communication platform bot integrations (Slack, Teams, WhatsApp)",
      "Multi-vendor inventory and catalog synchronization",
      "Third-party API webhook ingestion and routing"
    ],
    architectureSteps: [
      { stage: "API & Data Audit", description: "Schemas, rate limits, and authentication protocols inspected" },
      { stage: "Middleware Bus", description: "Event-driven broker deployed to decouple system dependencies" },
      { stage: "Data Mapping & Transform", description: "Payload schemas translated and validated bi-directionally" },
      { stage: "Queue & Deduplication", description: "Guaranteed delivery queues ensure zero lost transactions" },
      { stage: "Health Telemetry", description: "Live monitoring of throughput, latency, and error rates" }
    ],
    engineeringHighlights: ["Defensive schema translation", "Automatic deduplication and dead-letter queues", "Non-invasive integration with legacy backends"]
  }
];
