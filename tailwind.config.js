/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Black: {
          dark: "#181820",
          light: "#21212b",
        },
        pink: "#fc76a1",
      },
    },
  },
  plugins: [],
};
