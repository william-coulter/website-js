// see default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        "solarized-dark": {
          base02: "#073642",
          base03: "#002b36",
        },
      },
      textColor: {
        heading1: "#d33682",
        heading2: "#859900",
        primary: "#eee8d5",
      },
      borderColor: {
        primary: "#eee8d5",
      },
    },
  },
  plugins: [],
};
