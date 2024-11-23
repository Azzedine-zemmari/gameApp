/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        GreenPrimary:"#2F4B4D",
      },
      fontFamily:{
        primary:["Inter", "Inter Placeholder", 'sans-serif']
      }
    },
  },
  plugins: [],
}