/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0b0e',
          charcoal: '#12141c',
          surface: '#171924',
          'surface-hover': '#202434',
          card: '#141620',
          'card-hover': '#1c1f2e',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
          lime: '#22c55e',
          'lime-neon': '#10e060',
          'lime-muted': '#15803d',
          purple: '#a855f7',
          'purple-glow': '#c084fc',
          'purple-dark': '#7e22ce',
          muted: '#8e95a5',
          subtext: '#64748b'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
