/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        GreenPrimary:"#2F4B4D",
        secondery : "rgb(155, 96, 85)"
      },
      fontFamily:{
        primary:["Inter", "Inter Placeholder", 'sans-serif'],
        secondery:["Instrument Serif", "Instrument Serif Placeholder", 'serif']
      }
    },
  },
  plugins: [],
}