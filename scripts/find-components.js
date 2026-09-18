const fs = require('fs');
const path = require('path');

const framerDir = path.join(__dirname, '..', 'public', 'framer');
const files = fs.readdirSync(framerDir).filter(f => f.endsWith('.mjs'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(framerDir, f), 'utf8');
  // Match framerName, or title strings
  const names = [];
  const nameRegex = /data-framer-name="([^"]+)"/g;
  let m;
  while ((m = nameRegex.exec(content)) !== null) {
    if (!names.includes(m[1])) names.push(m[1]);
  }
  if (names.length > 0) {
    console.log(`=== ${f} ===`);
    console.log(names.slice(0, 10).join(', '));
  }
});
