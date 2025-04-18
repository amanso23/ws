import { wsUrl } from "../constants.js";
import { WebSocket } from "ws";

const levels = ["info", "warn", "error"];
const messages = [
  "SQL query executed successfully",
  "Slow database connection detected",
  "Failed to connect to Redis",
  "Auth service responded in 2ms",
  "Deprecation warning in API v1",
  "Error 500 while saving the order",
  "User not authorized",
  "Timeout on external request",
];

const socket = new WebSocket(wsUrl);

const randomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

socket.on("open", () => {
  setInterval(() => {
    const log = {
      level: levels[randomNumber(levels)],
      message: messages[randomNumber(messages)],
    };
    socket.send(JSON.stringify(log));
  }, 1000);
});

socket.on("error", (error) => {
  console.log(error);
});
