export interface FounderInfo {
  name: string;
  role: string;
  title: string;
  ownership: string;
  description: string;
}

export const COMPANY_DATA = {
  name: "NexAgent",
  tagline: "Building Intelligent Systems for the Businesses of the World",
  eyebrow: "NEXAGENT / INTELLIGENT TECHNOLOGY",
  description: "NexAgent builds AI-powered software, automation and digital systems that help businesses reduce operational friction, connect workflows and operate more intelligently.",
  longDescription: "NexAgent is a founder-led technology company building AI-powered software, custom business systems, automation pipelines, and scalable digital infrastructure. Driven by an engineering-first mindset, NexAgent bridges the gap between fragmented software tools and autonomous business operations.",
  foundingModel: "Founder-led technology company, founded and owned equally by two co-founders.",
  operatingModel: "Hybrid Model: Building custom technology systems for clients while engineering proprietary reusable platforms and internal software.",
  globalFocus: [
    { country: "United States", focus: "Enterprise Systems & AI Automation" },
    { country: "United Kingdom", focus: "Operations & Digital Infrastructure" },
    { country: "United Arab Emirates", focus: "Intelligent Workflows & Smart Services" },
    { country: "India", focus: "Custom Software Engineering & System Integration" }
  ],
  founders: [
    {
      role: "Co-Founder",
      title: "Technology & Engineering Systems",
      ownership: "Equal Equity Ownership (50%)",
      description: "Focused on software architecture, agentic AI frameworks, workflow orchestration, and core systems engineering."
    },
    {
      role: "Co-Founder",
      title: "Product Architecture & Strategic Operations",
      ownership: "Equal Equity Ownership (50%)",
      description: "Focused on product design, business process diagnosis, client solutions architecture, and global expansion strategy."
    }
  ],
  vision: {
    heading: "Built for the long term.",
    subheading: "Building the foundation for the next generation of intelligent technology.",
    statement: "We are building NexAgent to evolve with the technology landscape. As software transitions from passive tools to active, reasoning systems, our infrastructure is engineered to power resilient, self-optimizing businesses."
  }
};
