
const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require('tailwindcss/defaultTheme')

let containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: containerScreens
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
        display: ['var(--font-playfair)', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}

