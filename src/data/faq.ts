export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Overview" | "Capabilities" | "Engagement" | "Operations";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "what-does-nexagent-do",
    question: "What does NexAgent do?",
    answer: "NexAgent is a technology company that builds AI-powered software, automation systems, intelligent business applications, and digital infrastructure. We partner with businesses to diagnose operational bottlenecks, automate repetitive workflows, build custom software platforms, and integrate disconnected systems into cohesive operating environments.",
    category: "Overview"
  },
  {
    id: "who-does-nexagent-work-with",
    question: "Who does NexAgent work with?",
    answer: "We work with organizations across different stages of growth—ranging from ambitious growing businesses seeking to automate their initial operational workflows to established enterprises modernizing legacy software stacks, customer communication pipelines, and back-office operations.",
    category: "Overview"
  },
  {
    id: "does-nexagent-work-with-small-businesses",
    question: "Does NexAgent work with small businesses?",
    answer: "Yes. NexAgent works on focused automation projects such as single-workflow automation, lead qualification pipelines, or customer communication assistants. Our engineering approach is modular, allowing businesses to start with a high-friction bottleneck and expand as their operational demands scale.",
    category: "Engagement"
  },
  {
    id: "does-nexagent-work-with-enterprises",
    question: "Does NexAgent work with enterprises?",
    answer: "Yes. For larger organizations, we architect and engineer scalable digital infrastructure, custom internal software platforms, high-throughput systems integration brokers, and specialized AI agent pipelines with enterprise-grade data security and strict audit logging.",
    category: "Engagement"
  },
  {
    id: "can-nexagent-build-custom-software",
    question: "Can NexAgent build custom software?",
    answer: "Yes. Custom software engineering is one of our foundational capabilities. We engineer modern web applications, bespoke CRM and business management systems, executive analytics dashboards, multi-tenant SaaS applications, and secure REST/GraphQL API backends using modern TypeScript and cloud architectures.",
    category: "Capabilities"
  },
  {
    id: "can-nexagent-build-ai-agents",
    question: "Can NexAgent build AI agents?",
    answer: "Yes. We develop autonomous AI agents designed with bounded domain contexts, explicit tool-calling permissions, and deterministic safety guardrails. These agents plan, retrieve data, invoke internal APIs, and complete complex multi-step procedural tasks autonomously or with human review checkpoints.",
    category: "Capabilities"
  },
  {
    id: "can-nexagent-build-voice-ai",
    question: "Can NexAgent build voice AI?",
    answer: "Yes. We build business-specific conversational voice systems engineered for sub-500ms latency, natural interruption handling, and direct integration with your scheduling tools and CRM databases. Typical applications include inbound customer support, appointment booking, and front-desk call triage.",
    category: "Capabilities"
  },
  {
    id: "can-nexagent-automate-existing-workflows",
    question: "Can NexAgent automate existing workflows?",
    answer: "Yes. Rather than requiring you to discard the software you already rely on, our engineering team maps your existing manual handoffs, data re-entry points, and approval gates, designing event-driven automation pipelines that trigger actions across your current software tools.",
    category: "Capabilities"
  },
  {
    id: "can-nexagent-integrate-existing-software",
    question: "Can NexAgent integrate existing software?",
    answer: "Yes. Systems integration is a core specialty. We connect disparate CRM platforms, ERP systems, transactional databases, legacy on-premise software, communication apps (Slack, Teams, WhatsApp), and cloud APIs through reliable middleware and webhook orchestrators.",
    category: "Capabilities"
  },
  {
    id: "does-nexagent-develop-its-own-products",
    question: "Does NexAgent develop its own products?",
    answer: "Yes. NexAgent operates on a hybrid model: we engineer custom technology solutions for clients while systematically abstracting verified, high-performance patterns into our own reusable platforms and internal software. As our technology portfolio matures, select platforms will be made available as standalone products.",
    category: "Overview"
  },
  {
    id: "what-industries-does-nexagent-work-with",
    question: "What industries does NexAgent work with?",
    answer: "We apply an engineering-first mindset across multiple sectors where operational friction exists, including Healthcare (administrative and documentation pipelines), Hospitality (guest communication and property task dispatch), B2B Services (lead enrichment and sales operations), Retail, Professional Services, and Financial Technology.",
    category: "Overview"
  },
  {
    id: "where-does-nexagent-operate",
    question: "Where does NexAgent operate?",
    answer: "NexAgent is globally oriented in ambition and commercial focus from day one. Our primary client engagements and commercial operations focus across the United States, United Kingdom, United Arab Emirates, and India, collaborating via modern distributed engineering workflows.",
    category: "Operations"
  },
  {
    id: "how-does-a-project-start",
    question: "How does a project start?",
    answer: "Engagements begin with a diagnostic discovery call to understand your business model, current software architecture, and specific operational bottlenecks. Following diagnosis, our team delivers a detailed technical architecture proposal, milestone roadmap, and clear scope of work before engineering commences.",
    category: "Operations"
  },
  {
    id: "how-do-i-book-a-strategy-call",
    question: "How do I book a strategy call?",
    answer: "You can schedule a consultation directly through our Strategy Call page (/strategy-call) or Contact page (/contact). You will be asked to provide an overview of your organization, current technology stack, and primary operational challenges so our technical team can prepare relevant insights in advance.",
    category: "Operations"
  }
];
