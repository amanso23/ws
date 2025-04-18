import { wsUrl } from "./constants.js";
import { WebSocket } from "ws";

const levels = ["info", "warn", "error"];
const messages = [
  "Consulta SQL ejecutada correctamente",
  "Conexión a la base de datos lenta",
  "Fallo al conectar con Redis",
  "Servicio Auth responded in 2ms",
  "Deprecation warning en API v1",
  "Error 500 al guardar el pedido",
  "Usuario no autorizado",
  "Timeout en petición externa",
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
