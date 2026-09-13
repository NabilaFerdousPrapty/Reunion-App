module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: "#7a1f2b", dark: "#5e1620" },
        gold: "#c9973a",
        cream: "#fdfbf5",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};