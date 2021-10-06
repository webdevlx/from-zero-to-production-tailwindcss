module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#41b883",
          light: "#a8ca7f",
          dark: "#2e8b57",
        }
      },
      fontFamily: {
        all: "Ubuntu, sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    },
  },
  plugins: [],
}
