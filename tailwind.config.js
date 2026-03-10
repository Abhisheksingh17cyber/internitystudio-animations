/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#022b23',
        'primary-dark': '#0a1614',
        'primary-light': '#18332f',
        card: '#081614',
        'card-hover': '#0d1f1c',
        gold: '#ffd8a2',
        'gold-light': '#fbddaf',
        'gold-dark': '#a3906d',
        'gold-muted': '#6d5732',
        'text-secondary': '#9a9a9a',
        'text-muted': '#757170',
        accent: '#1e3b38',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      borderRadius: {
        'card': '15px',
        'card-lg': '20px',
        'pill': '77px',
      },
      backdropBlur: {
        'card': '32px',
      },
    },
  },
  plugins: [],
};
