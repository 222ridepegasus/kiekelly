module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      //serif: ['Merriweather', 'serif'],
    },
    fontWeight: {
      bold: 700,
      semibold: 600,
      medium: 500,
    },
    // colors: {
      // Configure your color palette here
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
