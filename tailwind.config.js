module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
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
    extend: {
      colors: {
        'peg-grey': '#EFF0F6',
        'peg-grey-light': '#F7F7FC',
        'peg-blue': '#0576F0',
        'peg-blue-dark': '#005BD4',
      },
      typography: {
        kieran: {
          css: {
            color: '#fff',
            h2: {
              color: 'inherit',
            }
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
