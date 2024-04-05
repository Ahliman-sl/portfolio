/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      arabicFont: ["Noto Sans Old South Arabian", "sans-serif"],
      roboto: ["Roboto Serif", "serif"],
      encode: ["Encode Sans Expanded", "sans-serif"],
      meriendo: ["Merienda", "cursive"],
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
