import { wsUrl } from "../constants.js";
import { WebSocket } from "ws";
import { levels, messages } from "../constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";

const socket = new WebSocket(wsUrl);

socket.on("open", () => {
  setInterval(() => {
    const log = {
      level: levels[getRandomNumber(levels)],
      message: messages[getRandomNumber(messages)],
    };
    socket.send(JSON.stringify(log));
  }, 1000);
});

socket.on("error", (error) => {
  console.log(error);
});
