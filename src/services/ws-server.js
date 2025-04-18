import { WebSocketServer } from "ws";
import { getColoredLog } from "../utils/getColoredLog.js";

const server = new WebSocketServer({
  port: 3001,
});

const clients = new Set();

server.on("connection", (ws) => {
  clients.add(ws);
  console.log("Cliente conectado. Total:", clients.size);
  ws.on("message", (response) => {
    const log = JSON.parse(response);
    const coloredLog = getColoredLog(log);
    console.log(coloredLog);
  });

  ws.on("close", () => {
    clients.delete(ws);
  });
});

console.log("Server running in port 3001");
