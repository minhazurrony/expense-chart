/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Helvetica Neue"', '"sans-serif"', '"ui-sans-serif"'],
    },
    colors: {
      blue: "#003EFF",
      dark_blue: "#141197",
      dark_grey: "#373B47",
      light_grey_1: "#938FA3",
      light_grey_2: "#F5F6FA",
      neutral_black: "#1F1F23",
      black: "#111111",
      neutral_white: "#FFFFFF",
      dark_purple: "#430099",
      bluish_purple: "#4C49ED",
      light_purple_1: "#9D9BF4",
      light_purple_2: "#AFADFE",
      lime: "#4FD18B",
    },
    extend: {},
  },
  plugins: [],
};
