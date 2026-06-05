import fs from "fs";

const distPath = "./dist";

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}
fs.mkdirSync(distPath);

["package.json", "index.js"].forEach((fileName) =>
  fs.copyFileSync(`./${fileName}`, `${distPath}/${fileName}`),
);
