/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkColor: "#25282B",
      brightColor: "#FDC435",
      transparentBrightColor: "#fdc4357f",
      lightGreyColor: "#828282",
      whiteColor: "#FFFFFF",
    },

    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
