/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dcyan: "hsl(var(--color-dcyan) / <alphavalue>)",
      cream: "hsl(var(--color-cream) / <alphavalue>)",
      vdblue: "hsl(var(--color-vdblue) / <alphavalue>)",
      dgblue: "hsl(var(--color-dgblue) / <alphavalue>)",
      white: "hsl(var(--color-white) / <alphavalue>)",
      ...colors,
    },

    fontFamily: {
      montserrat: ["Montserrat"],
      fraunces: ["Fraunces"],
    },

    extend: {
      spacing: {
        128: "38rem",
        160: "50rem",
        192: "48rem",
      },
    },
  },
  plugins: [],
};
