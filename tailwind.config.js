module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#312EEA",
        },
        grey: {
          13: "#202022",
          18: "#2D2D2F",
          25: "#3E3E41",
          70: "#B1B1B4",
          600: "#97979B",
          700: "#7F7F7F",
          800: "#B4B4B4",
        },
        success: {
          500: "#25AC4B",
        },
        info: {
          500: "#55B8FF",
        },
        warning: {
          500: "#FFBE40",
        },
        danger: {
          500: "#FF5353",
        },
      },
    },
  },
  plugins: [],
};
