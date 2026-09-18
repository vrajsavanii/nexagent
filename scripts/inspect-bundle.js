const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '..', 'public', 'framer', 'p6xlo9HT3oj6JKRaUPjz1O4Lk3RBYvaK_8zDL27qVU8.ZS9-lyfH.mjs'), 'utf8');

const regex = /from\s*['"](\.[^'"]+)['"]/g;
let m;
const imports = [];
while ((m = regex.exec(code)) !== null) {
  imports.push(m[1]);
}
console.log('Total imports:', imports.length);
imports.forEach(imp => console.log(imp));
