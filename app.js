/**
 * NEXAGENT // PROTOTYPE INTERACTIVE LOGIC
 * Pure client-side interactions, data models, and workflow visualizers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPipelineInspection();
  initOsToggle();
  initScaleSelector();
  initIndustryTabs();
  initStrategyForm();
  initRoiCalculator();
  initCommandPalette();
  initFullscreen3D();
});

/* --------------------------------------------------------------------------
   1. PIPELINE STEP INSPECTION (INTELLIGENCE -> ACTION)
   -------------------------------------------------------------------------- */
const pipelineDetails = {
  ai: {
    title: 'AI // FOUNDATIONAL INTELLIGENCE',
    desc: 'Custom fine-tuned cognitive reasoning models and hybrid RAG knowledge graphs designed for sub-second semantic precision without public cloud data leakage.',
    metrics: ['Multi-modal token processing', 'Deterministic hallucination filter', 'Domain-specific private weights']
  },
  agents: {
    title: 'AGENTS // AUTONOMOUS TASK SYNTHESIS',
    desc: 'Goal-seeking autonomous actors capable of multi-step tool execution, programmatic consensus voting, and self-healing error recovery loops.',
    metrics: ['Self-healing execution loops', 'Multi-agent consensus voting', 'Zero-shot tool invoking']
  },
  automation: {
    title: 'AUTOMATION // DETERMINISTIC EVENT BUS',
    desc: 'Headless distributed logic reconciling disparate systems, triggering state transitions, and balancing ledgers with mathematical guarantees.',
    metrics: ['Sub-10ms event triggers', 'Idempotent state reconciliation', 'Audit-traceable transactions']
  },
  software: {
    title: 'SOFTWARE // DYNAMIC ENTERPRISE COCKPITS',
    desc: 'High-clarity executive interfaces, real-time command centers, and scalable multi-tenant SaaS products built for seamless human-agent collaboration.',
    metrics: ['Sub-second cold-load latency', 'Offline-first sync capability', 'Role-based cryptographic RBAC']
  },
  infrastructure: {
    title: 'INFRASTRUCTURE // SOVEREIGN COMPUTE CLUSTERS',
    desc: 'Private bare-metal GPU clusters, low-latency edge topology, and zero-trust sovereign network boundaries meeting strict global compliance mandates.',
    metrics: ['Tier-IV data isolation', 'Air-gapped deployment mode', 'Global NVMe edge distribution']
  },
  business: {
    title: 'BUSINESS // MEASURABLE OPERATIONAL VELOCITY',
    desc: 'Exponential organizational leverage, complete elimination of manual operational bottlenecks, and deterministic revenue scaling.',
    metrics: ['Up to 74% reduction in manual ops', '4.8x lead-to-close velocity', 'Predictive executive clarity']
  }
};

function initPipelineInspection() {
  const cards = document.querySelectorAll('.pipeline-node-card');
  const drawer = document.getElementById('pipeline-drawer');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerDesc = document.getElementById('drawer-desc');
  const drawerSpecs = document.getElementById('drawer-specs');

  if (!drawer) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-node');
      const data = pipelineDetails[id];
      if (!data) return;

      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      drawerTitle.innerText = data.title;
      drawerDesc.innerText = data.desc;
      drawerSpecs.innerHTML = data.metrics.map(m => `
        <span class="tag-label">
          <span style="width:4px;height:4px;background:var(--brand-teal);border-radius:50%;"></span>
          ${m}
        </span>
      `).join('');

      drawer.classList.add('visible');
    });
  });
}

/* --------------------------------------------------------------------------
   2. BUSINESS OPERATING SYSTEM (FRAGMENTED VS CONNECTED)
   -------------------------------------------------------------------------- */
function initOsToggle() {
  const btnConnected = document.getElementById('btn-os-connected');
  const btnFragmented = document.getElementById('btn-os-fragmented');
  const nodeItems = document.querySelectorAll('.os-node-item');
  const statusLabel = document.getElementById('os-status-label');

  if (!btnConnected || !btnFragmented) return;

  btnConnected.addEventListener('click', () => {
    btnConnected.classList.add('active');
    btnFragmented.classList.remove('active');
    statusLabel.innerText = 'STATE: FULLY SYNCHRONIZED OS';
    statusLabel.style.color = 'var(--brand-teal)';

    nodeItems.forEach(item => {
      item.classList.remove('disconnected');
      item.classList.add('connected');
      const badge = item.querySelector('.os-connection-badge span:last-child');
      if (badge) {
        badge.innerText = 'SYNCED REAL-TIME';
        badge.style.color = 'var(--brand-teal)';
      }
    });
  });

  btnFragmented.addEventListener('click', () => {
    btnFragmented.classList.add('active');
    btnConnected.classList.remove('active');
    statusLabel.innerText = 'STATE: FRAGMENTED POINT-SOLUTIONS';
    statusLabel.style.color = 'var(--brand-taupe)';

    nodeItems.forEach(item => {
      item.classList.remove('connected');
      item.classList.add('disconnected');
      const badge = item.querySelector('.os-connection-badge span:last-child');
      if (badge) {
        badge.innerText = 'SILOED / MANUAL GAP';
        badge.style.color = '#A99898';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. BUILT FOR EVERY SCALE (STEPPER & PROGRESSION)
   -------------------------------------------------------------------------- */
const scaleData = {
  '1p': {
    name: '1 PERSON',
    subtitle: 'Autonomous Operations',
    recommended: 'Single Sovereign Node + 4 Voice/CRM Dispatchers',
    agents: '5 Autonomous Agents',
    latency: '< 180ms Execution',
    compliance: 'Zero Maintenance Architecture'
  },
  'smb': {
    name: 'SMALL BUSINESS',
    subtitle: 'Automated Workflows',
    recommended: 'Headless Workflow Gateway + Dual Database Mirror',
    agents: '15 Autonomous Agents',
    latency: '< 150ms Execution',
    compliance: 'Automated Invoicing & Tax Sync'
  },
  'msme': {
    name: 'MSME',
    subtitle: 'Digital Infrastructure',
    recommended: 'Hybrid Edge Node + Operational Cockpit',
    agents: '40 Autonomous Agents',
    latency: '< 120ms Execution',
    compliance: 'ISO-27001 Foundation'
  },
  'startup': {
    name: 'STARTUP',
    subtitle: 'AI-Native Stacks',
    recommended: 'Containerized Kubernetes Mesh + Real-time Streaming Bus',
    agents: '100+ Autonomous Agents',
    latency: '< 90ms Execution',
    compliance: 'SOC2 Type II Ready'
  },
  'unicorn': {
    name: 'UNICORN',
    subtitle: 'Multi-Region Mesh',
    recommended: 'Multi-Region Bare-Metal Cluster + NVMe Edge Caching',
    agents: '500+ Autonomous Agents',
    latency: '< 60ms Global Edge',
    compliance: 'PCI-DSS Tier 1'
  },
  'enterprise': {
    name: 'ENTERPRISE',
    subtitle: 'Sovereign Compliance',
    recommended: 'Dedicated Air-Gapped Private Cloud Enclaves',
    agents: '2,500+ Autonomous Agents',
    latency: '< 30ms Sovereign Ring',
    compliance: 'HIPAA, GDPR, FedRAMP High'
  },
  'global': {
    name: 'GLOBAL ORGANIZATION',
    subtitle: 'Conglomerate OS',
    recommended: 'Cross-Continental Federated Mesh (SF, London, Dubai, BLR)',
    agents: 'Unlimited Synchronized Cluster',
    latency: '< 10ms Backbone Dispatch',
    compliance: 'Global Central Bank & State-Level Sovereignty'
  }
};

function initScaleSelector() {
  const cards = document.querySelectorAll('.scale-card');
  const nameEl = document.getElementById('scale-current-name');
  const recEl = document.getElementById('scale-current-rec');
  const capEl = document.getElementById('scale-current-cap');
  const latEl = document.getElementById('scale-current-lat');
  const compEl = document.getElementById('scale-current-comp');

  if (!cards.length || !nameEl) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const tierKey = card.getAttribute('data-tier');
      const data = scaleData[tierKey];
      if (!data) return;

      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      nameEl.innerText = `${data.name} — ${data.subtitle}`;
      recEl.innerText = data.recommended;
      capEl.innerText = data.agents;
      latEl.innerText = data.latency;
      compEl.innerText = data.compliance;
    });
  });
}

/* --------------------------------------------------------------------------
   4. INDUSTRIES (11 INTERACTIVE CATEGORIES)
   -------------------------------------------------------------------------- */
const industryWorkflows = {
  healthcare: {
    headline: 'Autonomous Clinical Documentation & Patient Triage',
    desc: 'Eliminates clinician burnout by parsing ambient consultations in real time with HIPAA-compliant ambient AI intelligence and zero EHR backlog.',
    benefitMetric: '2.4 HOURS / DAY',
    benefitSub: 'Recovered Per Clinician',
    steps: [
      { num: 'STEP 01', title: 'Patient Check-In', desc: 'Digital Intake Form' },
      { num: 'STEP 02', title: 'Ambient Audio', desc: 'Secure Room Audio' },
      { num: 'STEP 03', title: 'SOAP Note AI', desc: 'Clinical Structuring' },
      { num: 'STEP 04', title: 'Prescription Order', desc: 'Auto-Lab Dispatch' },
      { num: 'STEP 05', title: 'EHR Sync', desc: 'Epic / Cerner Rail' },
      { num: 'STEP 06', title: 'Claims & Billing', desc: 'Zero Denial Dispatch', isFinal: true }
    ]
  },
  hospitality: {
    headline: 'Connected Hotel & Luxury Guest Operations',
    desc: 'Omnichannel guest assistance, mobile keyless access, predictive room servicing, and instant PMS inventory updates.',
    benefitMetric: '+38% UPSELL',
    benefitSub: 'Automated Ancillary Revenue',
    steps: [
      { num: 'STEP 01', title: 'Pre-Arrival Bot', desc: 'Preferences & Upgrades' },
      { num: 'STEP 02', title: 'Mobile Check-In', desc: 'Keycard Cloud Dispatch' },
      { num: 'STEP 03', title: 'Autonomous Concierge', desc: 'Multi-lingual AI Service' },
      { num: 'STEP 04', title: 'Housekeeping Route', desc: 'IoT Presence Sensors' },
      { num: 'STEP 05', title: 'Folio Balancing', desc: 'Automated Expense Sync' },
      { num: 'STEP 06', title: 'Express Departure', desc: 'Review & Retention AI', isFinal: true }
    ]
  },
  b2b: {
    headline: 'Autonomous Inbound & Outbound Pipeline Execution',
    desc: 'Buyer intent tracking, deep enrichment, hyper-personalized conversational qualification, and immediate calendar scheduling.',
    benefitMetric: '4.8x VELOCITY',
    benefitSub: 'Lead-to-Meeting Ratio',
    steps: [
      { num: 'STEP 01', title: 'Intent Signal', desc: 'Buyer Activity Detected' },
      { num: 'STEP 02', title: 'Deep Enrichment', desc: 'Firmographics & Tech Stack' },
      { num: 'STEP 03', title: 'Agent Engagement', desc: 'Adaptive Email/Phone' },
      { num: 'STEP 04', title: 'Objection Handling', desc: 'Real-time LLM Defense' },
      { num: 'STEP 05', title: 'AE Calendar Booking', desc: 'Zero Human Triage' },
      { num: 'STEP 06', title: 'Deal Brief Gen', desc: 'Pre-Call Dossier Created', isFinal: true }
    ]
  },
  fintech: {
    headline: 'Deterministic Risk Assessment & Cross-Border Clearing',
    desc: 'Continuous KYC/AML verification, instant trade reconciliation, and algorithmic ledger compliance across international corridors.',
    benefitMetric: '< 140ms',
    benefitSub: 'Clearing Decision Latency',
    steps: [
      { num: 'STEP 01', title: 'Payment Payload', desc: 'Ingest ISO-20022' },
      { num: 'STEP 02', title: 'AML Screening', desc: 'Sanctions Registry Check' },
      { num: 'STEP 03', title: 'Fraud Model', desc: 'Behavioral Neural Scoring' },
      { num: 'STEP 04', title: 'FX Optimal Route', desc: 'Multi-Gateway Liquidity' },
      { num: 'STEP 05', title: 'Settlement Dispatch', desc: 'Instant Rail Execution' },
      { num: 'STEP 06', title: 'Immutable Ledger', desc: 'Cryptographic Audit', isFinal: true }
    ]
  },
  logistics: {
    headline: 'Autonomous Freight Matching & Edge Telematics',
    desc: 'Automated bill-of-lading optical extraction, predictive port congestion rerouting, and proactive IoT cold-chain alerts.',
    benefitMetric: '-31% DETENTION',
    benefitSub: 'Demurrage Penalties Saved',
    steps: [
      { num: 'STEP 01', title: 'Bill of Lading Ingest', desc: 'Multimodal Optical OCR' },
      { num: 'STEP 02', title: 'Carrier Match', desc: 'Algorithmic Capacity Spot' },
      { num: 'STEP 03', title: 'Dynamic Reroute', desc: 'Live Port Congestion AI' },
      { num: 'STEP 04', title: 'IoT Cold Telemetry', desc: 'Continuous Sensor Audit' },
      { num: 'STEP 05', title: 'Customs Clearance', desc: 'Auto-Document EDI' },
      { num: 'STEP 06', title: 'Final Delivery', desc: 'Proof of Custody Signoff', isFinal: true }
    ]
  },
  retail: {
    headline: 'Autonomous Omnichannel Fulfillment & Dynamic Pricing',
    desc: 'Algorithmic demand sensing, live price elasticity optimization, and automated warehouse supplier reorders.',
    benefitMetric: '+22% MARGIN',
    benefitSub: 'Inventory Turnover Rate',
    steps: [
      { num: 'STEP 01', title: 'Demand Pulse', desc: 'Real-time Footfall & Cart' },
      { num: 'STEP 02', title: 'Dynamic Reprice', desc: 'Competitor Elasticity Model' },
      { num: 'STEP 03', title: 'Basket Optimizer', desc: 'In-Session Personalization' },
      { num: 'STEP 04', title: 'Micro-Fulfillment', desc: 'Dark Store Dispatch' },
      { num: 'STEP 05', title: 'Autonomous Return', desc: 'Instant Exchange Triage' },
      { num: 'STEP 06', title: 'Restock Trigger', desc: 'Automated Supplier EDI', isFinal: true }
    ]
  },
  education: {
    headline: 'Adaptive Cognitive Tutoring & Campus Administration',
    desc: 'Individualized student pacing models, automated grading of freeform technical reasoning, and predictive enrollment triage.',
    benefitMetric: '3.1x MASTERY',
    benefitSub: 'Student Comprehension Velocity',
    steps: [
      { num: 'STEP 01', title: 'Diagnostic Exam', desc: 'Knowledge Frontier Map' },
      { num: 'STEP 02', title: 'Adaptive Curriculum', desc: 'Dynamic Concept Graph' },
      { num: 'STEP 03', title: 'Socratic Dialogue', desc: 'Sub-400ms Voice Tutor' },
      { num: 'STEP 04', title: 'Automated Grading', desc: 'Rubric Reasoning Engine' },
      { num: 'STEP 05', title: 'Intervention Alert', desc: 'Proactive Advisor Ping' },
      { num: 'STEP 06', title: 'Credential Mint', desc: 'Verified Micro-Diploma', isFinal: true }
    ]
  },
  realestate: {
    headline: 'Predictive Property Valuation & Autonomous Leases',
    desc: 'Instant tenant risk underwriting, automated lease drafting, and digital escrow settlement.',
    benefitMetric: '15 MIN / LEASE',
    benefitSub: 'Application to Signed Escrow',
    steps: [
      { num: 'STEP 01', title: 'Inquiry Capture', desc: 'Lead Verification AI' },
      { num: 'STEP 02', title: 'Virtual Showing', desc: 'Interactive Tour Bot' },
      { num: 'STEP 03', title: 'Risk Underwriting', desc: 'Instant Credit & Income' },
      { num: 'STEP 04', title: 'Auto-Lease Gen', desc: 'Jurisdiction Compliant' },
      { num: 'STEP 05', title: 'Digital Escrow', desc: 'Direct Ledger Deposit' },
      { num: 'STEP 06', title: 'IoT Key Access', desc: 'Remote Lock Authorization', isFinal: true }
    ]
  },
  manufacturing: {
    headline: 'Predictive Machine Maintenance & Edge Telemetry',
    desc: 'Real-time acoustic vibration anomaly detection preventing multi-million dollar plant line shutdowns.',
    benefitMetric: '99.94% UPTIME',
    benefitSub: 'Zero Unscheduled Downtime',
    steps: [
      { num: 'STEP 01', title: 'Acoustic Sensor', desc: 'High-Frequency Vibration' },
      { num: 'STEP 02', title: 'Anomaly Model', desc: 'Neural Waveform Audit' },
      { num: 'STEP 03', title: 'Predictive Ticket', desc: 'Auto-Work Order Created' },
      { num: 'STEP 04', title: 'Spare Parts Dispatch', desc: 'Warehouse Robot Sync' },
      { num: 'STEP 05', title: 'Maintenance Guide', desc: 'AR Visual Schematics' },
      { num: 'STEP 06', title: 'Calibration Audit', desc: 'Line Re-certification', isFinal: true }
    ]
  },
  technology: {
    headline: 'Continuous Code Synthesis & Zero-Day Incident Triage',
    desc: 'Autonomous agentic bug triaging, automated regression repair, and multi-cloud deployment orchestration.',
    benefitMetric: '< 45 SEC',
    benefitSub: 'Mean Time to Remediation',
    steps: [
      { num: 'STEP 01', title: 'Sentry Alert', desc: 'Crash Telemetry Ingest' },
      { num: 'STEP 02', title: 'Root Cause Trace', desc: 'Abstract Syntax Tree AI' },
      { num: 'STEP 03', title: 'Fix Synthesis', desc: 'Patch Code Generation' },
      { num: 'STEP 04', title: 'Automated CI/CD', desc: 'Isolated Sandbox Test' },
      { num: 'STEP 05', title: 'Canary Rollout', desc: 'Gradual Traffic Shift' },
      { num: 'STEP 06', title: 'Incident Resolution', desc: 'Post-Mortem Published', isFinal: true }
    ]
  },
  professionalservices: {
    headline: 'Autonomous Document Synthesis & Multi-Corridor Billing',
    desc: 'End-to-end contract analysis, billable activity extraction from calendars/emails, and automatic retainers.',
    benefitMetric: '100% CAPTURE',
    benefitSub: 'Zero Unbilled Partner Hours',
    steps: [
      { num: 'STEP 01', title: 'Client Brief Ingest', desc: 'Conflict-of-Interest Scan' },
      { num: 'STEP 02', title: 'Precedent Research', desc: 'Corpus Semantic Search' },
      { num: 'STEP 03', title: 'Draft Synthesis', desc: 'First-Pass Document AI' },
      { num: 'STEP 04', title: 'Partner Review', desc: 'Inline Diff Verification' },
      { num: 'STEP 05', title: 'Time Attribution', desc: 'Passive Activity Logger' },
      { num: 'STEP 06', title: 'Retainer Clearing', desc: 'Immediate Invoice Trigger', isFinal: true }
    ]
  }
};

function initIndustryTabs() {
  const chips = document.querySelectorAll('.ind-chip');
  const titleEl = document.getElementById('ind-title');
  const descEl = document.getElementById('ind-desc');
  const metricValEl = document.getElementById('ind-metric-val');
  const metricSubEl = document.getElementById('ind-metric-sub');
  const stepsContainer = document.getElementById('ind-steps-container');

  if (!chips.length || !titleEl) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-industry');
      const data = industryWorkflows[key];
      if (!data) return;

      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      titleEl.innerText = data.headline;
      descEl.innerText = data.desc;
      metricValEl.innerText = data.benefitMetric;
      metricSubEl.innerText = data.benefitSub;

      stepsContainer.innerHTML = data.steps.map(s => `
        <div class="step-card ${s.isFinal ? 'final' : ''}">
          <span style="font-family:var(--font-mono);font-size:9px;display:block;">${s.num}</span>
          <h5>${s.title}</h5>
          <span>${s.desc}</span>
        </div>
      `).join('');
    });
  });
}

/* --------------------------------------------------------------------------
   5. STRATEGY CALL FORM SIMULATOR
   -------------------------------------------------------------------------- */
function initStrategyForm() {
  const form = document.getElementById('strategy-brief-form');
  const resultBox = document.getElementById('strategy-result-box');
  const idEl = document.getElementById('booking-id-val');
  const scoreEl = document.getElementById('booking-score-val');
  const tierEl = document.getElementById('booking-tier-val');

  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inp-name').value;
    const email = document.getElementById('inp-email').value;
    const scale = document.getElementById('inp-scale').value;

    const randomId = 'NEX-' + Math.floor(1000 + Math.random() * 9000);
    let score = 88;
    if (scale === 'Global Organization' || scale === 'Enterprise') score = 96;
    if (scale === 'Unicorn') score = 92;

    idEl.innerText = randomId;
    scoreEl.innerText = score + '/100';
    tierEl.innerText = scale + ' Sovereign Ring';

    form.style.display = 'none';
    resultBox.style.display = 'block';
  });

  const resetBtn = document.getElementById('btn-reset-strategy');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resultBox.style.display = 'none';
      form.style.display = 'flex';
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   6. ENTERPRISE AUTOMATION ROI CALCULATOR
   -------------------------------------------------------------------------- */
function initRoiCalculator() {
  const modal = document.getElementById('roi-modal');
  const openBtns = document.querySelectorAll('.trigger-roi-modal');
  const closeBtn = document.getElementById('close-roi-modal');
  const calcBtn = document.getElementById('btn-calc-roi');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const team = Number(document.getElementById('calc-team').value) || 50;
      const hours = Number(document.getElementById('calc-hours').value) || 12;
      const rate = Number(document.getElementById('calc-rate').value) || 65;

      const totalAnnualManual = team * hours * 50;
      const savedHours = Math.round(totalAnnualManual * 0.68);
      const savedDollars = Math.round(savedHours * rate);

      document.getElementById('calc-res-hours').innerText = savedHours.toLocaleString() + ' hrs';
      document.getElementById('calc-res-dollars').innerText = '$' + savedDollars.toLocaleString();
      document.getElementById('calc-result-panel').style.display = 'block';
    });
  }
}

/* --------------------------------------------------------------------------
   7. COMMAND PALETTE (CMD+K / CTRL+K)
   -------------------------------------------------------------------------- */
function initCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const closeBtn = document.getElementById('close-cmd-modal');
  const input = document.getElementById('cmd-search-input');
  const triggerBtns = document.querySelectorAll('.trigger-cmd-palette');

  if (!modal) return;

  function togglePalette() {
    modal.classList.toggle('open');
    if (modal.classList.contains('open') && input) {
      input.value = '';
      filterCmds('');
      setTimeout(() => input.focus(), 50);
    }
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      togglePalette();
    }
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', togglePalette);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  if (input) {
    input.addEventListener('input', (e) => {
      filterCmds(e.target.value.toLowerCase());
    });
  }

  function filterCmds(term) {
    const items = document.querySelectorAll('.cmd-item');
    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  document.querySelectorAll('.cmd-item').forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   8. FULLSCREEN 3D VIEW TOGGLE
   -------------------------------------------------------------------------- */
function initFullscreen3D() {
  const btn = document.getElementById('btn-fullscreen-core');
  const coreFrame = document.querySelector('.core-frame');

  if (!btn || !coreFrame) return;

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      coreFrame.requestFullscreen?.().catch(err => {
        alert('Fullscreen request denied: ' + err.message);
      });
    } else {
      document.exitFullscreen?.();
    }
  });
}
