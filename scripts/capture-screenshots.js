const { chromium } = require('playwright');
const path = require('path');

const artifactDir = 'C:\\Users\\vrajs\\.gemini\\antigravity-ide\\brain\\4c9269ac-7298-4e77-b419-b2b2a2012606';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_homepage.png') });

  console.log('Navigating to technology...');
  await page.goto('http://localhost:3000/technology', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_technology.png') });

  console.log('Navigating to solutions...');
  await page.goto('http://localhost:3000/solutions', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_solutions.png') });

  console.log('Navigating to industries...');
  await page.goto('http://localhost:3000/industries', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_industries.png') });

  console.log('Navigating to products...');
  await page.goto('http://localhost:3000/products', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_products.png') });

  console.log('Navigating to faq...');
  await page.goto('http://localhost:3000/faq', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(artifactDir, 'screenshot_faq.png') });

  await browser.close();
  console.log('All screenshots captured successfully!');
})();
