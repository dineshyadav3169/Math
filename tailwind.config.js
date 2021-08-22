module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
};
