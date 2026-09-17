import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { checkRateLimit, getClientIp, sanitizeText, isValidEmail } from '@/lib/security';
import {
  CrmLeadPayload,
  classifyLeadCategory,
  determineRoutingWorkflow,
  computeQualificationScore,
  dispatchToCrm,
} from '@/lib/crm';

export const dynamic = 'force-dynamic';

const dataDir = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataDir, 'bookings.json');

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
  }
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    // Rate limit: 10 requests per 15 minutes per IP
    const rateCheck = checkRateLimit(`strategy-call:${ip}`, 10, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting again.' },
        { status: 429 }
      );
    }

    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    // Sanitize contact fields
    const rawName = sanitizeText(body.name, 100);
    const rawEmail = sanitizeText(body.email, 100).toLowerCase();
    const rawCompany = sanitizeText(body.company, 120) || 'Undisclosed Enterprise';
    const rawWebsite = sanitizeText(body.website, 150);
    const rawCountry = sanitizeText(body.country, 80) || 'Global';
    const rawCompanySize = sanitizeText(body.companySize || body.scale, 60) || 'Enterprise';

    // Sanitize inquiry & qualification fields
    const rawSolution = sanitizeText(body.solution, 100) || 'AI Automation';
    const rawObjective = sanitizeText(body.objective || body.context || body.message || body.notes, 1200);
    const rawPreferredStep = sanitizeText(body.preferredNextStep || body.preferredStep, 80) || 'Strategy Call';

    // Attribution fields
    const attr = body.attribution || {};
    const rawAttribution = {
      landingPage: sanitizeText(attr.landingPage || attr.firstPage, 200),
      conversionPage: sanitizeText(attr.conversionPage || attr.lastPage || body.conversionPage, 200),
      ctaSource: sanitizeText(attr.ctaSource || body.ctaSource, 100),
      utmSource: sanitizeText(attr.utmSource || attr.utm_source, 100),
      utmMedium: sanitizeText(attr.utmMedium || attr.utm_medium, 100),
      utmCampaign: sanitizeText(attr.utmCampaign || attr.utm_campaign, 100),
      referrer: sanitizeText(attr.referrer, 300),
    };

    // Validations
    if (!rawName || rawName.length < 2) {
      return NextResponse.json(
        { error: 'A valid name of at least 2 characters is required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(rawEmail)) {
      return NextResponse.json(
        { error: 'A valid corporate email address is required.' },
        { status: 400 }
      );
    }

    const CONSUMER_DOMAINS = new Set([
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com', 'mail.ru'
    ]);
    const emailDomain = rawEmail.split('@')[1]?.toLowerCase();
    if (CONSUMER_DOMAINS.has(emailDomain)) {
      return NextResponse.json(
        { error: 'A valid corporate work email address is required (e.g. name@company.com).' },
        { status: 400 }
      );
    }

    if (!rawObjective || rawObjective.length < 5) {
      return NextResponse.json(
        { error: 'Please provide at least a brief description of what you are seeking to build or improve.' },
        { status: 400 }
      );
    }

    ensureDataFile();

    // Generate unique Lead Dispatch ID
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const leadId = `NEX-${randomHex}`;

    // Compute classification, routing, and qualification
    const category = classifyLeadCategory(rawSolution, rawPreferredStep, rawObjective);
    const workflow = determineRoutingWorkflow(category, rawCompanySize, rawSolution);
    const qualificationScore = computeQualificationScore(rawCompanySize, rawSolution, rawObjective);

    let recommendedTier = 'Enterprise Sovereign Ring';
    let deploymentEstimate = '2–4 Weeks Rapid Dispatch';

    if (rawCompanySize.includes('Solo') || rawCompanySize.includes('Small')) {
      recommendedTier = 'Specialized Modular Architecture';
      deploymentEstimate = '5–7 Business Days';
    } else if (rawCompanySize.includes('Startup') || rawCompanySize.includes('MSME')) {
      recommendedTier = 'AI-Native Stack // Tier 04';
      deploymentEstimate = '1–2 Weeks';
    } else if (rawCompanySize.includes('Scaleup') || rawCompanySize.includes('Unicorn')) {
      recommendedTier = 'Multi-Region Mesh // Tier 05';
      deploymentEstimate = '2 Weeks';
    } else if (rawCompanySize.includes('Enterprise')) {
      recommendedTier = 'Enterprise Sovereign Ring // Tier 06';
      deploymentEstimate = 'Phased Continuous Integration';
    }

    const leadPayload: CrmLeadPayload = {
      leadId,
      createdAt: new Date().toISOString(),
      category,
      workflow,
      contact: {
        name: rawName,
        email: rawEmail,
        company: rawCompany,
        website: rawWebsite || undefined,
        country: rawCountry,
        companySize: rawCompanySize,
      },
      inquiry: {
        solution: rawSolution,
        objective: rawObjective,
        preferredNextStep: rawPreferredStep,
      },
      attribution: rawAttribution,
      qualificationScore,
      recommendedTier,
      deploymentEstimate,
      status: 'ROUTED',
    };

    // Forward to CRM asynchronously if configured
    await dispatchToCrm(leadPayload);

    // Persist to secure storage ledger (with backward compatibility for older admin view fields)
    let currentBookings: any[] = [];
    try {
      const fileData = fs.readFileSync(dataFilePath, 'utf-8');
      currentBookings = JSON.parse(fileData);
    } catch {
      currentBookings = [];
    }

    // Maintain both structured and flat properties for backwards compatibility
    const record = {
      ...leadPayload,
      bookingId: leadId,
      name: rawName,
      email: rawEmail,
      scale: rawCompanySize,
      solution: rawSolution,
      routedWorkflow: workflow,
      category,
      objective: `[${rawSolution}] ${rawObjective}`,
    };

    currentBookings.unshift(record);
    fs.writeFileSync(dataFilePath, JSON.stringify(currentBookings.slice(0, 1000), null, 2));

    return NextResponse.json({
      success: true,
      bookingId: leadId,
      status: 'RECEIVED',
      category,
      workflow,
      qualificationScore,
      message: `Your request has been received. The NexAgent team will review the information and determine the appropriate next step.`,
      aiReadout: {
        qualificationScore,
        recommendedTier,
        deploymentEstimate,
      },
      calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || null,
    });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
