/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
    colors: {
      ...colors,
      dash: {
        "overlay-bg": "var(--overlay-bg)",
        primary: "var(--shades-blue)",
        // secondary: "var(--shades-red)",
        "shades-black": "var(--shades-black)",
        "shades-black-2": "var(--shades-black-2)",
        "shades-white": "var(--shades-white)",
        "shades-gray-3": "var(--shades-gray-3)",
        "shades-gray-2": "var(--shades-gray-2)",
        "shades-gray-1": "var(--shades-gray-1)",
        "shades-purple-1": "var(--shades-purple-1)",
        "shades-purple-2": "var(--shades-purple-2)",
        "shades-purple-3": "var(--shades-purple-3)",
        "shades-goldenrod-3": "var(--shades-goldenrod-3)",
        "shades-goldenrod-2": "var(--shades-goldenrod-2)",
        "shades-goldenrod-1": "var(--shades-goldenrod-1)",
        "shades-blue-4": "var(--shades-blue-4)",
        "shades-blue-3": "var(--shades-blue-3)",
        "shades-blue-1": "var(--shades-blue-1)",
        "shades-blue-2": "var(--shades-blue-2)",
        "shades-coral": "var(--shades-coral)",
        "shades-dark-purple-1": "var(--shades-dark-purple-1)",
        "shades-dark-purple-2": "var(--shades-dark-purple-2)",
        "shades-dark-purple-3": "var(--shades-dark-purple-3)",
        "shades-dark-brown-1": "var(--shades-dark-brown-1)",
        "shades-dark-brown-2": "var(--shades-dark-brown-2)",
        "shades-dark-brown-3": "var(--shades-dark-brown-3)",

        text: "var(--shades-gray-1)",
        border: "var(--border)",
        "border-color": "var(--border-color)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
