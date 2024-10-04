/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-comics": "#00BE82",
        "yellow-dark-comics": "#E2B600",
        "yellow-light-comics": "#FEE01C",
        "red-comics": "#F6104B",
        "blue-comics": "#007FC0",
      },
      fontFamily: {
        "bada-boom": 'Bada Boom, sans-serif',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}