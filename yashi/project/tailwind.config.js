/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon': '#00FF99',
        'emerald': '#1DB954',
        'deep-black': '#121212',
        'accent-black': '#1A1A1A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'floatingLeaves 6s ease-in-out infinite',
        'dew': 'dewDrop 3s infinite',
        'glow': 'glowPulse 4s infinite',
        'grow': 'vineGrow 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};