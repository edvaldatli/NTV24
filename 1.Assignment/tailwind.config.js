/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#212121",
        darkerGray: "#1F1F1F",
        grayText: "#8D8D8D",
        backgroundGray: "#433E3D",
        blueIconColor: "#0081FE",
      },
      dropShadow: {
        shadowGlow: "0 0 5px rgba(255, 255, 255, 0.6)",
      },
      backgroundImage: {
        heroImage: "url('../../assets/images/hero.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}