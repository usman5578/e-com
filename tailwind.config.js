/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primaryWhite:"#ffece3",
        cat1:"#d6d6d8",
        cat2:"#efe1c7",
        cat3:"#212121",
        cat4:"#D7D7D9"
      }
    },
  },
  plugins: [],
}
