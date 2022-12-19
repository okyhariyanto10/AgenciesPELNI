/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        "colors": {
          "red": {
            "50": "#FBEAEA",
            "100": "#F7D4D4",
            "200": "#EFA9A9",
            "300": "#E77E7E",
            "400": "#DF5353",
            "500": "#D62828",
            "600": "#AC2020",
            "700": "#811818",
            "800": "#561010",
            "900": "#2B0808"
          },
          "greyfooter":"#292C2F"
          },
      fontFamily:{
        sans: ["'Lato', sans-serif"]
      },
      
    },
  },
  plugins: [],
}
