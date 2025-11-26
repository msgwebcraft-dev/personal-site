// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables manual dark mode toggling
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Tailwind blue-600
        secondary: '#10b981', // Tailwind emerald-500
        accent: '#f59e0b', // Tailwind amber-500
        background: '#f9fafb',
        darkBackground: '#0f172a',
        text: '#111827',
        darkText: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
