/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://img.freepik.com/free-photo/top-view-chocolate-stuff_23-2148019502.jpg?w=996&t=st=1706943422~exp=1706944022~hmac=7fa4d28801dac9c7921c84618f1099a8980154b1f0e2106d2101ff3a70cb50bd')",
        food: "url('D:/Namaste React/Projects/foodcourt-React-Food-Ordering-App/foodcourt/src/assets/loginbg2.jpg')"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'enlarge': 'ping 2s linear infinite',
        'wiggle': 'wiggle 4s ease-in-out infinite',

      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(-1)' },
        }
      }
    },
  },
  plugins: [],
}

