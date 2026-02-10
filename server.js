const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

io.on("connection", socket => {
  console.log("Un utilisateur connecté");

  socket.on("message", (msg) => {
    console.log("Message reçu:", msg); // <-- utile pour debug
    io.emit("message", msg); // renvoie à tous
  });

  socket.on("disconnect", () => {
    console.log("Utilisateur déconnecté");
  });
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
