/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'darkBlue': '#031d33',
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
