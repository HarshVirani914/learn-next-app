module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        importSource: "theme-ui",
        runtime: "automatic",
        throwIfNamespace: false,
      },
    ],
  ],
  // ...
};
