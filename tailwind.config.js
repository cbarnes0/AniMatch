/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url ('./public/images/anime-img.png')"
      }
    },
  },
  plugins: [],
}

