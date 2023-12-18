/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
    theme: {
    extend: {
      colors: {
        brown: {
          500: '#3D2318', // Define your desired shade of brown
        },
      },
    },
  },
  plugins: [],
}

