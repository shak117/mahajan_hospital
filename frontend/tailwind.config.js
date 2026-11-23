/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          white: "#FFFFFF",
          soft: "#F5F6F7",
          navy: "#102A43",
          muted: "#627D98",
          charcoal: "#17212B",
          light: "#E8EDF1",
          accent: "#0284C7", // sparingly used medical blue accent
          "accent-dark": "#0369A1",
          slate: "#334E68",
          card: "#FFFFFF",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Manrope"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        refined: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 42, 67, 0.04), 0 1px 2px -1px rgba(16, 42, 67, 0.04)',
        'premium': '0 10px 30px -10px rgba(16, 42, 67, 0.08), 0 4px 6px -4px rgba(16, 42, 67, 0.03)',
        'floating': '0 20px 40px -15px rgba(16, 42, 67, 0.12)',
      }
    },
  },
  plugins: [],
}
