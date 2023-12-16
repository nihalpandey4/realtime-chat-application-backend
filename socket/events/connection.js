const fs = require("fs");

const path = "random.txt";

module.exports = (socket, io) => {
  let initialLines = fs.readFileSync(path, "utf-8").split("\n").length;
  fs.watchFile(path, (old, curr) => {
    // console.log(old);
    // console.log(curr);
    const lines = fs.readFileSync(path, "utf-8").split("\n");
    lines.slice(initialLines).forEach((line) => {
      io.emit("chat message", line);
    });
    initialLines = lines.length;
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  //   setInterval(() => {
  //     io.emit("chat message", "server is still online");
  //   }, 10000);
};
