module.exports = {
  mode: "jit",
  theme: {
    extend: {
      screens: {
        'custom-break': '990px',
      },
    },
  },
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
};
