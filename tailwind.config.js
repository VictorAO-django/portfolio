/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px',
        'xxs': '400px',
        'xxxs': '350px'
      },
      backgroundColor: {
        'custom-blue': '#1d3b77',
        'custom-orange': '#f97450',
        'custom-orange-hover': '#e93200',
        'main-color': '#FE9900',
        'main-blue': '#2853A8',
        'sub-blue1': '#2853A8',
        'light-blue': '#EFECF7',
        'footer2': '#535257',
        'hover': '#d88c1b',
        'dialog': '#12121211',
        'blue-button': '#002efa75',
      },
      borderColor: {
        'custom-blue': '#1d3b77',
        'custom-orange': '#f97450',
        'main-color': '#FE9900',
        'hover': '#d88c1b'
      },
      colors: {
        'custom-blue': '#1d3b77',
        'custom-orange': '#f97450',
        'custom-orange-hover': '#e93200',
        'main-blue': '#2853A8',
        'main-color': "#FE9900",
        'hover': '#d88c1b'
      },
      ringColor:{
        'custom-blue': '#1d3b77',
        'custom-orange': '#f97450',
        'main-color': "#FE9900"
      },
      fontFamily: {
        'montserrat-thin': ['Montserrat-thin', 'sans-serif'],
        'montserrat-regular': ['Montserrat-regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat-medium', 'sans-serif'],
        'montserrat-semi': ['Montserrat-semi', 'sans-serif'],
        'montserrat-black': ['Montserrat-black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

