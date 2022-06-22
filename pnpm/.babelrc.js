module.exports = {
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
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