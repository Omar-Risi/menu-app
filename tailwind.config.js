/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'mplus': '"M PLUS 1p", sans-serif, serif',
        'poppins' : '"Poppins", sans-serif, serif'
      }
    },
  },
  plugins: [],
}