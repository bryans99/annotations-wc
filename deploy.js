const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  await fs.ensureDir("../hello-wc/public/annotations");
  await fs.copyFile(
    "./dist/annotations-wc/main.js",
    "../hello-wc/public/annotations/main.js"
  );
})();
