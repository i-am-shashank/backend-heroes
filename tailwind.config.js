/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      pri: "#FE7450",
      "pri-l": "#FAB9A9",
      sec: "#14496D",
      black: "#4A4A4A",
      gray: "#C2D0D9",
      "off-white": "#EEEEEE",
    },
    extend: {},
  },
  plugins: [],
};
