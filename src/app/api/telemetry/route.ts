import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/security';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const rateCheck = checkRateLimit(`telemetry:${ip}`, 60, 60 * 1000);
  if (!rateCheck.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded.' }, { status: 429 });
  }

  const telemetryData = {
    systemStatus: 'NOMINAL',
    globalMeshUptime: '99.98%',
    activeAgentClusters: 3420,
    edgeLatency: {
      sanFrancisco: '12ms',
      london: '18ms',
      dubai: '24ms',
      bengaluru: '28ms',
    },
    transactionThroughput: '14,890 events/sec',
    activeDispatchesToday: 182390,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(telemetryData);
}
