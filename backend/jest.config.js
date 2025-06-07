/** @type {import('jest').Config} */
const config = {
  reporters: [
    ["github-actions", {silent: false}],
    "summary",
    // Summary of Jest j unit gets inputted into the text-report.xml
    ["jest-junit", {
      outputDirectory: "./output",
      outputName: new Date().toUTCString().replaceAll(":", " ") + '-test-report.xml'
    } ]
  ]
};

export default config;