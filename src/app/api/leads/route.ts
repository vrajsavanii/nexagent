import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { checkRateLimit, getClientIp } from '@/lib/security';

export const dynamic = 'force-dynamic';

const dataFilePath = path.join(process.cwd(), 'data', 'bookings.json');

export async function GET(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(`leads-access:${ip}`, 60, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
    }

    // Security check: Protect lead data from unauthorized external scraping
    const authHeader = request.headers.get('authorization') || request.headers.get('x-admin-key') || '';
    const adminSecret = process.env.ADMIN_SECRET_KEY;

    // If an admin secret is configured in environment, strictly enforce it
    if (adminSecret && authHeader !== `Bearer ${adminSecret}` && authHeader !== adminSecret) {
      return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
    }

    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json([]);
    }
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    if (!content.trim()) {
      return NextResponse.json([]);
    }
    const bookings = JSON.parse(content);
    return NextResponse.json(bookings);
  } catch {
    return NextResponse.json({ error: 'Failed to retrieve records.' }, { status: 500 });
  }
}
