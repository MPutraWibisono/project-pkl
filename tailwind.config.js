/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#085D41",
        baseColor2: "#0E7956",
        accordion: "#10B981",
        base60: "#0D9A6B",
        base70: "#0A7B56",
        base80: "#085C40",
        routebar: "#CFF1E6",
        decorationRoute: "#085D41",
        instagram: "#DD2B7B",
        facebook:"#1877F2"
      },
      fontSize: {
        xxs: "10px",
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
