/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
