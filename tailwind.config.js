/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkColor: "#25282B",
      brightColor: "#FDC435",
      transparentBrightColor: "#fdc4357f",
      lightGreyColor: "#828282",
    },

    extend: {},
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
