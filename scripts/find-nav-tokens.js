const fs = require('fs');
const files = [
  'public/framer/p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs',
  'public/framer/script_main.D6HV3VbD.mjs',
  'public/framer/cFpEMf3gw.Bj_FjBsd.mjs'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('\n=== In file:', f);
  ['Autonomous AI Systems', 'Explore Architecture', 'Features', 'Update', 'Pricing'].forEach(t => {
    let idx = 0;
    while ((idx = content.indexOf(t, idx)) !== -1) {
      console.log(`  [${t}] at ${idx}: ${content.substring(Math.max(0, idx - 40), Math.min(content.length, idx + t.length + 40))}`);
      idx += t.length;
    }
  });
});
