import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.SOCKET_PORT;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    //on disconnect
  });
});

server.listen(PORT, () => {
  console.log(`Socket is running on port ${PORT}`);
});

export default io;