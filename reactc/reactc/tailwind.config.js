/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif']
      },
      backgroundImage:{
        'chrome':"url('https://firebasestorage.googleapis.com/v0/b/mern-blog-fd696.appspot.com/o/deee48bf-4360-4387-894e-3ed15d843ed1?alt=media&token=8a5f13a3-658a-4af9-a6d7-4dfc16b55e56')"
      }
    },
  },
  plugins: [],
}

