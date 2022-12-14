/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Maze']
      },
      textColor: {
        primary: '#643fdd'
      },
      backgroundColor: {
        primary: '#643fdd'
      },
      borderColor: {
        primary: '#643fdd'
      },
      scale: {
        "300": '3'
      }
    }
  },
  plugins: []
}
