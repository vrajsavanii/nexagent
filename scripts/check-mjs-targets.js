const fs = require('fs');
const path = require('path');

const framerDir = path.join(__dirname, '..', 'public', 'framer');
const files = fs.readdirSync(framerDir).filter(f => f.endsWith('.mjs'));

const targets = [
  'Autonomous AI Engine',
  'Built To Scale Enterprise Ops',
  'NexAgent engineers custom autonomous agents',
  'Trusted by Hundreds',
  'Marcus Sterling',
  'Apex Capital',
  'Engineered for High-Velocity Execution',
  'Elena Rostova',
  'Vantage Scale',
  'Simple. Structured. Scalable.',
  'Work That Speaks for Itself',
  'VitalPath',
  'Predictable Plans. Proven ROI.'
];

targets.forEach(target => {
  const matchingFiles = [];
  files.forEach(f => {
    const content = fs.readFileSync(path.join(framerDir, f), 'utf8');
    if (content.includes(target)) {
      matchingFiles.push(f);
    }
  });
  console.log(`${target} -> found in [${matchingFiles.join(', ')}]`);
});
