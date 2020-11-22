const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./components/**/*.tsx", "./components/**/*.js", "./pages/**/*.tsx", "./pages/**/*.js"],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      gray: colors.blueGray
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
