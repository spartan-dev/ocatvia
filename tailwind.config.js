const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        ivory: "#FEFEFD",
        beige: "#EDE8DC",
        smoke: "rgba(0,0,0,0.5)",
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
    plugin(require('./src/tailwind-plugins/containers'))
  ],
};
