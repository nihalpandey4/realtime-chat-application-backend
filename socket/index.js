const { Server } = require("socket.io");
const server = require("../app");
const io = new Server(server);
const connection = require("./events/connection");
io.on("connection", (socket) => {
  connection(socket, io);
});

module.exports = io;
