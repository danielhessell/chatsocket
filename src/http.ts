import Express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { Server } from "socket.io";

const express = Express();

const server = createServer(express);

express.use(Express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket ===", socket.id);
});

export { server, io };
