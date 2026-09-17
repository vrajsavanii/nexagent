import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/security';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(`audit:${ip}`, 30, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again shortly.' },
        { status: 429 }
      );
    }

    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    const rawTeam = Number(body.teamSize);
    const rawHours = Number(body.manualHoursPerWeek);
    const rawCost = Number(body.avgHourlyCost);

    const teamSize = Number.isFinite(rawTeam) && rawTeam > 0 ? Math.min(Math.round(rawTeam), 100000) : 50;
    const manualHoursPerWeek = Number.isFinite(rawHours) && rawHours > 0 ? Math.min(Math.round(rawHours), 80) : 10;
    const avgHourlyCost = Number.isFinite(rawCost) && rawCost > 0 ? Math.min(Math.round(rawCost), 5000) : 60;

    // 50 working weeks/year, assuming NexAgent automates ~68% of routine manual workflows
    const totalAnnualManualHours = teamSize * manualHoursPerWeek * 50;
    const annualHoursSaved = Math.round(totalAnnualManualHours * 0.68);
    const annualCostSavings = Math.round(annualHoursSaved * avgHourlyCost);

    let multiplier = '3.8x';
    if (teamSize > 200) multiplier = '5.4x';
    if (teamSize > 1000) multiplier = '7.2x';

    const recommendedNodes = [
      'Autonomous CRM Triage Engine',
      'Deterministic Back-Office Event Orchestrator',
      'Sub-Second Ambient Voice Dispatcher',
      'Real-Time Predictive Ledger Reconciler',
    ];

    return NextResponse.json({
      annualHoursSaved,
      annualCostSavings,
      productivityMultiplier: multiplier,
      recommendedNodes,
    });
  } catch {
    return NextResponse.json({ error: 'Audit calculation failed.' }, { status: 500 });
  }
}
