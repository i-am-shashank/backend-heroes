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
    extend: {
      backgroundImage:{
        hero: 'url("https://res.cloudinary.com/dwmwpmrpo/image/upload/v1662388675/icpzixt53lrqzbimmgir.png")'
      }
    },
  },
  plugins: [],
};
