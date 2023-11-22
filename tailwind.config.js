/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    test: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    }
  },
  plugins: [],
}

