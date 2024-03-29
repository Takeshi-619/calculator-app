/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        numbersColor: "#333333",
        opeColor: "#FEA00A",
        acColor: "#A5A5A5",
      },
      fontFamily: {
        resultFont: "dseg7 classic",
      },
    },
  },
  plugins: [],
};
