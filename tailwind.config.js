/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ change this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        surface: "#1a1a1a",
        primary: "#00ADB5",
        secondary: "#FF2E63",
        text: "#e0e0e0",
        accent: "#60a5fa",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
