const fs = require('fs');
const path = require('path');

const framerDir = path.join(__dirname, '..', 'public', 'framer');
const modules = [
  'cFpEMf3gw.Bj_FjBsd.mjs',
  'py7H8bG7D._oUGzZFc.mjs',
  'kvjgLZBem.fXZluoJ4.mjs',
  'reBMZtYXO.BNspZYt-.mjs',
  'nUKvxOar0.BKtawVTQ.mjs',
  'P6vuD_vBi.Bu8Bzk6Z.mjs',
  'ybE8u3mXx.C-9okTZE.mjs',
  'augiA20Il.BaK4ngg3.mjs'
];

modules.forEach(mod => {
  const file = path.join(framerDir, mod);
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${mod} (${content.length} bytes) ===================`);
  // Find strings
  const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
  let m;
  const found = new Set();
  while ((m = strRegex.exec(content)) !== null) {
    const s = m[1] || m[2] || m[3] || '';
    if (s.length > 8 && /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/.test(s) && !s.includes('matrix(') && !s.includes('linear-gradient') && !s.includes('calc(') && !s.includes('var(')) {
      found.add(s.trim().slice(0, 100));
    }
  }
  for (const t of Array.from(found).slice(0, 15)) {
    console.log(' *', t);
  }
});
