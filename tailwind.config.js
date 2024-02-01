/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary: '#0D1223',
        secondary:'#263461'
      },
      screens: {
        xl2: '1144px',
      },
    },
  },
  plugins: [],
}

