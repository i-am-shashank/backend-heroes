/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1500px"
    },
    // p-[10px] xl:px-[255px] 
    // lg:px-[24px]
    colors: {
      pri: "#FE7450",
      "pri-l": "#FAB9A9",
      sec: "#14496D",
      "sec-l": "#279EFF66",
      black: "#4A4A4A",
      white: "#FFFFFF",
      gray: "#C2D0D9",
      "off-white": "#EEEEEE",
    },
    extend: {},
  },
  plugins: [],
};
