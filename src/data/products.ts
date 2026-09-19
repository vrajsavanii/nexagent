export interface ProductItem {
  id: string;
  name: string;
  status: "IN DEVELOPMENT" | "PRIVATE" | "BETA" | "AVAILABLE";
  statusColor: string;
  problem: string;
  solution: string;
  capabilities: string[];
  targetCustomer: string;
  description: string;
}

export const PRODUCTS_NOTE = "Products and platforms are being developed as NexAgent's technology portfolio evolves. NexAgent operates on a hybrid model: we engineer custom technology for clients while continuously extracting reusable patterns into our own internal software platforms.";

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "orchestration-engine",
    name: "NexAgent Workflow Engine",
    status: "IN DEVELOPMENT",
    statusColor: "teal",
    problem: "Connecting non-deterministic AI agent outputs to deterministic enterprise APIs requires complex state graphs, retry queues, and human approval checkpoints.",
    solution: "A lightweight, type-safe execution kernel that coordinates multi-agent planning with deterministic schema validation and fault-tolerant queue retries.",
    capabilities: [
      "Directed Acyclic Graph (DAG) state coordinator",
      "Type-safe schema validation gates",
      "Human-in-the-loop approval pause/resume",
      "Comprehensive telemetry and audit tracing"
    ],
    targetCustomer: "Internal Client Deployments & Technology Teams",
    description: "The core orchestration runtime powering NexAgent's custom business automation client implementations."
  },
  {
    id: "voice-gateway",
    name: "NexAgent Voice Gateway",
    status: "IN DEVELOPMENT",
    statusColor: "titanium",
    problem: "Integrating telephony lines with real-time speech AI requires sub-500ms latency, robust noise suppression, and bidirectional interruption handling.",
    solution: "A low-latency streaming audio gateway connecting WebRTC/SIP streams directly to modular transcription, reasoning, and voice generation pipelines.",
    capabilities: [
      "Sub-500ms end-to-end latency budget",
      "Zero-lag interruption handling and acoustic echo cancellation",
      "Dynamic tool-calling injection mid-conversation",
      "Secure post-call redaction and transcription syncing"
    ],
    targetCustomer: "Customer Support & Appointment-Heavy Organizations",
    description: "The low-latency conversational telephony layer engineered for business-specific voice assistants."
  },
  {
    id: "knowledge-fabric",
    name: "NexAgent Knowledge Fabric",
    status: "PRIVATE",
    statusColor: "slate",
    problem: "Enterprise documentation is dispersed across PDFs, Notion, Google Drive, and ticketing systems without verified semantic provenance.",
    solution: "A high-precision Retrieval-Augmented Generation pipeline combining dense vector indexing with lexical BM25 re-ranking and source attribution.",
    capabilities: [
      "Multi-modal document chunking and layout parsing",
      "Hierarchical metadata filtering and tenant sandboxing",
      "Automated source verification and anti-hallucination checks",
      "Real-time indexing of updated internal documents"
    ],
    targetCustomer: "Knowledge-Intensive Professional Services & Internal Teams",
    description: "The proprietary knowledge retrieval framework underpinning NexAgent conversational assistants."
  }
];
