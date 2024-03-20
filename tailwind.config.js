/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#085D41",
        base60: "#0D9A6B",
        base70: "#0A7B56",
        base80: "#085C40",
        routebar: "#CFF1E6",
        decorationRoute: "#085D41",
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
  plugins: [],
};
