/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#040c11",
        secondary: {
          100: "#ffd83b",
          200: "#fcc300",
        },
      },
    },
  },
  plugins: [],
};
