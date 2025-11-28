// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables manual dark mode toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mfundoOrange: "#ff8c09",
        mfundoBlack: "#0a0a0a",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
