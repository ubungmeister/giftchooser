/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    },backgroundImage: {
      'picture': "url('./images/imageedit_2_9154631188.png')"
    },
    fontFamily: {
      'lobster': ['Lobster', 'sans-serif']
    },
  },
  plugins: [],
}