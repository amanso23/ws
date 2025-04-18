const wsUrl = "ws://localhost:3001";

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

const MS = 100;

export { wsUrl, levels, messages, MS };
