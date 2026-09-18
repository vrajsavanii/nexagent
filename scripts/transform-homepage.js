const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'public', 'index.html');
const rootHtmlPath = path.join(__dirname, '..', 'index.html');
const framerMjsPath = path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
let mjs = fs.readFileSync(framerMjsPath, 'utf8');

console.log('Original index.html length:', html.length);
console.log('Original mjs length:', mjs.length);

// 1. Navigation Links & Labels
// In HTML:
// href="./#features" -> href="/technology"
// href="./update" -> href="/solutions"
// href="./price" -> href="/industries"
// href="./contact-us" -> href="/about"
// Primary Button href="./price" -> href="/book-a-strategy-call"

// Replace Nav text in HTML
html = html.replaceAll('>Features</p>', '>Technology</p>');
html = html.replaceAll('>Update</p>', '>Solutions</p>');
html = html.replaceAll('>Pricing</p>', '>Industries</p>');
html = html.replaceAll('>Contact</p>', '>About</p>');
html = html.replaceAll('href="./#features"', 'href="/technology"');
html = html.replaceAll('href="./update"', 'href="/solutions"');
html = html.replaceAll('href="./price"', 'href="/industries"');
html = html.replaceAll('href="./contact-us"', 'href="/book-a-strategy-call"');

// Replace Hero Section in HTML
html = html.replaceAll('Autonomous AI Engine v4.2 is live ⚡', 'NEXAGENT / INTELLIGENT TECHNOLOGY GROUP');
html = html.replaceAll('Built To Scale Enterprise Ops', 'FOR THE BUSINESSES OF THE WORLD.');
html = html.replaceAll('Intelligent Systems', 'BUILDING INTELLIGENT SYSTEMS');
html = html.replaceAll(
  'NexAgent engineers custom autonomous agents, enterprise automation pipelines, and core intelligence infrastructure for high-growth companies.',
  'NexAgent builds AI-powered software, automation and digital infrastructure that help organizations reduce operational friction, connect systems and scale intelligently.'
);
html = html.replaceAll('>Book Strategy Call</p>', '>Book a Strategy Call</p>');
html = html.replaceAll('>Explore Architecture</p>', '>Explore NexAgent</p>');

// Replace Marquee Header in HTML
html = html.replaceAll('Trusted by Hundreds', 'GLOBAL INTEGRATION & INFRASTRUCTURE ECOSYSTEM');

// Replace Testimonial 1 (Marcus Sterling / Apex Capital) in HTML with Section 02: WHAT NEXAGENT DOES
html = html.replaceAll(
  '“NexAgent transformed our back-office operations into an autonomous engine. We scaled throughput 4.6x with zero headcount bloat.”',
  '“From identifying operational friction to designing the architecture, building AI systems, automating workflows, and deploying intelligent agents — we transform business problems into operating clarity.”'
);
html = html.replaceAll('Marcus Sterling', 'WHAT NEXAGENT DOES');
html = html.replaceAll('VP of Operations, Apex Capital', 'FROM BUSINESS PROBLEMS TO INTELLIGENT SYSTEMS');

// Replace Section 03: BENEFITS -> ONE TECHNOLOGY GROUP. MULTIPLE CAPABILITIES.
html = html.replaceAll('Engineered for High-Velocity Execution', 'ONE TECHNOLOGY GROUP. MULTIPLE CAPABILITIES.');
html = html.replaceAll(
  'A technical AI partner that moves with the speed and precision of elite founders.',
  'AI, automation, software, cloud infrastructure, voice systems, and data analytics engineered to help organizations operate more intelligently.'
);
html = html.replaceAll('Deterministic AI Systems', 'AI & Intelligent Systems');
html = html.replaceAll(
  'Mission-critical automation with strict guardrails, zero hallucination workflows, and verified execution logs.',
  'Domain-specific reasoning pipelines, model fine-tuning, and deterministic guardrails engineered for business reliability.'
);
html = html.replaceAll('Sovereign Data Privacy', 'Software & Cloud Infrastructure');
html = html.replaceAll(
  'Deploy on your dedicated VPC or private cloud with strict zero-data-retention and enterprise-grade encryption.',
  'Scalable web applications, APIs, event mesh fabrics, and sovereign cloud environments with complete data isolation.'
);

// Replace Testimonial 2 (Elena Rostova / Vantage Scale) with Section 06: WHO WE SERVE
html = html.replaceAll(
  '"They integrated directly into our core tech stack in under two weeks. The autonomous triage handles 85% of tier-1 requests without human intervention."',
  '“Engineered for Solo Businesses, Startups, MSMEs, B2B Organizations, Enterprises, and Large Institutions. The architecture adapts to organizational complexity with zero one-size-fits-all assumptions.”'
);
html = html.replaceAll('Elena Rostova', 'WHO WE SERVE');
html = html.replaceAll('Head of Customer Experience, Vantage Scale', 'BUILT FOR BUSINESSES AT EVERY SCALE');
html = html.replaceAll('Head of Customer Ops', 'BUILT FOR BUSINESSES AT EVERY SCALE');

// Replace Section 05: PROCESS -> FROM COMPLEXITY TO CLARITY.
html = html.replaceAll('Simple. Structured. Scalable.', 'FROM COMPLEXITY TO CLARITY.');
html = html.replaceAll(
  'A rigorous four-phase deployment protocol engineered for predictable, enterprise-grade results.',
  'A rigorous six-phase engineering lifecycle: 01 Discover, 02 Diagnose, 03 Architect, 04 Build, 05 Deploy, and 06 Optimize.'
);

// Replace Section 10: PROJECTS -> ENGINEERED FOR REAL-WORLD DEPLOYMENT (Honest Empty State)
html = html.replaceAll('Work That Speaks for Itself', 'ENGINEERED FOR REAL-WORLD DEPLOYMENT.');
html = html.replaceAll(
  'Real-world deployments delivering measurable efficiency gains for high-growth enterprises.',
  'Verified architecture blueprints and real-world deployment case studies in active development. Zero synthetic testimonials or fabricated metrics.'
);
html = html.replaceAll('VitalPath — AI Health Triage System', 'CASE STUDIES IN DEVELOPMENT');
html = html.replaceAll(
  'Engineered an autonomous clinical triage system that securely processes incoming inquiries, verifies records, and routes urgent cases in real time.',
  'Deployment benchmarks, client technical architectures, and measured efficiency gains will appear here as client engagements reach production milestones.'
);
html = html.replaceAll('Reduction in triage response latency', 'Deployment Verification Pending');
html = html.replaceAll('Reduction in manual administrative triage workload', 'Production Case Studies Under Review');

// Replace Section 08 & 09: PRICING -> PRODUCTS & CLIENT SOLUTIONS
html = html.replaceAll('Predictable Plans. Proven ROI.', 'SYSTEMS BUILT AROUND THE WAY BUSINESSES WORK.');
html = html.replaceAll(
  'Transparent pricing designed to scale seamlessly from launch to institutional volume.',
  'Tailored technology systems and reusable products engineered around your existing software, workflows, teams, and data.'
);

// Replace Section 11 & 12: TEAM -> NEXAGENT GROUP & VISION
html = html.replaceAll('The People Behind the Results', 'A TECHNOLOGY GROUP BUILT FOR THE LONG TERM.');
html = html.replaceAll(
  'A sharp team of AI specialists built to solve real business problems.',
  '“We are building NexAgent with the ambition to create a globally significant technology group — spanning technology, products, solutions, and future operating companies.”'
);

// Replace Section 13: FINAL CTA
html = html.replaceAll('Next-gen AI systems', 'WHAT COULD YOUR BUSINESS RUN BETTER?');
html = html.replaceAll(
  'Ready to explore how autonomous agents can transform your operations? Let\'s talk.',
  'Tell us where your business is losing time, creating unnecessary operational complexity or leaving technology underused. We\'ll explore what can be built, automated or improved.'
);

// Also apply the corresponding changes to `mjs` bundle!
mjs = mjs.replaceAll('Autonomous AI Engine v4.2 is live ⚡', 'NEXAGENT / INTELLIGENT TECHNOLOGY GROUP');
mjs = mjs.replaceAll('Built To Scale Enterprise Ops', 'FOR THE BUSINESSES OF THE WORLD.');
mjs = mjs.replaceAll(
  'NexAgent engineers custom autonomous agents, enterprise automation pipelines, and core intelligence infrastructure for high-growth companies.',
  'NexAgent builds AI-powered software, automation and digital infrastructure that help organizations reduce operational friction, connect systems and scale intelligently.'
);
mjs = mjs.replaceAll('Book Strategy Call', 'Book a Strategy Call');
mjs = mjs.replaceAll('Explore Architecture', 'Explore NexAgent');
mjs = mjs.replaceAll('Trusted by Hundreds', 'GLOBAL INTEGRATION & INFRASTRUCTURE ECOSYSTEM');

mjs = mjs.replaceAll(
  '“NexAgent transformed our back-office operations into an autonomous engine. We scaled throughput 4.6x with zero headcount bloat.”',
  '“From identifying operational friction to designing the architecture, building AI systems, automating workflows, and deploying intelligent agents — we transform business problems into operating clarity.”'
);
mjs = mjs.replaceAll('Marcus Sterling', 'WHAT NEXAGENT DOES');
mjs = mjs.replaceAll('VP of Operations, Apex Capital', 'FROM BUSINESS PROBLEMS TO INTELLIGENT SYSTEMS');

mjs = mjs.replaceAll('Engineered for High-Velocity Execution', 'ONE TECHNOLOGY GROUP. MULTIPLE CAPABILITIES.');
mjs = mjs.replaceAll(
  'A technical AI partner that moves with the speed and precision of elite founders.',
  'AI, automation, software, cloud infrastructure, voice systems, and data analytics engineered to help organizations operate more intelligently.'
);

mjs = mjs.replaceAll(
  '“They integrated directly into our core tech stack in under two weeks. The autonomous triage handles 85% of tier-1 requests without human intervention.”',
  '“Engineered for Solo Businesses, Startups, MSMEs, B2B Organizations, Enterprises, and Large Institutions. The architecture adapts to organizational complexity with zero one-size-fits-all assumptions.”'
);
mjs = mjs.replaceAll('Elena Rostova', 'WHO WE SERVE');
mjs = mjs.replaceAll('Head of Customer Ops', 'BUILT FOR BUSINESSES AT EVERY SCALE');

mjs = mjs.replaceAll('Simple. Structured. Scalable.', 'FROM COMPLEXITY TO CLARITY.');
mjs = mjs.replaceAll(
  'A rigorous four-phase deployment protocol engineered for predictable, enterprise-grade results.',
  'A rigorous six-phase engineering lifecycle: 01 Discover, 02 Diagnose, 03 Architect, 04 Build, 05 Deploy, and 06 Optimize.'
);

mjs = mjs.replaceAll('Work That Speaks for Itself', 'ENGINEERED FOR REAL-WORLD DEPLOYMENT.');
mjs = mjs.replaceAll(
  'Real-world deployments delivering measurable efficiency gains for high-growth enterprises.',
  'Verified architecture blueprints and real-world deployment case studies in active development. Zero synthetic testimonials or fabricated metrics.'
);
mjs = mjs.replaceAll('VitalPath — AI Health Triage System', 'CASE STUDIES IN DEVELOPMENT');

mjs = mjs.replaceAll('The People Behind the Results', 'A TECHNOLOGY GROUP BUILT FOR THE LONG TERM.');
mjs = mjs.replaceAll(
  'A sharp team of AI specialists built to solve real business problems.',
  '“We are building NexAgent with the ambition to create a globally significant technology group — spanning technology, products, solutions, and future operating companies.”'
);

// Save files
fs.writeFileSync(indexHtmlPath, html, 'utf8');
fs.writeFileSync(rootHtmlPath, html, 'utf8');
fs.writeFileSync(framerMjsPath, mjs, 'utf8');

console.log('Transformation complete!');
console.log('Updated index.html length:', html.length);
console.log('Updated mjs length:', mjs.length);
