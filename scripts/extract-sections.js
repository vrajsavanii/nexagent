const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');

// Find all section elements or data-framer-name
const sectionRegex = /<section[^>]*data-framer-name="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
let m;
while ((m = sectionRegex.exec(html)) !== null) {
  const name = m[1];
  const body = m[2];
  console.log(`\n=================== Section: ${name} ===================`);
  // Extract h1, h2, h3, p tags
  const textMatches = body.match(/<(h[1-6]|p)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
  const cleanTexts = textMatches.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 0);
  console.log(cleanTexts.slice(0, 8).join('\n  --- '));
}
