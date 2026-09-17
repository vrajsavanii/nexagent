/**
 * OpenSEO Site Audit & GEO Content Optimization Engine
 * Runs a full-site technical, semantic, structured data, and GEO audit against the live application.
 */

const BASE_URL = 'http://localhost:3000';

async function fetchPage(url) {
  const start = Date.now();
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'OpenSEO-Auditor/2.0' } });
    const text = await res.text();
    const duration = Date.now() - start;
    return { status: res.status, headers: res.headers, html: text, duration };
  } catch (err) {
    return { status: 0, error: err.message, duration: Date.now() - start };
  }
}

function parseRobots(txt) {
  const rules = [];
  const lines = txt.split('\n');
  for (const line of lines) {
    const clean = line.trim();
    if (!clean || clean.startsWith('#')) continue;
    const [directive, value] = clean.split(':').map(s => s.trim());
    if (directive && value) {
      rules.push({ directive: directive.toLowerCase(), value });
    }
  }
  return rules;
}

function parseSitemap(xml) {
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function runAudit() {
  console.log('\n============================================================');
  console.log('       OPENSEO FULL-SITE TECHNICAL & GEO CONTENT AUDIT       ');
  console.log('============================================================\n');

  const report = {
    totalUrlsChecked: 0,
    passedChecks: 0,
    warnings: [],
    errors: [],
    pages: {},
  };

  // 1. Audit Robots.txt
  console.log('🔍 [1/6] Auditing robots.txt...');
  const robotsRes = await fetchPage(`${BASE_URL}/robots.txt`);
  if (robotsRes.status !== 200) {
    report.errors.push(`robots.txt returned HTTP status ${robotsRes.status}`);
  } else {
    report.passedChecks++;
    const rules = parseRobots(robotsRes.html);
    const hasSitemap = rules.some(r => r.directive === 'sitemap');
    const allowsRoot = rules.some(r => r.directive === 'allow' && r.value === '/');
    const disallowsAdmin = rules.some(r => r.directive === 'disallow' && r.value === '/admin');

    if (!hasSitemap) report.warnings.push('robots.txt missing Sitemap directive');
    else report.passedChecks++;

    if (!allowsRoot) report.warnings.push('robots.txt does not explicitly allow root (/)');
    else report.passedChecks++;

    if (!disallowsAdmin) report.warnings.push('robots.txt does not protect /admin route');
    else report.passedChecks++;

    console.log(`   ✓ robots.txt parsed (${rules.length} directives found).`);
  }

  // 2. Audit XML Sitemap
  console.log('\n🔍 [2/6] Auditing sitemap.xml...');
  const sitemapRes = await fetchPage(`${BASE_URL}/sitemap.xml`);
  let sitemapUrls = [];
  if (sitemapRes.status !== 200) {
    report.errors.push(`sitemap.xml returned HTTP status ${sitemapRes.status}`);
  } else {
    report.passedChecks++;
    sitemapUrls = parseSitemap(sitemapRes.html);
    console.log(`   ✓ sitemap.xml valid: ${sitemapUrls.length} canonical URLs discovered.`);
    if (sitemapUrls.length < 5) {
      report.warnings.push(`Sitemap has fewer than 5 URLs (found ${sitemapUrls.length})`);
    } else {
      report.passedChecks++;
    }
  }

  // 3. Crawl and Deep-Audit Every Route
  console.log('\n🔍 [3/6] Crawling & Auditing Indexable & System Pages...');
  const routesToTest = [
    '/',
    '/about',
    '/solutions',
    '/technology',
    '/companies',
    '/ventures',
    '/ecosystem',
    '/model-010',
    '/core',
    '/contact',
    '/book-a-strategy-call',
    '/admin/leads',
    '/unmapped-404-check',
  ];

  const seenTitles = new Map();
  const seenDescriptions = new Map();

  for (const path of routesToTest) {
    const is404Test = path.includes('404');
    const isAdmin = path.startsWith('/admin');
    const expectedStatus = is404Test ? 404 : 200;

    const res = await fetchPage(`${BASE_URL}${path}`);
    report.totalUrlsChecked++;

    const pageResult = {
      path,
      status: res.status,
      durationMs: res.duration,
      checks: [],
      warnings: [],
      errors: [],
    };

    // Status check
    if (res.status !== expectedStatus) {
      pageResult.errors.push(`Expected HTTP ${expectedStatus}, got ${res.status}`);
      report.errors.push(`${path}: HTTP ${res.status}`);
    } else {
      pageResult.checks.push(`HTTP Status ${res.status} OK`);
      report.passedChecks++;
    }

    if (is404Test) {
      // 404 specific checks
      if (!res.html.includes("THIS PATH DOESN'T EXIST.")) {
        pageResult.errors.push('404 page missing required headline: "THIS PATH DOESN\'T EXIST."');
        report.errors.push('404 headline mismatch');
      } else {
        pageResult.checks.push('404 Headline matches specification');
        report.passedChecks++;
      }
      if (!res.html.includes('Back to NexAgent')) {
        pageResult.warnings.push('404 page missing "Back to NexAgent" CTA');
        report.warnings.push('404 CTA mismatch');
      } else {
        pageResult.checks.push('404 CTA matches specification');
        report.passedChecks++;
      }
      report.pages[path] = pageResult;
      continue;
    }

    // Title tag check
    const titleMatch = res.html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : '';
    if (!title) {
      pageResult.errors.push('Missing <title> tag');
      report.errors.push(`${path}: Missing <title>`);
    } else {
      pageResult.checks.push(`Title (${title.length} chars): "${title}"`);
      report.passedChecks++;

      // Length recommendation (30-65 chars)
      if (title.length < 25) {
        pageResult.warnings.push(`Title may be too short (${title.length} chars)`);
      } else if (title.length > 70) {
        pageResult.warnings.push(`Title may be slightly long (${title.length} chars)`);
      } else {
        report.passedChecks++;
      }

      // Title uniqueness
      if (seenTitles.has(title) && !isAdmin) {
        pageResult.errors.push(`Duplicate title matches ${seenTitles.get(title)}`);
        report.errors.push(`Duplicate title between ${path} and ${seenTitles.get(title)}`);
      } else {
        seenTitles.set(title, path);
        report.passedChecks++;
      }
    }

    // Meta Description check
    const descMatch = res.html.match(/<meta name="description" content="([^"]*)"/i);
    const desc = descMatch ? descMatch[1] : '';
    if (!desc && !isAdmin) {
      pageResult.errors.push('Missing meta description');
      report.errors.push(`${path}: Missing meta description`);
    } else if (desc) {
      pageResult.checks.push(`Meta Description (${desc.length} chars)`);
      report.passedChecks++;

      if (!isAdmin && seenDescriptions.has(desc)) {
        pageResult.warnings.push(`Duplicate meta description matches ${seenDescriptions.get(desc)}`);
      } else if (!isAdmin) {
        seenDescriptions.set(desc, path);
        report.passedChecks++;
      }
    }

    // Canonical link check
    const canonicalMatch = res.html.match(/<link rel="canonical" href="([^"]*)"/i);
    if (!canonicalMatch && !isAdmin) {
      pageResult.errors.push('Missing canonical tag');
      report.errors.push(`${path}: Missing canonical tag`);
    } else if (canonicalMatch) {
      const canonical = canonicalMatch[1];
      pageResult.checks.push(`Canonical URL: ${canonical}`);
      report.passedChecks++;
    }

    // Robots meta check
    const robotsMatch = res.html.match(/<meta name="robots" content="([^"]*)"/i);
    if (isAdmin) {
      if (!robotsMatch || !robotsMatch[1].includes('noindex')) {
        pageResult.errors.push('Admin route MUST have noindex robots directive');
        report.errors.push('/admin/leads missing noindex');
      } else {
        pageResult.checks.push(`Admin route isolated with ${robotsMatch[1]}`);
        report.passedChecks++;
      }
    } else {
      if (robotsMatch && robotsMatch[1].includes('noindex')) {
        pageResult.errors.push('Public page accidentally has noindex directive!');
        report.errors.push(`${path} has accidental noindex`);
      } else {
        report.passedChecks++;
      }
    }

    // Heading hierarchy check (H1)
    const h1Matches = [...res.html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1Matches.length === 0) {
      pageResult.errors.push('Missing <h1> tag');
      report.errors.push(`${path}: Missing <h1>`);
    } else if (h1Matches.length > 1) {
      pageResult.warnings.push(`Multiple <h1> tags found (${h1Matches.length})`);
      report.warnings.push(`${path}: Multiple <h1> tags (${h1Matches.length})`);
    } else {
      const h1Text = h1Matches[0][1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      pageResult.checks.push(`Exactly 1 <h1>: "${h1Text}"`);
      report.passedChecks++;
    }

    // Image alt text audit
    const imgMatches = [...res.html.matchAll(/<img([^>]*)>/gi)];
    let missingAlt = 0;
    imgMatches.forEach(img => {
      const attr = img[1];
      if (!attr.includes('alt=') || attr.includes('alt=""') && !attr.includes('aria-hidden="true"')) {
        missingAlt++;
      }
    });
    if (missingAlt > 0) {
      pageResult.warnings.push(`${missingAlt} image(s) missing descriptive alt attributes`);
    } else {
      pageResult.checks.push(`All ${imgMatches.length} <img> tags have alt attributes`);
      report.passedChecks++;
    }

    // Schema.org Structured Data (JSON-LD)
    const scriptMatches = [...res.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
    if (scriptMatches.length === 0 && !isAdmin) {
      pageResult.warnings.push('No JSON-LD structured data detected');
    } else {
      const parsedTypes = [];
      scriptMatches.forEach(sm => {
        try {
          const parsed = JSON.parse(sm[1]);
          if (parsed['@graph']) {
            parsed['@graph'].forEach(g => parsedTypes.push(g['@type']));
          } else if (parsed['@type']) {
            parsedTypes.push(parsed['@type']);
          }
        } catch (e) {
          pageResult.errors.push('JSON-LD syntax parse error');
        }
      });
      pageResult.checks.push(`Structured Data: ${parsedTypes.join(', ')}`);
      report.passedChecks++;
    }

    // OpenGraph & Twitter tags
    const hasOgTitle = res.html.includes('property="og:title"');
    const hasOgDesc = res.html.includes('property="og:description"');
    const hasTwitterCard = res.html.includes('name="twitter:card"');
    if (hasOgTitle && hasOgDesc && hasTwitterCard) {
      pageResult.checks.push('Complete OpenGraph & Twitter Card tags');
      report.passedChecks++;
    } else if (!isAdmin) {
      pageResult.warnings.push('Incomplete OpenGraph / Twitter tags');
    }

    report.pages[path] = pageResult;
  }

  // 4. GEO Content & Topical Authority Verification
  console.log('\n🔍 [4/6] Auditing GEO Entity Clarity & Answer-First Architecture...');
  const homeRes = await fetchPage(`${BASE_URL}/`);
  const geoChecks = [
    {
      term: 'Canonical Entity Definition',
      pattern: /NexAgent is a global technology group building AI-powered software/i,
    },
    {
      term: 'Hybrid Model (Own Products + Custom Technology Systems)',
      pattern: /OWN PRODUCTS[\s\S]*?CUSTOM TECHNOLOGY SYSTEMS/i,
    },
    {
      term: 'Global Operational Hubs (US, UK, UAE, India)',
      pattern: /United States[\s\S]*?United Kingdom[\s\S]*?United Arab Emirates[\s\S]*?India/i,
    },
    {
      term: 'FAQ / Knowledge Base Questions',
      pattern: /What is NexAgent\?[\s\S]*?What does NexAgent do\?/i,
    },
    {
      term: '3D WebGL Semantic HTML Fallback',
      pattern: /NexAgent Core 3D engine: Interactive representation of connected business systems/i,
    },
    {
      term: 'Business OS Connected Matrix Fallback',
      pattern: /Connected business systems including CRM, sales, marketing/i,
    },
  ];

  geoChecks.forEach(gc => {
    if (gc.pattern.test(homeRes.html)) {
      console.log(`   ✓ GEO Check Passed: ${gc.term}`);
      report.passedChecks++;
    } else {
      console.log(`   ✗ GEO Check Failed: ${gc.term}`);
      report.warnings.push(`GEO validation: ${gc.term} not found in HTML`);
    }
  });

  // 5. Calculate OpenSEO Quality Score
  console.log('\n🔍 [5/6] Computing OpenSEO Quality Index...');
  const totalWeight = report.passedChecks + report.warnings.length * 0.5 + report.errors.length * 3;
  const score = Math.max(0, Math.min(100, Math.round((report.passedChecks / (totalWeight || 1)) * 100)));

  console.log('\n============================================================');
  console.log(`              OPENSEO AUDIT SCORE: ${score}/100             `);
  console.log('============================================================');
  console.log(`✓ Passed Validations : ${report.passedChecks}`);
  console.log(`⚠ Warnings           : ${report.warnings.length}`);
  console.log(`✗ Critical Errors    : ${report.errors.length}`);

  if (report.warnings.length > 0) {
    console.log('\n--- AUDIT WARNINGS ---');
    report.warnings.forEach(w => console.log(` • ${w}`));
  }

  if (report.errors.length > 0) {
    console.log('\n--- CRITICAL ERRORS ---');
    report.errors.forEach(e => console.log(` ✗ ${e}`));
  }

  console.log('\n--- ROUTE BREAKDOWN ---');
  for (const [path, data] of Object.entries(report.pages)) {
    const icon = data.errors.length > 0 ? '❌' : (data.warnings.length > 0 ? '⚠️' : '✅');
    console.log(`${icon} ${path} [${data.status}] (${data.durationMs}ms)`);
    data.checks.forEach(c => console.log(`     - ${c}`));
    data.warnings.forEach(w => console.log(`     ⚠ ${w}`));
    data.errors.forEach(e => console.log(`     ✗ ${e}`));
  }
}

runAudit();
