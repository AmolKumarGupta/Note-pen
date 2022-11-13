/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        mixed: '#e5e5e5',
        hard: '#2d2d2d'
      }
    },
  },
  plugins: [],
}