/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5A3057',
        bck: '#CAF0F8',
        new:"#94D2BD",
        new1:"#FFCDB2",
      },
    },
  },
  plugins: [],
};
