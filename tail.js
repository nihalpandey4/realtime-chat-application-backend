const fs = require("fs");

const path = "random.txt";
let initialLines = fs.readFileSync(path, "utf-8").split("\n").length;
fs.watchFile(path, (old, curr) => {
  console.log(old);
  console.log(curr);
  const lines = fs.readFileSync(path, "utf-8").split("\n");
  console.log(lines.slice(initialLines));
  initialLines = lines.length;
});
