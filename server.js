const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname)); // sert tous les fichiers statiques

io.on("connection", socket => {
  console.log("Utilisateur connecté");

  socket.on("message", data => {
    console.log("Message reçu:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Utilisateur déconnecté");
  });
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
