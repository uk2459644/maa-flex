const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [ './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layout/**/*.{js,ts,jsx,tsx}',
  './helpers/**/*.{js,ts,jsx,tsx}',],
  darkMode:  'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Oswald", ...defaultTheme.fontFamily.sans],
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
