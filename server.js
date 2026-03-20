const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let chatHistory = []; // store messages

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send existing history to new client
  socket.emit("chat history", chatHistory);

  // Listen for new messages
  socket.on("chat message", (msg) => {
    const message = { text: msg, time: new Date().toLocaleTimeString() };
    chatHistory.push(message);

    // Broadcast to all clients
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
