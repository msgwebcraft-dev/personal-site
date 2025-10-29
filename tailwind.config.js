/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#000000',
        light: '#FFFFFF',
      },
      accent: '#FF8C09',
      background: {
        DEFAULT: '#000000',
        light: '#FFFFFF',
      },
      text: {
        DEFAULT: '#FFFFFF',
        light: '#000000',
      },
      secondary: {
        DEFAULT: '#CCCCCC',
        light: '#555555',
      },
    },
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif'],
      code: ['Fira Code', 'monospace'],
    },
  },
};
export const plugins = [];

