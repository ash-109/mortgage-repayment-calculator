/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
       'custom-green': 'rgb(215, 218, 47)',
       'custom-dark-blue' :'rgb(19, 48, 64)',
       'custom-grey':'rgb(127 143 149)'
      }
    },
  },
  plugins: [],
}

