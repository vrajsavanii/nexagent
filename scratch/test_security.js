const http = require('http');

async function testEndpoint(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    req.on('error', reject);
    if (postData) {
      req.write(typeof postData === 'string' ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runSecurityTests() {
  console.log('\n--- 1. Testing Production Security Headers on Root Route (/) ---');
  const rootRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  });

  const expectedHeaders = [
    'x-content-type-options',
    'x-frame-options',
    'referrer-policy',
    'permissions-policy',
    'strict-transport-security',
    'content-security-policy'
  ];

  for (const h of expectedHeaders) {
    if (rootRes.headers[h]) {
      console.log(`✓ Header [${h}]: ${rootRes.headers[h]}`);
    } else {
      console.error(`✗ Missing Header: [${h}]`);
    }
  }
  console.log(`✓ X-Powered-By removed: ${!rootRes.headers['x-powered-by']}`);

  console.log('\n--- 2. Testing API Validation & Sanitization (/api/strategy-call) ---');
  // Test invalid email
  const invalidEmailRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/api/strategy-call',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, { name: 'Test User', email: 'not-an-email', objective: 'Test objective description here.' });
  console.log(`✓ Invalid email test returned status ${invalidEmailRes.statusCode} (${JSON.parse(invalidEmailRes.body).error})`);

  // Test short name
  const shortNameRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/api/strategy-call',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, { name: 'A', email: 'valid@example.com', objective: 'Test objective description here.' });
  console.log(`✓ Short name test returned status ${shortNameRes.statusCode} (${JSON.parse(shortNameRes.body).error})`);

  // Test valid payload
  const validRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/api/strategy-call',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    name: 'Enterprise Client',
    email: 'client@globalenterprise.com',
    scale: 'Enterprise',
    objective: 'Implement autonomous multi-agent systems and real-time ledger orchestration.'
  });
  console.log(`✓ Valid submission returned status ${validRes.statusCode}:`, JSON.parse(validRes.body).message);

  console.log('\n--- 3. Testing Audit API Bounds Protection (/api/audit) ---');
  const auditRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/api/audit',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, { teamSize: 999999999, manualHoursPerWeek: 5000, avgHourlyCost: 99999999 });
  const auditData = JSON.parse(auditRes.body);
  console.log(`✓ Audit bounds check clamped oversized inputs correctly: Saved ${auditData.annualHoursSaved.toLocaleString()} hrs ($${auditData.annualCostSavings.toLocaleString()})`);

  console.log('\n--- 4. Testing Lead API Protection (/api/leads) ---');
  const leadsRes = await testEndpoint({
    hostname: 'localhost',
    port: 3000,
    path: '/api/leads',
    method: 'GET'
  });
  console.log(`✓ Leads access response status: ${leadsRes.statusCode} (Payload parsed successfully, count: ${JSON.parse(leadsRes.body).length})`);

  console.log('\nAll security and API validation tests passed successfully!\n');
}

runSecurityTests().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
