/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────────────────────
      // NEXAGENT DESIGN TOKEN SYSTEM
      // Single canonical source of truth for all visual primitives.
      // Use semantic token names — never raw hex values in JSX.
      // ─────────────────────────────────────────────────────────────

      colors: {
        // ── Core Background & Surface ──────────────────────────────
        'nx-bg':           'var(--nx-bg)',           // #F7F7F5 — warm off-white page background
        'nx-surface':      'var(--nx-surface)',      // #FFFFFF — elevated surface (cards, modals)
        'nx-surface-alt':  'var(--nx-surface-alt)',  // #F0EFEA — secondary surface (footer, code)

        // ── Text ───────────────────────────────────────────────────
        'nx-text':         'var(--nx-text)',         // #17191A — primary graphite
        'nx-text-2':       'var(--nx-text-2)',       // #2E3133 — slightly lighter
        'nx-text-secondary': 'var(--nx-text-secondary)', // #57595B — body text secondary
        'nx-text-muted':   'var(--nx-text-muted)',   // #84888A — captions, metadata, placeholders

        // ── Brand Accents ──────────────────────────────────────────
        'nx-teal':         'var(--nx-teal)',         // #3D9D99 — NexAgent primary teal
        'nx-teal-light':   'var(--nx-teal-light)',   // #3D9D99/10 — subtle teal tint
        'nx-champagne':    'var(--nx-champagne)',     // #D7CBB8 — warm metallic accent
        'nx-silver':       'var(--nx-silver)',        // #BDC9C7 — cool metallic / borders

        // ── Borders ────────────────────────────────────────────────
        'nx-border':       'var(--nx-border)',        // #17191A/10 — default subtle border
        'nx-border-strong': 'var(--nx-border-strong)', // #17191A/25 — active/hover border

        // ── Status ─────────────────────────────────────────────────
        'nx-error':        'var(--nx-error)',         // #B91C1C
        'nx-success':      'var(--nx-success)',       // #15803D
        'nx-warning':      'var(--nx-warning)',       // #B45309

        // ── TitanSAAS Design System Palette ────────────────────────
        'titan-bg':          '#FBF5F3',
        'titan-text':        '#2A2B2E',
        'titan-muted':       '#738290',
        'titan-coral':       '#3D9D99',
        'titan-coral-dark':  '#2E827E',
        'titan-coral-light': 'rgba(61, 157, 153, 0.12)',
        'titan-card':        '#FFFFFF',
        'titan-card-dark':   '#2A2B2E',
        'titan-border':      'rgba(205, 211, 219, 0.6)',

        // ── Legacy compatibility aliases (avoid introducing new usage) ──
        primary:           '#3D9D99', // updated primary to signature NexAgent teal
        'on-surface':      '#2A2B2E',
        surface:           '#FBF5F3',
        background:        '#FBF5F3',
        'surface-container-low': '#FFFFFF',
        'surface-container-lowest': '#FFFFFF',
        'surface-dim':     '#F0EAE7',
        outline:           '#738290',
        'outline-variant': '#CDD3DB',
        error:             '#B91C1C',
        'on-surface-variant': '#5E6572',
        'on-background':   '#2A2B2E',
        secondary:         '#365C6A',
        'inverse-on-surface': '#FFFFFF',
      },

      // ─────────────────────────────────────────────────────────────
      // TYPOGRAPHY SCALE
      // Semantic sizes. Never use arbitrary text-[px] for body copy.
      // ─────────────────────────────────────────────────────────────
      fontFamily: {
        // Primary face — editorial, headings, body
        sans:    ['Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Monospace — labels, code, metadata, CTA text
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],

        // Legacy aliases (kept for backward compat)
        'label-code':          ['JetBrains Mono', 'monospace'],
        'headline-md':         ['Hanken Grotesk', 'sans-serif'],
        'body-sm':             ['Hanken Grotesk', 'sans-serif'],
        'micro-annotation':    ['JetBrains Mono', 'monospace'],
        'headline-lg-mobile':  ['Hanken Grotesk', 'sans-serif'],
        'body-md':             ['Hanken Grotesk', 'sans-serif'],
        'headline-lg':         ['Hanken Grotesk', 'sans-serif'],
        'headline-sm':         ['Hanken Grotesk', 'sans-serif'],
        'body-lg':             ['Hanken Grotesk', 'sans-serif'],
        'display-hero-mobile': ['Hanken Grotesk', 'sans-serif'],
        'display-hero':        ['Hanken Grotesk', 'sans-serif'],
      },

      fontSize: {
        // ── Display — hero moments only ────────────────────────────
        'display-xl':  ['88px',  { lineHeight: '92px',  letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-lg':  ['72px',  { lineHeight: '78px',  letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-md':  ['56px',  { lineHeight: '62px',  letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-sm':  ['44px',  { lineHeight: '50px',  letterSpacing: '-0.025em', fontWeight: '600' }],

        // ── Headings ──────────────────────────────────────────────
        'heading-xl':  ['36px',  { lineHeight: '42px',  letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg':  ['28px',  { lineHeight: '36px',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading-md':  ['22px',  { lineHeight: '30px',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-sm':  ['18px',  { lineHeight: '26px',  letterSpacing: '-0.005em', fontWeight: '600' }],

        // ── Body ──────────────────────────────────────────────────
        'body-xl':     ['20px',  { lineHeight: '32px',  letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-lg':     ['17px',  { lineHeight: '28px',  letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md':     ['15px',  { lineHeight: '24px',  letterSpacing: '0em',     fontWeight: '400' }],
        'body-sm':     ['13px',  { lineHeight: '20px',  letterSpacing: '0em',     fontWeight: '400' }],
        'body-xs':     ['12px',  { lineHeight: '18px',  letterSpacing: '0em',     fontWeight: '400' }],

        // ── Labels & Utility ─────────────────────────────────────
        'label-lg':    ['13px',  { lineHeight: '18px',  letterSpacing: '0.04em',  fontWeight: '600' }],
        'label-md':    ['12px',  { lineHeight: '16px',  letterSpacing: '0.05em',  fontWeight: '600' }],
        'label-sm':    ['11px',  { lineHeight: '16px',  letterSpacing: '0.06em',  fontWeight: '600' }],
        'eyebrow':     ['11px',  { lineHeight: '16px',  letterSpacing: '0.1em',   fontWeight: '600' }],
        'caption':     ['11px',  { lineHeight: '16px',  letterSpacing: '0.02em',  fontWeight: '400' }],
        'code':        ['12px',  { lineHeight: '18px',  letterSpacing: '0.02em',  fontWeight: '500' }],

        // ── Legacy aliases (do not add new usage) ─────────────────
        'label-code':         ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '500' }],
        'headline-md':        ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '500' }],
        'micro-annotation':   ['10px', { lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-lg':        ['44px', { lineHeight: '52px', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-sm':        ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-hero-mobile':['40px', { lineHeight: '48px', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-hero':       ['72px', { lineHeight: '80px', letterSpacing: '-0.035em', fontWeight: '600' }],
      },

      // ─────────────────────────────────────────────────────────────
      // SPACING SCALE
      // Based on a 4px base unit. Use semantic names.
      // ─────────────────────────────────────────────────────────────
      spacing: {
        // ── Named spacing scale ────────────────────────────────────
        'space-1':  '4px',
        'space-2':  '8px',
        'space-3':  '12px',
        'space-4':  '16px',
        'space-5':  '20px',
        'space-6':  '24px',
        'space-8':  '32px',
        'space-10': '40px',
        'space-12': '48px',
        'space-16': '64px',
        'space-20': '80px',
        'space-24': '96px',
        'space-32': '128px',

        // ── Section/page rhythm ────────────────────────────────────
        'section-sm':  '48px',   // compact sections
        'section-md':  '80px',   // standard sections
        'section-lg':  '120px',  // hero-scale sections

        // ── Layout gutters ─────────────────────────────────────────
        'gutter':         '24px',   // desktop side padding
        'gutter-wide':    '40px',   // wide viewport side padding
        'gutter-mobile':  '20px',   // mobile side padding

        // ── Legacy aliases ─────────────────────────────────────────
        'space-xl': '3rem',
        'margin-mobile': '1.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.75rem',
        'margin': '3.5rem',
        'space-xs': '0.25rem',
      },

      // ─────────────────────────────────────────────────────────────
      // BORDER RADIUS
      // Restrained geometric vocabulary. NexAgent prefers precision
      // over rounded softness. Avoid mixing arbitrarily.
      // ─────────────────────────────────────────────────────────────
      borderRadius: {
        'none':    '0px',
        'xs':      '2px',   // subtle: status dots, micro chips
        'sm':      '4px',   // buttons, form inputs, tags
        DEFAULT:   '6px',   // default: cards, modals
        'lg':      '12px',  // containers, drawers
        'xl':      '20px',  // reserved: pill badges
        'full':    '9999px', // fully round: logo, avatar, pill nav
      },

      // ─────────────────────────────────────────────────────────────
      // BOX SHADOWS
      // Architectural — depth through contrast, not heavy blur.
      // ─────────────────────────────────────────────────────────────
      boxShadow: {
        'sm':   '0 1px 3px rgba(23, 25, 26, 0.06), 0 1px 2px rgba(23, 25, 26, 0.04)',
        DEFAULT:'0 4px 12px rgba(23, 25, 26, 0.08), 0 1px 3px rgba(23, 25, 26, 0.05)',
        'md':   '0 8px 24px rgba(23, 25, 26, 0.10), 0 2px 6px rgba(23, 25, 26, 0.06)',
        'lg':   '0 16px 48px rgba(23, 25, 26, 0.12), 0 4px 12px rgba(23, 25, 26, 0.07)',
        'none': 'none',
      },

      // ─────────────────────────────────────────────────────────────
      // TRANSITION DURATIONS
      // ─────────────────────────────────────────────────────────────
      transitionDuration: {
        'fast':     '150ms',
        'standard': '250ms',
        'slow':     '400ms',
        'enter':    '300ms',
        'exit':     '200ms',
      },

      // ─────────────────────────────────────────────────────────────
      // TRANSITION TIMING FUNCTIONS
      // ─────────────────────────────────────────────────────────────
      transitionTimingFunction: {
        'standard':  'cubic-bezier(0.22, 1, 0.36, 1)',
        'emphasis':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'enter':     'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'exit':      'cubic-bezier(0.4, 0.0, 1, 1)',
      },

      // ─────────────────────────────────────────────────────────────
      // MAX WIDTH SCALE
      // ─────────────────────────────────────────────────────────────
      maxWidth: {
        'content-narrow': '640px',   // long-form reading
        'content':        '800px',   // editorial content
        'content-wide':   '1024px',  // broad content
        'layout':         '1280px',  // standard layout container
        'layout-xl':      '1440px',  // wide layout
      },
    },
  },
  plugins: [],
};
