const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs'), 'utf8');

function findContext(phrase, charCount = 200) {
  const idx = code.indexOf(phrase);
  if (idx === -1) {
    console.log(`NOT FOUND: ${phrase}`);
    return;
  }
  console.log(`\n=== FOUND: "${phrase}" at index ${idx} ===`);
  console.log(code.substring(Math.max(0, idx - 100), Math.min(code.length, idx + phrase.length + charCount)));
}

findContext('Autonomous AI Engine');
findContext('Built To Scale Enterprise Ops');
findContext('NexAgent engineers custom autonomous agents');
findContext('Trusted by Hundreds');
findContext('Marcus Sterling');
findContext('Engineered for High-Velocity Execution');
findContext('Elena Rostova');
findContext('Simple. Structured. Scalable.');
findContext('Work That Speaks for Itself');
findContext('VitalPath');
findContext('What exactly do you do?');
