/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "index.html"
  ],
  theme: {
    extend: {
      colors: {
            'very-dark-blue': 'hsl(233, 47%, 7%)',
            'Dark-desaturated-blue': 'hsl(244, 38%, 16%)',
            'Soft-violet': 'hsl(277, 64%, 61%)',
            'Slightly-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
            'Slightly-transparent-white-stat': 'hsla(0, 0%, 100%, 0.6)'  
      },
      fontFamily: {
            'Inter': ['Inter', 'sans-serif'],
            'Lexend-Deca': ['Lexend Deca', 'sans-serif']
      },
      screens: {
            'desktop': '1440px'
      }
    },
  },
  plugins: [],
}

