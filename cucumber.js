module.exports = {
  default: {
    require: [
      "tests/support/world.js",
      "tests/support/hooks.js",
      "tests/steps/**/*.js"
    ],
    paths: ["tests/features/**/*.feature"],
    publishQuiet: true,
    format: ["progress"],
    timeout: 60_000
  }
};

