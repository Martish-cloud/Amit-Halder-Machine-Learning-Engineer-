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
          // New premium palette
          'warm-gray': '#DAD6D3',
          slate: '#44575E',
          navy: '#1D2937',
          burgundy: '#651724',
          charcoal: '#3D3B3C',
          // Aliases for readability in components
          accent: '#651724',       // burgundy — CTAs, highlights
          secondary: '#44575E',   // slate blue gray — secondary text, decorative
          deep: '#1D2937',        // deep navy — backgrounds, covers
          surface: '#DAD6D3',     // warm gray — light page surfaces
          muted: '#3D3B3C',       // charcoal — borders, muted text
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
