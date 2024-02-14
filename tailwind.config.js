/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      width: {
        1: "490px",
        2: "400px",
        3: "330px",
      },
      backgroundColor: {
        1: "#ff5c8a",
        2: "#D80032",
      },
    },
  },
  plugins: [],
};
// #f4819b
