const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs'), 'utf8');

// Find all text within quotes longer than 15 chars that look like natural language
const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
let m;
const sentences = new Set();
while ((m = strRegex.exec(code)) !== null) {
  const str = m[1] || m[2] || m[3] || '';
  if (str.length > 20 && /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/.test(str) && !str.includes('var(') && !str.includes('matrix(') && !str.includes('http') && !str.includes('linear-gradient')) {
    sentences.add(str.trim());
  }
}
console.log('Found sentences:', sentences.size);
for (const s of Array.from(sentences).slice(0, 50)) {
  console.log('-', s);
}
