const fs = require('fs');
const path = require('path');

const py7Path = path.join(__dirname, '..', 'public', 'framer', 'py7H8bG7D._oUGzZFc.mjs');
let py7 = fs.readFileSync(py7Path, 'utf8');

console.log('py7 length:', py7.length);

const badStrings = [
  'Luka Blmor',
  'Michael Chen',
  'We’re hiring!',
  "We're hiring!",
  'We are actively looking for new Employees',
  'Send CV',
];

for (const s of badStrings) {
  console.log(`'${s}' in py7:`, py7.includes(s));
}

// Clean up py7
py7 = py7.replaceAll('Luka Blmor', 'Vraj Savani');
py7 = py7.replaceAll('Founder / CEO', 'Co-Founder (Equal Ownership)');
py7 = py7.replaceAll('Michael Chen', 'Technical Lead');
py7 = py7.replaceAll('Marketing Director, Global Startup', 'Co-Founder & Systems Architect');
py7 = py7.replaceAll('We’re hiring!', 'BUILT FOR THE LONG TERM.');
py7 = py7.replaceAll("We're hiring!", 'BUILT FOR THE LONG TERM.');
py7 = py7.replaceAll('We are actively looking for new Employees', 'Building scalable technology and internal platforms for long-term global growth.');
py7 = py7.replaceAll('Send CV', 'Explore Vision');

fs.writeFileSync(py7Path, py7, 'utf8');
console.log('Updated py7H8bG7D._oUGzZFc.mjs successfully!');
