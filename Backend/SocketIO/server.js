import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4002",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  //   socket.on("joinRoom", (room) => {
  //     socket.join(room);
  //     console.log(`User joined room:${room}`);
  //   });

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});

export { app, io, server };
