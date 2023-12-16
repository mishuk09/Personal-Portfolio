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
    },
    test: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    }
  },
  plugins: [],
}

