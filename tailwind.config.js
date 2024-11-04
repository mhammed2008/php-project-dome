/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "public/*.php",
      "views/partials/*.php",
      "views/notes/*.php",
      "views/*.php",

  ],
  theme: {
    extend: {},
  },
  plugins: [
      // 'require'('@tailwindcss/forms'),
  ],
}

