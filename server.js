const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

io.on("connection", socket => {
  socket.on("message", msg => {
    io.emit("message", msg);
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
