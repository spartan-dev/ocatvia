const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        smoke: "#FEFEFD",
        beige: "#EDE8DC",
        black: "#000000",
        navbar: "#121212",
        text: "#333433",
        red: "#E85633",
        yellow: "#ECAB2F",
        "yellow-light": "#EDE8DC4D",
        "pink-light": "#F0A3B31A"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      })
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [
    // plugin(require('./src/tailwind-plugins/typography'))
  ],
};
