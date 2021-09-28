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
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
