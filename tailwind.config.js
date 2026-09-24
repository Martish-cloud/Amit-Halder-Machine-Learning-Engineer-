/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0e1218',
          surface: '#141a22',
          card: '#1a2230',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(255, 255, 255, 0.15)',
        },
        light: {
          bg: '#f5f3f1',
          surface: '#ffffff',
          card: '#ece9e6',
          border: 'rgba(29, 41, 55, 0.08)',
          'border-hover': 'rgba(29, 41, 55, 0.18)',
        },
        brand: {
          // Premium high-contrast dark palette
          'warm-gray': '#F1F5F9',
          slate: '#94A3B8',
          navy: '#38BDF8',
          burgundy: '#9E1C32',
          charcoal: '#CBD5E1',
          // Aliases for readability in components
          accent: '#9E1C32',       // vibrant luxury burgundy — CTAs, highlights
          secondary: '#94A3B8',   // light slate cool gray — secondary text, decorative
          deep: '#0E1218',        // deep dark navy
          surface: '#141A22',     // dark surface
          muted: '#64748B',       // readable muted slate
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 25s linear infinite',
        'cursor-blink': 'cursorBlink 1.1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
