/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["'Lato', sans-serif"]
      },
      colors: {
        "color1":"#D62828",
        "color2":"#404040",
        "color3":"#292C2F"
      }
    },
  },
  plugins: [],
}
