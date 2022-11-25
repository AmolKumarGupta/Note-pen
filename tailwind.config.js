/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: 'var(--light)',
        mixed: 'var(--mixed)',
        hard: 'var(--hard)'
      }
    },
  },
  plugins: [],
}
