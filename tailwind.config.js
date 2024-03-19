/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        base: "#085D41",
        accordion: "#10B981",
        routebar: "#CFF1E6",
        decorationRoute: "#085D41"
      },
      fontSize: {
        xxs: '10px'
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
}