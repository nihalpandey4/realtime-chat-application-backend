module.exports = (socket, io) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    io.emit("chat message", "server is still online");
  }, 10000);
};
