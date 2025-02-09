/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e31837',
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7a9b3',
          400: '#f27585',
          500: '#e31837',
          600: '#d91533',
          700: '#b50f2a',
          800: '#930c22',
          900: '#7a0a1c'
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#141414',
          300: '#1f1f1f',
          400: '#292929',
          500: '#333333'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};