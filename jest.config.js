module.exports = {
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "reports/test",
        filename: "test.html",
        pageTitle: "Mi primera app - Unit Test",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "!**/node_modules/**"],
  coverageReporters: ["json", "text", "lcov", "html"],
  coverageDirectory: "reports/coverage",
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
