const config = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(cors());
const morgan = require("morgan");

const apis = require("./apis");

server.listen(config.PORT, () => {
  console.log(`server running at ${config.PORT}`);
});
app.use(morgan("combined"));
app.use(express.json());
app.use("/apis", apis);

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
  require("./socket");
});

process.on("SIGINT", () => {
  console.log("INT signal received");
  server.close(() => {
    console.log("Server shutting down");
    process.exit(0);
  });
});

module.exports = server;
