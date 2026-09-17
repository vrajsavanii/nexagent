/**
 * NexAgent CRM-Ready Lead Architecture & Routing Engine
 * Clean abstraction layer categorizing and routing inbound executive leads.
 */

export type LeadCategory =
  | 'STRATEGY'
  | 'TECHNOLOGY'
  | 'PRODUCT'
  | 'PARTNERSHIP'
  | 'VENTURE'
  | 'GENERAL';

export type RoutingWorkflow =
  | 'Solutions / Automation workflow'
  | 'Software / Product workflow'
  | 'Enterprise / Strategic workflow'
  | 'Product workflow'
  | 'Partnerships workflow'
  | 'Ventures workflow'
  | 'General contact workflow';

export interface CrmLeadContact {
  name: string;
  email: string;
  company: string;
  website?: string;
  country?: string;
  companySize: string;
}

export interface CrmLeadInquiry {
  solution: string;
  objective: string;
  preferredNextStep: string;
}

export interface CrmLeadAttribution {
  landingPage?: string;
  conversionPage?: string;
  ctaSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

export interface CrmLeadPayload {
  leadId: string;
  createdAt: string;
  category: LeadCategory;
  workflow: RoutingWorkflow;
  contact: CrmLeadContact;
  inquiry: CrmLeadInquiry;
  attribution: CrmLeadAttribution;
  qualificationScore: number;
  recommendedTier: string;
  deploymentEstimate: string;
  status: 'NEW_UNQUALIFIED' | 'ROUTED' | 'DISPATCHED';
}

/**
 * Classify inbound lead into CRM category based on solution, objective, and preferred next step
 */
export function classifyLeadCategory(
  solution: string,
  preferredNextStep: string,
  objective: string = ''
): LeadCategory {
  const sol = solution.toLowerCase();
  const step = preferredNextStep.toLowerCase();
  const obj = objective.toLowerCase();

  if (sol.includes('venture') || step.includes('venture') || obj.includes('acquisition') || obj.includes('m&a') || obj.includes('capital')) {
    return 'VENTURE';
  }

  if (sol.includes('partnership') || step.includes('partnership') || obj.includes('partner') || obj.includes('alliance')) {
    return 'PARTNERSHIP';
  }

  if (sol.includes('model-010') || sol.includes('product') || step.includes('product') || sol.includes('saas')) {
    return 'PRODUCT';
  }

  if (sol.includes('cloud') || sol.includes('infrastructure') || sol.includes('custom technology') || step.includes('technical discussion')) {
    return 'TECHNOLOGY';
  }

  if (sol.includes('automation') || sol.includes('agent') || sol.includes('business process') || step.includes('strategy call')) {
    return 'STRATEGY';
  }

  return 'GENERAL';
}

/**
 * Determine the target routing workflow
 */
export function determineRoutingWorkflow(
  category: LeadCategory,
  companySize: string = '',
  solution: string = ''
): RoutingWorkflow {
  const size = companySize.toLowerCase();
  const sol = solution.toLowerCase();

  if (category === 'VENTURE') return 'Ventures workflow';
  if (category === 'PARTNERSHIP') return 'Partnerships workflow';
  if (category === 'PRODUCT') return 'Product workflow';

  if (size.includes('enterprise') || size.includes('scaleup') || size.includes('unicorn') || sol.includes('infrastructure')) {
    return 'Enterprise / Strategic workflow';
  }

  if (sol.includes('software') || sol.includes('saas')) {
    return 'Software / Product workflow';
  }

  if (sol.includes('automation') || sol.includes('agent')) {
    return 'Solutions / Automation workflow';
  }

  return 'General contact workflow';
}

/**
 * Calculate heuristic AI qualification score
 */
export function computeQualificationScore(
  companySize: string,
  solution: string,
  objective: string = ''
): number {
  let score = 75;

  const s = companySize.toLowerCase();
  if (s.includes('enterprise')) score += 18;
  else if (s.includes('scaleup') || s.includes('unicorn')) score += 14;
  else if (s.includes('startup') || s.includes('msme')) score += 8;

  const sol = solution.toLowerCase();
  if (sol.includes('automation') || sol.includes('agent') || sol.includes('cloud')) score += 5;

  const obj = objective.toLowerCase();
  if (obj.length > 50) score += 2;
  if (obj.includes('scale') || obj.includes('deploy') || obj.includes('architecture')) score += 3;

  return Math.min(Math.max(score, 60), 99);
}

/**
 * Pluggable CRM Dispatcher
 * Can be connected to HubSpot, Salesforce, or internal webhook via CRM_WEBHOOK_URL
 */
export async function dispatchToCrm(lead: CrmLeadPayload): Promise<boolean> {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'NexAgent-CRM-Dispatcher/1.0',
        },
        body: JSON.stringify(lead),
      });
      return res.ok;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('CRM Webhook delivery failed:', err);
      }
      return false;
    }
  }

  // If no external CRM is connected yet, lead remains securely stored in local bookings ledger
  return true;
}
