module.exports = {
  purge: ['./public/**/*.html', './src/{pages,components}/**/*.{jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
