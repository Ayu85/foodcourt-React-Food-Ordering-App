/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../foodcourt/src/assets/loginBg.jpg')"
      }
    },
  },
  plugins: [],
}

