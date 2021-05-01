// see default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
};
