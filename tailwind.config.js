/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1420',
          panel: '#141B2B',
          border: '#232C40',
        },
        paper: {
          DEFAULT: '#F7F8FA',
          panel: '#FFFFFF',
          border: '#E3E7EE',
        },
        signal: {
          amber: '#F2A65A',
          blue: '#5B8DEF',
          green: '#4FBF8B',
        },
        ink900: '#10151F',
        mutedInk: '#8A93A6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(to right, #E3E7EE 1px, transparent 1px), linear-gradient(to bottom, #E3E7EE 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, #1B2334 1px, transparent 1px), linear-gradient(to bottom, #1B2334 1px, transparent 1px)',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 1.1s cubic-bezier(0.22,1,0.36,1) forwards',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
