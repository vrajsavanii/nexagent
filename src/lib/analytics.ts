/**
 * NexAgent Conversion & Analytics Telemetry Engine
 * Privacy-first event tracking and attribution persistence.
 * Zero PII in event payloads.
 */

export interface AttributionData {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
  firstTouchAt?: string;
  lastTouchPage?: string;
}

export type ConversionEventName =
  | 'page_view'
  | 'cta_click'
  | 'strategy_call_started'
  | 'strategy_call_step_completed'
  | 'strategy_call_submitted'
  | 'calendar_opened'
  | 'calendar_booked'
  | 'contact_started'
  | 'contact_submitted'
  | 'contact_form_submit'
  | 'product_interest'
  | 'case_study_viewed'
  | 'solution_viewed'
  | 'industry_viewed'
  | 'venture_interest'
  | 'ventures_pitch_submit'
  | 'partner_interest'
  | 'ecosystem_partner_apply'
  | 'insight_viewed'
  | 'external_link_click';

export interface EventPayload {
  eventName: ConversionEventName;
  page?: string;
  ctaName?: string;
  ctaLocation?: string;
  step?: number;
  selectedSolution?: string;
  companySize?: string;
  inquiryType?: string;
  timestamp?: string;
  [key: string]: unknown;
}

const ATTRIBUTION_STORAGE_KEY = 'nexagent_attr_v1';

/**
 * Capture and store attribution from URL and document.referrer in sessionStorage
 */
export function initAttribution(): void {
  if (typeof window === 'undefined') return;

  try {
    const existing = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    const searchParams = new URLSearchParams(window.location.search);

    const currentPath = window.location.pathname;
    const now = new Date().toISOString();

    if (!existing) {
      const initialAttr: AttributionData = {
        utmSource: searchParams.get('utm_source') || undefined,
        utmMedium: searchParams.get('utm_medium') || undefined,
        utmCampaign: searchParams.get('utm_campaign') || undefined,
        utmTerm: searchParams.get('utm_term') || undefined,
        utmContent: searchParams.get('utm_content') || undefined,
        referrer: document.referrer || undefined,
        landingPage: currentPath,
        firstTouchAt: now,
        lastTouchPage: currentPath,
      };
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(initialAttr));
    } else {
      // Update last-touch page
      const parsed: AttributionData = JSON.parse(existing);
      parsed.lastTouchPage = currentPath;

      // Update UTMs if newly present on this route
      if (searchParams.get('utm_source')) parsed.utmSource = searchParams.get('utm_source')!;
      if (searchParams.get('utm_campaign')) parsed.utmCampaign = searchParams.get('utm_campaign')!;

      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(parsed));
    }
  } catch {
    // Storage access restricted (e.g. strict private browsing) - graceful fallback
  }
}

/**
 * Retrieve current session attribution data for attaching to form submissions
 */
export function getAttributionData(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) {
      return {
        landingPage: window.location.pathname,
        lastTouchPage: window.location.pathname,
        referrer: document.referrer || undefined,
      };
    }
    return JSON.parse(raw);
  } catch {
    return {
      landingPage: window.location.pathname,
    };
  }
}

/**
 * Central event tracking dispatcher
 * Emits custom DOM events for Google Tag Manager, Plausible, or external telemetry
 */
export function trackEvent(name: ConversionEventName, properties: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  // Sanitized payload ensuring zero PII is recorded in telemetry
  const sanitizedProps = { ...properties };
  delete sanitizedProps.name;
  delete sanitizedProps.email;
  delete sanitizedProps.notes;
  delete sanitizedProps.message;
  delete sanitizedProps.phone;

  const payload: EventPayload = {
    eventName: name,
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...sanitizedProps,
  };

  try {
    // 1. Dispatch custom browser event
    window.dispatchEvent(new CustomEvent('nexagent:telemetry', { detail: payload }));

    // 2. Integration point for window.dataLayer if Google Tag Manager / Analytics is present
    if (typeof (window as unknown as { dataLayer?: unknown[] }).dataLayer !== 'undefined') {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(payload);
    }

    // 3. Optional debug trace in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Telemetry Event] ${name}:`, payload);
    }
  } catch {
    // Prevent any telemetry error from bubbling into UX
  }
}
