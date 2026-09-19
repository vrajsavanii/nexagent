/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7F9',
          100: '#D8ECF0',
          200: '#B2D8E0',
          300: '#82BDCB',
          400: '#4F9CB0',
          500: '#317F94',
          600: '#26677A',
          700: '#215363',
          800: '#1E4552',
          900: '#1A3B46',
          950: '#0D222A',
        },
        titanium: {
          50: '#FAF8F6',
          100: '#F2ECE6',
          200: '#E4D8CC',
          300: '#D2BEAC',
          400: '#BDA28B',
          500: '#A7866F',
          600: '#916F59',
          700: '#785947',
          800: '#624A3D',
          900: '#523F34',
          950: '#2C201A',
        },
        surface: {
          ground: '#FAFBFC',
          card: '#FFFFFF',
          subtle: '#F4F6F9',
          border: '#E3E8EF',
          borderHover: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(14, 23, 38, 0.04), 0 1px 2px -1px rgba(14, 23, 38, 0.04)',
        'premium': '0 10px 30px -5px rgba(27, 59, 75, 0.06), 0 4px 10px -3px rgba(27, 59, 75, 0.04)',
        'elevated': '0 20px 40px -15px rgba(27, 59, 75, 0.09), 0 8px 16px -6px rgba(27, 59, 75, 0.05)',
        'glow-teal': '0 0 25px -5px rgba(79, 156, 176, 0.25)',
        'glow-titanium': '0 0 25px -5px rgba(189, 162, 139, 0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'flow-line': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
