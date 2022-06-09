module.exports = {
  presets: ["@babel/preset-typescript"],
  ignore: ["**/*.d.ts"],
  env: {
    commonjs: {
      plugins: [
        [
          "@babel/plugin-transform-modules-commonjs",
          {
            strict: false,
            allowTopLevelThis: true
          }
        ]
      ]
    }
  }
};