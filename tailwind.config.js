/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        'source-sans-3': ['"Source Sans Pro"', 'sans-serif'],
        verdina: ['Verdina', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '360px',
        'sm': '640px',
      },
      colors: {
        'primary-background-color': 'var(--primary-background-color)',
        'color-changer': 'var(--color-changer)',
        'primary-color': 'var(--primary-color)',
      },
      spacing: {
        '6px': '6px',
      },
      display: ['responsive', 'group-hover', 'group-focus'],
      flexDirection: ['responsive', 'group-hover', 'group-focus'],
      gap: ['responsive', 'group-hover', 'group-focus'],
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
};
