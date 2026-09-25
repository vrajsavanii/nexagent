/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Semantic Color Tokens ──────────────────────────────────────────────
      colors: {
        // Canvas / surface system (light theme)
        canvas: 'var(--bg-canvas)',
        surface: {
          subtle:        'var(--bg-subtle)',
          card:          'var(--bg-surface)',
          elevated:      'var(--bg-elevated)',
          hover:         'var(--bg-hover)',
          dark:          'var(--bg-dark)',
          border:        'var(--border-subtle)',
          'border-strong': 'var(--border-medium)',
        },
        accent: {
          black:        'var(--accent-black)',
          white:        'var(--accent-white)',
          zinc:         'var(--accent-zinc)',
          // legacy aliases
          cyan:         'var(--accent-black)',
          'cyan-bright':'var(--accent-zinc)',
          blue:         'var(--accent-black)',
          purple:       'var(--accent-black)',
        },
        brand: {
          white:  '#ffffff',
          light:  '#fafafa',
          muted:  '#71717a',
          subtle: '#a1a1aa',
          dark:   '#09090b',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          disabled:  'var(--text-disabled)',
        },
      },

      // ── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem',  { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:    ['0.875rem', { lineHeight: '1.375rem' }],
        base:  ['1rem',     { lineHeight: '1.625rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem',   letterSpacing: '-0.02em' }],
        '5xl': ['3rem',     { lineHeight: '1.1',      letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem',  { lineHeight: '1.05',     letterSpacing: '-0.035em' }],
        '7xl': ['4.5rem',   { lineHeight: '1.0',      letterSpacing: '-0.04em' }],
        '8xl': ['6rem',     { lineHeight: '1.0',      letterSpacing: '-0.045em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.035em',
        tight:    '-0.02em',
        normal:   '0em',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.14em',
      },

      // ── Border Radius ──────────────────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      // ── Spacing (custom values beyond Tailwind defaults) ───────────────────
      spacing: {
        '4.5': '1.125rem',
        '13':  '3.25rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
      },

      // ── Custom Easing Curves (spring-like) ─────────────────────────────────
      transitionTimingFunction: {
        'spring':      'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-soft': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-expo':     'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo':    'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      // ── Box Shadows ────────────────────────────────────────────────────────
      boxShadow: {
        'xs':   '0 1px 2px 0 rgba(0,0,0,0.05)',
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'lift': '0 8px 30px rgba(0,0,0,0.12)',
        'float':'0 16px 48px rgba(0,0,0,0.16)',
        'glow': '0 0 0 3px rgba(9,9,11,0.12)',
      },

      // ── Keyframe Animations ────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':    'fade-in 0.3s ease both',
        'slide-down': 'slide-down 0.25s cubic-bezier(0.16,1,0.3,1) both',
        'shimmer':    'shimmer 5s linear infinite',
        'float':      'float 6s ease-in-out infinite',
      },

      // ── Backdrop Blur ──────────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

