/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        miniver: ['Miniver', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-color': '#3b141c',
        'secondary-color': '#f3961c',
        'light-pink-color': '#faf4f5',
        'dark-color': '#252525',
        'medium-gray-color': '#ccc',
        'white-color': '#fff',
      },
    },
  },
  plugins: [],
};