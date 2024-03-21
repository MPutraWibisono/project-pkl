/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#085D41",
        green60: "#0D9A6C",
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
  daisyui: {
    themes: ['light']

  },
  plugins: [require("daisyui")],
}