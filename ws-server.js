import { WebSocket, WebSocketServer } from "ws";
import chalk from "chalk";

const server = new WebSocketServer({
  port: 3001,
});

const clients = new Set();

const geColoredLog = (log) => {
  switch (log.level) {
    case "info":
      return `${chalk.blue(`[INFO]`)} ${log.message}`;
    case "warn":
      return `${chalk.yellow(`[WARN]`)} ${log.message}`;
    case "error":
      return `${chalk.red(`[ERROR]`)} ${log.message}`;
    default:
      return `[${level.toUpperCase()}] ${log.message}`;
  }
};

server.on("connection", (ws) => {
  clients.add(ws);
  console.log("Cliente conectado. Total:", clients.size);
  ws.on("message", (response) => {
    const log = JSON.parse(response);
    const coloredLog = geColoredLog(log);
    console.log(coloredLog);
  });

  ws.on("close", () => {
    clients.delete(ws);
  });
});

console.log("Server running in port 3001");
