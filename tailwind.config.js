/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tailwind: "rgb(56, 189, 248)",
        html: "rgb(229,76,33)",
        css: "rgb(38,77,228)",
        react: "rgb(97,219,251)",
        bootstrap: "rgb(118,9,246)",
      },
    },
  },
  plugins: [],
};
