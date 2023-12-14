const config = require("./config");
const express = require("express");
const app = express();
const morgan = require("morgan");

const apis = require("./apis");

const server = app.listen(config.PORT, () => {
  console.log(`server running at ${config.PORT}`);
});
app.use(morgan("combined"));
app.use("/apis", apis);

process.on("SIGINT", () => {
  console.log("INT signal received");
  server.close(() => {
    console.log("Server shutting down");
    process.exit(0);
  });
});

process.on("SIGABRT", () => {
  console.log("termination signal received");
  server.close(() => {
    console.log("Server shutting down");
    process.exit(0);
  });
});
