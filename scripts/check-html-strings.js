const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');

const checks = [
  'Autonomous AI Engine v4.2 is live',
  'Intelligent Systems',
  'Built To Scale Enterprise Ops',
  'NexAgent engineers custom autonomous agents',
  'Book Strategy Call',
  'Explore Architecture',
  'Trusted by Hundreds',
  'Marcus Sterling',
  'Apex Capital',
  'BENEFITS',
  'Engineered for High-Velocity Execution',
  'FEATURES',
  'Elena Rostova',
  'Vantage Scale',
  'PROCESS',
  'PROJECTS',
  'VitalPath',
  'PRICING',
  'TEAM',
  'FAQ'
];

checks.forEach(c => {
  const count = (html.match(new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  console.log(`${c} -> ${count} occurrences`);
});
