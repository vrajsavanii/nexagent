import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// ── Zod Schema (Prompt Bible §5) ──────────────────────────────────────────────
const LeadSchema = z.object({
  name:         z.string().min(2,  'Name must be at least 2 characters'),
  email:        z.string().email('Invalid email address'),
  organization: z.string().min(1,  'Organization is required'),
  useCase:      z.string().min(1,  'Use case is required'),
  details:      z.string().max(1500).optional().default(''),
  source:       z.string().optional().default('strategy-call-modal'),
});

type LeadPayload = z.infer<typeof LeadSchema>;

// ── Resend email helper ───────────────────────────────────────────────────────
async function sendLeadEmail(data: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[api/lead] RESEND_API_KEY not set — skipping email');
    return;
  }

  const to = process.env.LEAD_EMAIL_TO ?? 'team@nexagent.io';
  const from = process.env.LEAD_EMAIL_FROM ?? 'leads@nexagent.io';

  const html = `
    <h2 style="font-family:sans-serif;margin-bottom:16px;">New Demo Request — NexAgent</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600;width:140px">Name</td><td style="padding:6px 12px">${data.name}</td></tr>
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Email</td><td style="padding:6px 12px">${data.email}</td></tr>
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Organization</td><td style="padding:6px 12px">${data.organization}</td></tr>
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Use Case</td><td style="padding:6px 12px">${data.useCase}</td></tr>
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Details</td><td style="padding:6px 12px">${data.details || '—'}</td></tr>
      <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Source</td><td style="padding:6px 12px">${data.source}</td></tr>
    </table>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject: `[NexAgent Lead] ${data.name} — ${data.organization}`, html }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('[api/lead] Resend error:', text);
  }
}

// ── Slack webhook helper ──────────────────────────────────────────────────────
async function sendSlackNotification(data: LeadPayload) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('[api/lead] SLACK_WEBHOOK_URL not set — skipping Slack');
    return;
  }

  const payload = {
    text: '*New Demo Request — NexAgent* :rocket:',
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '🚀 New Demo Request — NexAgent', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${data.name}` },
          { type: 'mrkdwn', text: `*Email:*\n${data.email}` },
          { type: 'mrkdwn', text: `*Organization:*\n${data.organization}` },
          { type: 'mrkdwn', text: `*Use Case:*\n${data.useCase}` },
        ],
      },
      ...(data.details
        ? [{ type: 'section', text: { type: 'mrkdwn', text: `*Details:*\n${data.details}` } }]
        : []),
      {
        type: 'context',
        elements: [{ type: 'mrkdwn', text: `Source: \`${data.source}\` · ${new Date().toUTCString()}` }],
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error('[api/lead] Slack webhook error:', res.status);
  }
}

// ── Route Handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Fire integrations in parallel, don't throw if one fails
    await Promise.allSettled([
      sendLeadEmail(data),
      sendSlackNotification(data),
    ]);

    console.info('[api/lead] Lead captured:', { name: data.name, email: data.email, org: data.organization });

    return NextResponse.json(
      { success: true, message: 'Demo request received. Our team will reach out within 24 hours.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[api/lead] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
