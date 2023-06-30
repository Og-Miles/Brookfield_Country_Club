/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: "#475569",
        pgray: "#8E949F",
        active: "#3A499C"
      },
      backgroundImage: {
        'Hero': "url('/src/assets/Hero.png')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Yeseva: ["Yeseva One", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}