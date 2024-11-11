/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#ff2200',
        'purple-extended': '#74207d',
        'parrot-feather' : '#bbff00',
        'lemon-yellow' : '#ffee00',
        'rose-pink' : '#ff0048'
      }
    },
  },
  plugins: [],
}
