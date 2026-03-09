/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1C2F',
        ocean: '#132B45',
        gold: '#C8A97E',
        'gold-light': '#D4BA95',
        'gold-dark': '#B89968',
        'text-secondary': '#B7BDC7',
        'light-bg': '#F4F4F2',
        border: '#E5E7EB',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
    },
  },
  plugins: [],
};
