/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'primary-gradient': 'linear-gradient(90deg, red 0%, #FFC700 100%)',
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
}