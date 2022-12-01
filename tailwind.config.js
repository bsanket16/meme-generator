/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      memeLogo: ['"Press Start 2P"', 'cursive'],
      memeFont: ['"Bangers"', 'cursive']
    },
    extend: {
      colors: {
        'black': '#0C0F0A',
        'red': '#FB3640',
        'white': '#F0F7EE',
      }
    },
  },
  plugins: [],
}
