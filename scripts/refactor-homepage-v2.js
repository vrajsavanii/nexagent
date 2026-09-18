const fs = require('fs');
const path = require('path');

const publicIndexPath = path.join(__dirname, '..', 'public', 'index.html');
const rootIndexPath = path.join(__dirname, '..', 'index.html');
const framerMjsPath = path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs');

let html = fs.readFileSync(publicIndexPath, 'utf8');
let mjs = fs.readFileSync(framerMjsPath, 'utf8');

console.log('Original public/index.html length:', html.length);
console.log('Original framer mjs length:', mjs.length);

// ----------------------------------------------------
// 01. NAVIGATION UPDATES
// ----------------------------------------------------
// Navigation must strictly be: Technology, Solutions, Industries, Products, Insights, About + CTA: Book a Strategy Call
html = html.replaceAll('href="./price"', 'href="/industries"');
html = html.replaceAll('href="./update"', 'href="/solutions"');
html = html.replaceAll('href="./#features"', 'href="/technology"');
html = html.replaceAll('href="./contact-us"', 'href="/about"');
html = html.replaceAll('>Explore Architecture</p>', '>Explore Our Solutions</p>');
html = html.replaceAll('>Explore NexAgent</p>', '>Explore Our Solutions</p>');

// ----------------------------------------------------
// 02. SECTION 01 — HERO (Section 09)
// ----------------------------------------------------
// Primary message: AI-POWERED TECHNOLOGY FOR BUSINESSES THAT WANT TO OPERATE BETTER.
// Supporting copy: NexAgent builds intelligent software, automation and digital systems that reduce manual work, connect workflows and help businesses operate with greater efficiency.
// Primary CTA: BOOK A STRATEGY CALL
// Secondary CTA: EXPLORE OUR SOLUTIONS

html = html.replaceAll(
  'NEXAGENT / INTELLIGENT TECHNOLOGY GROUP',
  'INTELLIGENT TECHNOLOGY FOR BUSINESSES.'
);
html = html.replaceAll(
  'BUILDING INTELLIGENT SYSTEMS FOR THE BUSINESSES OF THE WORLD.',
  'AI-POWERED TECHNOLOGY FOR BUSINESSES THAT WANT TO OPERATE BETTER.'
);
html = html.replaceAll(
  'BUILDING INTELLIGENT SYSTEMS',
  'AI-POWERED TECHNOLOGY'
);
html = html.replaceAll(
  'FOR THE BUSINESSES OF THE WORLD.',
  'FOR BUSINESSES THAT WANT TO OPERATE BETTER.'
);
html = html.replaceAll(
  'NexAgent builds AI-powered software, automation and digital infrastructure that help organizations reduce operational friction, connect systems and scale intelligently.',
  'NexAgent builds intelligent software, automation and digital systems that reduce manual work, connect workflows and help businesses operate with greater efficiency.'
);
html = html.replaceAll('>Book Strategy Call</p>', '>Book a Strategy Call</p>');
html = html.replaceAll('>Explore Architecture</p>', '>Explore Our Solutions</p>');

// ----------------------------------------------------
// 03. SECTION 02 — SYSTEMS WORKING TOGETHER (Section 09)
// ----------------------------------------------------
// Headline: YOUR BUSINESS HAS SYSTEMS. WE MAKE THEM WORK TOGETHER.
// Fragmented workflows explanation:
// Data, CRM, Communication, Documents, Employees, Customers, Operations flowing into NEXAGENT -> AI, AUTOMATION, INTELLIGENCE, EXECUTION.

html = html.replaceAll(
  'FROM BUSINESS PROBLEMS TO INTELLIGENT SYSTEMS',
  'YOUR BUSINESS HAS SYSTEMS. WE MAKE THEM WORK TOGETHER.'
);
html = html.replaceAll(
  'WHAT NEXAGENT DOES',
  'CONNECTED SYSTEMS & AUTOMATION'
);
html = html.replaceAll(
  '“From identifying operational friction to designing the architecture, building AI systems, automating workflows, and deploying intelligent agents — we transform business problems into operating clarity.”',
  '“Your business already has systems: CRM, data, communication, documents, employees, customers, and operations. Disconnected tools create friction and manual overhead. NexAgent brings them together through intelligent automation, AI agents, and custom software.”'
);

// ----------------------------------------------------
// 04. SECTION 03 — WHAT WE BUILD (Section 09)
// ----------------------------------------------------
// Headline: WHAT WE BUILD
// Primary capabilities: AI Automation, AI Agents, Voice AI, AI Assistants, Software, CRM & Business Systems, Business Intelligence, Cloud Infrastructure, Systems Integration.

html = html.replaceAll(
  'ONE TECHNOLOGY GROUP. MULTIPLE CAPABILITIES.',
  'WHAT WE BUILD'
);
html = html.replaceAll(
  'AI, automation, software, cloud infrastructure, voice systems, and data analytics engineered to help organizations operate more intelligently.',
  'We build AI automation, autonomous agents, voice AI solutions, conversational assistants, custom software, unified CRM and business management systems, business intelligence dashboards, cloud infrastructure, and systems integration.'
);

// ----------------------------------------------------
// 05. SECTION 04 — SCALABILITY (Section 09)
// ----------------------------------------------------
// Headline: AUTOMATION FROM THE SMALLEST WORKFLOW TO THE MOST COMPLEX SYSTEM.
// ONE TASK → ONE WORKFLOW → MULTIPLE WORKFLOWS → CONNECTED BUSINESS SYSTEM → INTELLIGENT OPERATING ENVIRONMENT

html = html.replaceAll(
  'Everything You Need. Zero Technical Debt.',
  'AUTOMATION FROM THE SMALLEST WORKFLOW TO THE MOST COMPLEX SYSTEM.'
);
html = html.replaceAll(
  'Built to eliminate manual bottlenecks with end-to-end security and precision execution.',
  'One Task → One Workflow → Multiple Workflows → Connected Business System → Intelligent Operating Environment. Scalable architecture engineered around your real operational needs.'
);

// ----------------------------------------------------
// 06. SECTION 05 — BUILT FOR DIFFERENT BUSINESSES (Section 09)
// ----------------------------------------------------
// Headline: BUILT FOR DIFFERENT BUSINESSES. DESIGNED AROUND THEIR REAL WORK.
// Solo Businesses, Small Businesses, MSMEs, Startups, B2B Companies, Growing Organizations, Enterprises.

html = html.replaceAll(
  'BUILT FOR BUSINESSES AT EVERY SCALE',
  'BUILT FOR DIFFERENT BUSINESSES. DESIGNED AROUND THEIR REAL WORK.'
);
html = html.replaceAll(
  'WHO WE SERVE',
  'ORGANIZATIONAL SCOPE'
);
html = html.replaceAll(
  '“Engineered for Solo Businesses, Startups, MSMEs, B2B Organizations, Enterprises, and Large Institutions. The architecture adapts to organizational complexity with zero one-size-fits-all assumptions.”',
  '“Engineered for Solo Businesses, Small Businesses, MSMEs, Startups, B2B Companies, Growing Organizations, and Enterprises. We design around actual operational workflows rather than assuming every business operates identically.”'
);

// ----------------------------------------------------
// 07. SECTION 06 — ACROSS INDUSTRIES (Section 09)
// ----------------------------------------------------
// Headline: ACROSS INDUSTRIES. AROUND REAL WORKFLOWS.
// Healthcare, Hospitality, B2B, Retail, Professional Services, Financial Technology.

html = html.replaceAll(
  'SYSTEMS BUILT AROUND THE WAY BUSINESSES WORK.',
  'ACROSS INDUSTRIES. AROUND REAL WORKFLOWS.'
);
html = html.replaceAll(
  'Tailored technology systems and reusable products engineered around your existing software, workflows, teams, and data.',
  'Applied technology solutions for Healthcare, Hospitality, B2B Organizations, Retail, Professional Services, and Financial Technology. Designed around actual workflows and operational compliance.'
);

// ----------------------------------------------------
// 08. SECTION 07 — PROCESS (Section 09)
// ----------------------------------------------------
// Headline: FROM IDEA TO DEPLOYED SYSTEM.
// DISCOVER → DESIGN → BUILD → INTEGRATE → DEPLOY → OPTIMIZE.

html = html.replaceAll(
  'FROM COMPLEXITY TO CLARITY.',
  'FROM IDEA TO DEPLOYED SYSTEM.'
);
html = html.replaceAll(
  'A rigorous six-phase engineering lifecycle: 01 Discover, 02 Diagnose, 03 Architect, 04 Build, 05 Deploy, and 06 Optimize.',
  'A disciplined six-stage deployment lifecycle: 01 Discover → 02 Design → 03 Build → 04 Integrate → 05 Deploy → 06 Optimize.'
);

// ----------------------------------------------------
// 09. SECTION 08 — HYBRID MODEL (Section 09)
// ----------------------------------------------------
// Headline: BUILDING OUR OWN TECHNOLOGY. BUILDING FOR CLIENTS.
// Explain hybrid model: Client Solutions + Custom Technology + Internal Products.

html = html.replaceAll(
  'ENGINEERED FOR REAL-WORLD DEPLOYMENT.',
  'BUILDING OUR OWN TECHNOLOGY. BUILDING FOR CLIENTS.'
);
html = html.replaceAll(
  'Verified architecture blueprints and real-world deployment case studies in active development. Zero synthetic testimonials or fabricated metrics.',
  'NexAgent operates through a hybrid model: we develop custom software and automated workflows tailored to client specifications, while engineering reusable internal technology and software platforms for long-term scale.'
);
html = html.replaceAll(
  'CASE STUDIES IN DEVELOPMENT',
  'HYBRID TECHNOLOGY MODEL'
);
html = html.replaceAll(
  'Deployment benchmarks, client technical architectures, and measured efficiency gains will appear here as client engagements reach production milestones.',
  'Client-Specific Solutions: bespoke automation and custom platforms. Reusable Internal Products: core workflow orchestrators, voice engines, and intelligent business management platforms.'
);

// ----------------------------------------------------
// 10. SECTION 09 & 10 — FOUNDERS & LONG-TERM VISION (Section 09)
// ----------------------------------------------------
// Section 09: THE PEOPLE BUILDING NEXAGENT. (Two co-founders with equal ownership)
// Section 10: BUILT FOR THE LONG TERM.

html = html.replaceAll(
  'A TECHNOLOGY GROUP BUILT FOR THE LONG TERM.',
  'THE PEOPLE BUILDING NEXAGENT.'
);
html = html.replaceAll(
  '“We are building NexAgent with the ambition to create a globally significant technology group — spanning technology, products, solutions, and future operating companies.”',
  '“Founded by two co-founders with equal ownership, NexAgent is being built around a simple principle: use technology to remove unnecessary complexity from the way businesses operate. We are building NexAgent for the long term with global ambition.”'
);
html = html.replaceAll(
  'Co-Founder &amp; Technical Architect',
  'Co-Founder (Equal Ownership)'
);
html = html.replaceAll(
  'Co-Founder & Technical Architect',
  'Co-Founder (Equal Ownership)'
);
html = html.replaceAll(
  'Technical Co-Founder',
  'Co-Founder'
);
html = html.replaceAll(
  'Co-Founder &amp; Systems Engineering',
  'Co-Founder &amp; Technical Lead (Equal Ownership)'
);
html = html.replaceAll(
  'Co-Founder & Systems Engineering',
  'Co-Founder & Technical Lead (Equal Ownership)'
);
html = html.replaceAll(
  'Engineering Pod',
  'Core Engineering'
);
html = html.replaceAll(
  'Autonomous Agent Systems',
  'Client Solutions &amp; Platform Architecture'
);
html = html.replaceAll(
  'We’re Hiring!',
  'BUILT FOR THE LONG TERM.'
);
html = html.replaceAll(
  'Looking for elite AI engineers and distributed systems architects.',
  'We intend to develop NexAgent into a globally significant technology company, building the foundation for products, platforms and future technology businesses.'
);
html = html.replaceAll(
  '>Join Engineering',
  '>Learn About Our Vision'
);

// ----------------------------------------------------
// 11. SECTION 11 — FINAL CTA (Section 09)
// ----------------------------------------------------
// Headline: READY TO BUILD A BETTER SYSTEM?
// CTA: BOOK A STRATEGY CALL

html = html.replaceAll(
  'WHAT COULD YOUR BUSINESS RUN BETTER?',
  'READY TO BUILD A BETTER SYSTEM?'
);
html = html.replaceAll(
  'Tell us where your business is losing time, creating unnecessary operational complexity or leaving technology underused. We\'ll explore what can be built, automated or improved.',
  'Tell us what your business runs today and what you want to automate, build, or connect. Book a strategy call to explore tailored solutions.'
);

// ----------------------------------------------------
// 12. HIDE TESTIMONIALS CAROUSEL & LOGO WALL (Section 17 & 18)
// ----------------------------------------------------
// Section 17: Only display actual testimonials. If none exist: remove the testimonial carousel.
// Section 18: Only display actual authorized client logos. If none are available: remove the logo wall.

// Add global style in <head> to suppress simulated logo tickers and testimonials
const hideCss = `
<style id="nexagent-truth-overrides">
  /* Section 17 & 18: Suppress simulated testimonials carousel and placeholder client logo wall */
  .framer-q16t82-container,
  section[data-framer-name="Logo"],
  .framer-2fm884 {
    display: none !important;
  }
</style>
`;

if (!html.includes('nexagent-truth-overrides')) {
  html = html.replace('</head>', `${hideCss}</head>`);
}

// ----------------------------------------------------
// 13. MIRROR IDENTICAL REPLACEMENTS IN FRAMER MJS
// ----------------------------------------------------
mjs = mjs.replaceAll(
  'NEXAGENT / INTELLIGENT TECHNOLOGY GROUP',
  'INTELLIGENT TECHNOLOGY FOR BUSINESSES.'
);
mjs = mjs.replaceAll(
  'BUILDING INTELLIGENT SYSTEMS',
  'AI-POWERED TECHNOLOGY'
);
mjs = mjs.replaceAll(
  'FOR THE BUSINESSES OF THE WORLD.',
  'FOR BUSINESSES THAT WANT TO OPERATE BETTER.'
);
mjs = mjs.replaceAll(
  'NexAgent builds AI-powered software, automation and digital infrastructure that help organizations reduce operational friction, connect systems and scale intelligently.',
  'NexAgent builds intelligent software, automation and digital systems that reduce manual work, connect workflows and help businesses operate with greater efficiency.'
);
mjs = mjs.replaceAll('>Book Strategy Call</p>', '>Book a Strategy Call</p>');
mjs = mjs.replaceAll('>Explore Architecture</p>', '>Explore Our Solutions</p>');
mjs = mjs.replaceAll('>Explore NexAgent</p>', '>Explore Our Solutions</p>');

mjs = mjs.replaceAll(
  'FROM BUSINESS PROBLEMS TO INTELLIGENT SYSTEMS',
  'YOUR BUSINESS HAS SYSTEMS. WE MAKE THEM WORK TOGETHER.'
);
mjs = mjs.replaceAll(
  'WHAT NEXAGENT DOES',
  'CONNECTED SYSTEMS & AUTOMATION'
);
mjs = mjs.replaceAll(
  '“From identifying operational friction to designing the architecture, building AI systems, automating workflows, and deploying intelligent agents — we transform business problems into operating clarity.”',
  '“Your business already has systems: CRM, data, communication, documents, employees, customers, and operations. Disconnected tools create friction and manual overhead. NexAgent brings them together through intelligent automation, AI agents, and custom software.”'
);

mjs = mjs.replaceAll(
  'ONE TECHNOLOGY GROUP. MULTIPLE CAPABILITIES.',
  'WHAT WE BUILD'
);
mjs = mjs.replaceAll(
  'AI, automation, software, cloud infrastructure, voice systems, and data analytics engineered to help organizations operate more intelligently.',
  'We build AI automation, autonomous agents, voice AI solutions, conversational assistants, custom software, unified CRM and business management systems, business intelligence dashboards, cloud infrastructure, and systems integration.'
);

mjs = mjs.replaceAll(
  'Everything You Need. Zero Technical Debt.',
  'AUTOMATION FROM THE SMALLEST WORKFLOW TO THE MOST COMPLEX SYSTEM.'
);

mjs = mjs.replaceAll(
  'BUILT FOR BUSINESSES AT EVERY SCALE',
  'BUILT FOR DIFFERENT BUSINESSES. DESIGNED AROUND THEIR REAL WORK.'
);
mjs = mjs.replaceAll(
  'WHO WE SERVE',
  'ORGANIZATIONAL SCOPE'
);
mjs = mjs.replaceAll(
  '“Engineered for Solo Businesses, Startups, MSMEs, B2B Organizations, Enterprises, and Large Institutions. The architecture adapts to organizational complexity with zero one-size-fits-all assumptions.”',
  '“Engineered for Solo Businesses, Small Businesses, MSMEs, Startups, B2B Companies, Growing Organizations, and Enterprises. We design around actual operational workflows rather than assuming every business operates identically.”'
);

mjs = mjs.replaceAll(
  'SYSTEMS BUILT AROUND THE WAY BUSINESSES WORK.',
  'ACROSS INDUSTRIES. AROUND REAL WORKFLOWS.'
);
mjs = mjs.replaceAll(
  'FROM COMPLEXITY TO CLARITY.',
  'FROM IDEA TO DEPLOYED SYSTEM.'
);
mjs = mjs.replaceAll(
  'A rigorous six-phase engineering lifecycle: 01 Discover, 02 Diagnose, 03 Architect, 04 Build, 05 Deploy, and 06 Optimize.',
  'A disciplined six-stage deployment lifecycle: 01 Discover → 02 Design → 03 Build → 04 Integrate → 05 Deploy → 06 Optimize.'
);

mjs = mjs.replaceAll(
  'ENGINEERED FOR REAL-WORLD DEPLOYMENT.',
  'BUILDING OUR OWN TECHNOLOGY. BUILDING FOR CLIENTS.'
);
mjs = mjs.replaceAll(
  'Verified architecture blueprints and real-world deployment case studies in active development. Zero synthetic testimonials or fabricated metrics.',
  'NexAgent operates through a hybrid model: we develop custom software and automated workflows tailored to client specifications, while engineering reusable internal technology and software platforms for long-term scale.'
);
mjs = mjs.replaceAll(
  'CASE STUDIES IN DEVELOPMENT',
  'HYBRID TECHNOLOGY MODEL'
);

mjs = mjs.replaceAll(
  'A TECHNOLOGY GROUP BUILT FOR THE LONG TERM.',
  'THE PEOPLE BUILDING NEXAGENT.'
);
mjs = mjs.replaceAll(
  '“We are building NexAgent with the ambition to create a globally significant technology group — spanning technology, products, solutions, and future operating companies.”',
  '“Founded by two co-founders with equal ownership, NexAgent is being built around a simple principle: use technology to remove unnecessary complexity from the way businesses operate. We are building NexAgent for the long term with global ambition.”'
);

mjs = mjs.replaceAll(
  'WHAT COULD YOUR BUSINESS RUN BETTER?',
  'READY TO BUILD A BETTER SYSTEM?'
);

// Save updated files
fs.writeFileSync(publicIndexPath, html, 'utf8');
fs.writeFileSync(rootIndexPath, html, 'utf8');
fs.writeFileSync(framerMjsPath, mjs, 'utf8');

console.log('Successfully refactored Homepage to Version 2 narrative!');
console.log('New public/index.html length:', html.length);
console.log('New framer mjs length:', mjs.length);
