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
        body: "#333433",
        red: "#E85633",
        yellow: "#ECAB2F",
        pink: "#F0A3B3",
        "yellow-light": "#EDE8DC4D",
        "pink-light": "#F0A3B31A"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        checkmark: "url('../images/assets/checkmark.png')"
      },
      width: {
        106: "26.5rem"
      },
      fontFamily: {
        "bon-voyage": ["MADE Bon Voyage Regular"],
        "gotham-book": ["Gotham Book"],
        "gotham-medium": ["Gotham Medium"],
        "gotham-bold": ["Gotham Bold"],
        "gotham-black": ["Gotham Black"]
      },
      boxShadow: {
        yellow: "3px 0 16px 0 rgba(236,171,47,0.75)"
      }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [
    plugin(require('./src/styles/tailwind-plugins/containers')),
    plugin(require('./src/styles/tailwind-plugins/typography')),
    plugin(require('./src/styles/tailwind-plugins/buttons'))
  ],
};
