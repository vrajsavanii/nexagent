export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  potentialCustomers: string[];
  potentialApplications: string[];
  workflowExample: {
    title: string;
    description: string;
    steps: {
      label: string;
      subtext: string;
    }[];
  };
  complianceDisclaimer?: string;
  keyProblems: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare Technology",
    tagline: "Streamlining documentation, patient communication, and administrative clinical workflows.",
    potentialCustomers: ["Hospitals", "Specialty Clinics", "Diagnostic Laboratories", "Healthcare Organizations"],
    potentialApplications: [
      "Administrative documentation workflows",
      "Patient intake and communication pipelines",
      "Internal scheduling and appointment reminders",
      "Diagnostic report structuring and administrative routing",
      "Operational staff task coordination"
    ],
    workflowExample: {
      title: "Clinical Documentation & Administrative Pipeline",
      description: "How unstructured clinical paperwork is converted into structured records under clinician oversight.",
      steps: [
        { label: "DOCUMENT", subtext: "Paperwork, dictation, or intake form" },
        { label: "AI PROCESSING", subtext: "OCR extraction & schema parsing" },
        { label: "STRUCTURED INFO", subtext: "Normalized data points" },
        { label: "WORKFLOW", subtext: "Validation against protocols" },
        { label: "HUMAN REVIEW", subtext: "Clinician / staff sign-off" },
        { label: "SYSTEM UPDATE", subtext: "Secure EHR / database update" }
      ]
    },
    complianceDisclaimer: "Important Notice: NexAgent develops administrative software, automation tools, and workflow systems. NexAgent technology does not provide medical diagnosis, clinical treatment recommendations, or autonomous medical decisions. All clinical determinations remain strictly with licensed human healthcare practitioners.",
    keyProblems: [
      "Clinicians spend up to 40% of their workday completing administrative documentation.",
      "Fragmented intake forms lead to duplicate entry and administrative scheduling delays.",
      "Legacy patient record software lacks modern conversational intake interfaces."
    ]
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality & Guest Operations",
    tagline: "Connecting guest inquiries, concierge requests, front-desk systems, and staff execution.",
    potentialCustomers: ["Hotels & Resorts", "Boutique Hospitality Brands", "Property Operators", "Serviced Apartments"],
    potentialApplications: [
      "Multi-channel guest communication (WhatsApp, Web, Voice)",
      "Concierge and room service routing",
      "Front-office booking and check-in workflows",
      "Maintenance task dispatch to hotel staff",
      "Unified operational dashboards for property managers"
    ],
    workflowExample: {
      title: "Guest Request to Staff Execution Pipeline",
      description: "How guest communications are parsed and routed to property management systems in real time.",
      steps: [
        { label: "GUEST", subtext: "Submits request via voice or chat" },
        { label: "COMMUNICATION", subtext: "Ingestion via messaging gateway" },
        { label: "AI ASSISTANT", subtext: "Understands intent & room details" },
        { label: "HOTEL SYSTEM", subtext: "Checks PMS records & availability" },
        { label: "WORKFLOW", subtext: "Dispatches ticket with priority" },
        { label: "STAFF", subtext: "Department handles request" },
        { label: "DASHBOARD", subtext: "Resolution logged in manager view" }
      ]
    },
    complianceDisclaimer: "All guest data processing adheres to standard commercial privacy best practices and secure encryption in transit.",
    keyProblems: [
      "Front-desk staff overwhelmed by repetitive guest inquiries during peak check-in windows.",
      "Guest service requests get lost in radio chatter and paper task boards.",
      "Fragmented property management software limits visibility across departments."
    ]
  },
  {
    id: "b2b",
    slug: "b2b",
    name: "B2B & Enterprise Services",
    tagline: "Automating high-volume commercial pipelines from lead enrichment to contract dispatch.",
    potentialCustomers: ["B2B SaaS Providers", "Logistics & Supply Chain", "Wholesale Distributors", "Professional Consultancies"],
    potentialApplications: [
      "Automated inbound lead research and enrichment",
      "Algorithmic qualification based on verifiable signals",
      "Automated meeting scheduling and CRM synchronization",
      "Contract metadata extraction and renewal reminders",
      "Client onboarding orchestration"
    ],
    workflowExample: {
      title: "B2B Lead Qualification & Routing Flow",
      description: "How inbound prospects are qualified, enriched, and routed to the appropriate sales team.",
      steps: [
        { label: "LEAD", subtext: "Prospect submits inquiry form" },
        { label: "ENRICHMENT", subtext: "Firmographic data fetched via API" },
        { label: "QUALIFICATION", subtext: "Fit score calculated by criteria" },
        { label: "AI AGENT", subtext: "Drafts personalized briefing note" },
        { label: "CRM", subtext: "Opportunity created & assigned" },
        { label: "FOLLOW-UP", subtext: "Calendar link & sequence dispatched" },
        { label: "SALES TEAM", subtext: "Representative joins pre-briefed call" }
      ]
    },
    keyProblems: [
      "Inbound response times lag by hours or days, causing high drop-off in buyer interest.",
      "Sales representatives lose up to 15 hours weekly conducting manual research.",
      "Disconnected marketing and CRM tools cause dropped deals and inaccurate reporting."
    ]
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail & Commerce Operations",
    tagline: "Intelligent inventory monitoring, automated supplier coordination, and unified order support.",
    potentialCustomers: ["Multi-Channel Retailers", "Direct-to-Consumer Brands", "E-Commerce Networks", "Merchandise Distributors"],
    potentialApplications: [
      "Post-purchase order status chatbots",
      "Automated return and exchange routing",
      "Supplier inventory change notifications",
      "Product catalog normalization across platforms",
      "Omnichannel customer support triage"
    ],
    workflowExample: {
      title: "Omnichannel Support & Resolution Flow",
      description: "Automating return, shipping, and order status requests while safeguarding customer satisfaction.",
      steps: [
        { label: "CUSTOMER", subtext: "Asks about order via website" },
        { label: "SYSTEM LOOKUP", subtext: "Query connects to ERP / Shopify" },
        { label: "AI AGENT", subtext: "Assesses carrier status & timeline" },
        { label: "ACTION", subtext: "Calculates delivery or refund eligibility" },
        { label: "RESPONSE", subtext: "Instant clear resolution provided" },
        { label: "ESCALATION", subtext: "Edge cases flagged for human agent" }
      ]
    },
    keyProblems: [
      "Tier-1 support tickets regarding 'Where is my order?' overload support agents.",
      "Inventory updates across disparate marketplaces fail to sync, risking overselling.",
      "Returns processing requires manual inspection across multiple fragmented screens."
    ]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Knowledge retrieval, administrative client intake, and structured document preparation.",
    potentialCustomers: ["Accounting Firms", "Legal Practices", "Consulting Agencies", "Architecture & Engineering Studios"],
    potentialApplications: [
      "Standard operating procedure RAG assistants",
      "Client intake questionnaires and automated file preparation",
      "Engagement letter and agreement generation",
      "Time and expense tracking data reconciliation",
      "Cross-project progress dashboards"
    ],
    workflowExample: {
      title: "Client Intake & File Structuring Flow",
      description: "Transforming prospective client inquiries into structured engagement records.",
      steps: [
        { label: "INQUIRY", subtext: "Client shares scope & documents" },
        { label: "DOCUMENT PARSE", subtext: "Key matter details extracted" },
        { label: "CONFLICT CHECK", subtext: "Internal database query executed" },
        { label: "BRIEF CREATION", subtext: "Partner briefing memo generated" },
        { label: "PARTNER REVIEW", subtext: "Human partner approves engagement" },
        { label: "ONBOARDING", subtext: "Portal created & agreement sent" }
      ]
    },
    complianceDisclaimer: "Software facilitates organizational workflows and document preparation. Does not provide certified legal, tax, or accounting advice.",
    keyProblems: [
      "Senior fee-earners spend billable hours on non-billable administrative file organization.",
      "Knowledge gained across past projects remains locked in individual partner inboxes.",
      "Client onboarding cycles take weeks due to manual document collection."
    ]
  },
  {
    id: "financial-technology",
    slug: "financial-technology",
    name: "Financial Technology & Operations",
    tagline: "Back-office transaction reconciliation, compliance document structuring, and operational reporting.",
    potentialCustomers: ["FinTech Startups", "Payment Processors", "Asset Management Teams", "Lending Platforms"],
    potentialApplications: [
      "Automated ledger transaction reconciliation",
      "KYC / KYB document structuring and verification workflows",
      "Real-time operational anomaly detection",
      "Regulatory audit report generation",
      "Customer financial account query assistants"
    ],
    workflowExample: {
      title: "Back-Office Reconciliation Pipeline",
      description: "Comparing bank transaction feeds against internal ledger entries automatically.",
      steps: [
        { label: "TRANSACTION", subtext: "Gateway event received" },
        { label: "LEDGER LOOKUP", subtext: "Corresponding internal entry queried" },
        { label: "RECONCILIATION", subtext: "Amounts & timestamps matched" },
        { label: "DISCREPANCY DETECT", subtext: "Variance evaluated by rules" },
        { label: "AUDIT LOG", subtext: "Transaction sealed in ledger" },
        { label: "EXCEPTION ALERT", subtext: "Unmatched items escalated to finance" }
      ]
    },
    complianceDisclaimer: "NexAgent provides operational workflow technology and software engineering. We do not operate financial exchanges, banking services, or manage client funds.",
    keyProblems: [
      "Finance teams spend days manually matching transactions across payment gateways and internal databases.",
      "Discrepancies in data feeds take weeks to detect without real-time anomaly alerts.",
      "Audit preparation requires high manual labor gathering evidence across multiple tools."
    ]
  }
];
