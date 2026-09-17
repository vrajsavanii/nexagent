const http = require('http');

async function testRateLimit() {
  console.log('\n--- Testing Rate Limiting on /api/strategy-call ---');
  let rejected = false;
  for (let i = 0; i < 15; i++) {
    const res = await new Promise((resolve) => {
      const req = http.request({
        hostname: 'localhost',
        port: 3000,
        path: '/api/strategy-call',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }, (r) => {
        let body = '';
        r.on('data', d => body += d);
        r.on('end', () => resolve({ status: r.statusCode, body }));
      });
      req.write(JSON.stringify({ name: 'Spam', email: 'spam@test.com', objective: 'Flooding requests' }));
      req.end();
    });

    if (res.status === 429) {
      console.log(`✓ Call #${i + 1} blocked with HTTP 429 Too Many Requests: ${JSON.parse(res.body).error}`);
      rejected = true;
      break;
    }
  }

  if (!rejected) {
    console.warn('Rate limiter did not trigger within 15 requests (check limit/window).');
  }
}

testRateLimit().catch(console.error);
