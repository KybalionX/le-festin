/** @type {import('tailwindcss').Config} */

import colorsTheme from './src/theme/colors.theme';

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        ...colorsTheme,
      },
    },
  },
  plugins: [],
};
