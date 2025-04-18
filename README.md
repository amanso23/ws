# 🔧 WebSocket Log Generator (Client)

This is a simple WebSocket client built with Node.js that acts as a **log generator**, sending random log messages to a WebSocket server at regular intervals.

---

## 📦 Requirements

- Node.js
- Dependencies installed via `npm install`

---

## 🚀 How It Works

- Connects to a WebSocket server (`wsUrl`)
- Every `MS` milliseconds, it sends a random log object:
  ```json
  {
    "level": "info",
    "message": "SQL query executed successfully"
  }
