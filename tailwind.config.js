/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fundo: "#f6f6f6",
        rosaclaro: "#ffbeda",
        rosaescuro: "#c74573"
      },
      backgroundImage: {
        'fundo-home': "url('/img/fundo home.jpg')"
      }
    },
  },
  plugins: [],
}