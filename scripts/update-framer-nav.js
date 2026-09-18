const fs = require('fs');
const path = require('path');

const p6Path = path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs');
const cFpPath = path.join(__dirname, '..', 'public', 'framer', 'cFpEMf3gw.Bj_FjBsd.mjs');
const scriptMainPath = path.join(__dirname, '..', 'public', 'framer', 'script_main.D6HV3VbD.mjs');

// 1. Update p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs
let p6 = fs.readFileSync(p6Path, 'utf8');
p6 = p6.replaceAll('Autonomous AI Systems', 'BUILDING INTELLIGENT SYSTEMS');
fs.writeFileSync(p6Path, p6, 'utf8');
console.log('Updated p6 mjs!');

// 2. Update cFpEMf3gw.Bj_FjBsd.mjs
let cFp = fs.readFileSync(cFpPath, 'utf8');
cFp = cFp.replaceAll('Explore Architecture', 'Explore NexAgent');
fs.writeFileSync(cFpPath, cFp, 'utf8');
console.log('Updated cFp mjs!');

// 3. Update script_main.D6HV3VbD.mjs
let sm = fs.readFileSync(scriptMainPath, 'utf8');
sm = sm.replaceAll('Explore Architecture', 'Explore NexAgent');
sm = sm.replaceAll('`Features`', '`Technology`');
sm = sm.replaceAll('`Update`', '`Solutions`');
sm = sm.replaceAll('`Updates`', '`Solutions`');
sm = sm.replaceAll('`Pricing`', '`Industries`');
sm = sm.replaceAll('`Contact`', '`About`');

// Links in script_main.D6HV3VbD.mjs
// Route paths in Wr table:
// { path: '/price' } -> { path: '/industries' }
// { path: '/contact-us' } -> { path: '/about' }
// { path: '/update' } -> { path: '/solutions' }
sm = sm.replaceAll("path:`/price`", "path:`/industries`");
sm = sm.replaceAll("path:`/contact-us`", "path:`/book-a-strategy-call`");
sm = sm.replaceAll("path:`/update`", "path:`/solutions`");

fs.writeFileSync(scriptMainPath, sm, 'utf8');
console.log('Updated script_main mjs!');
