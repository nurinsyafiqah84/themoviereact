const { rgbToHex } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'darkBlue': 'rgb(3,37,65)',
      'white': '#ffffff',
      'lightBlue': '#01B4E4',
      'lightGreen': '#4ade80',
      'darkRed': '#b91c1c',
    },
    fontFamily:{
      // Array format:
      'sans': ['Helvetica', 'Arial', 'sans-serif'],

      // Comma-delimited format:
      'sans': 'Helvetica, Arial, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
