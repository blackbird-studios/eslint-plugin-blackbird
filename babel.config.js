module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        extensions: [".js"],
      },
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
  ],
}
