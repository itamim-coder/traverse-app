/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", //added custom folder for using tailwindcss
  ],
  theme: {
    extend: {},
  },

  plugins: [],
};
