/** @type {import('jest').Config} */
const config = {
  reporters: [
    ["github-actions", {silent: false}],
    "summary",
    ["jest-junit", {
      outputDirectory: "./output",
      outputName: new Date().toUTCString().replaceAll(":", " ") + '-test-report.xml'
    } ]
  ]
};

export default config;