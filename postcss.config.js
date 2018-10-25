module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.4", "iOS >= 9"]
    },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: "vw",
      fontViewportUnit: "vw", // vmin is more suitable.
      selectorBlackList: ["ui-banklogo-s"],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
