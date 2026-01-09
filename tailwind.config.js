/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e', // green-500
          dark: '#16a34a', // green-600
          light: '#4ade80', // green-400
        },
        dark: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b', // slate-800
        },
        teal: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488',
        }
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
      },
      spacing: {
        '11': '44px', // Touch-friendly button height
      },
    },
  },
  plugins: [],
}

