# WebSocket Client and Server Tutorial

This tutorial will guide you through creating a WebSocket client and server using TypeScript and the `ws` library. You will learn how to establish a connection, send and receive data between the client and server.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js and npm: You can download them from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone this repository or create a new directory for your project.

2. Install the project dependencies by running the following command in your project directory:

   ```bash
   npm install
   ```

## WebSocket Server

### File: `server.ts`

This file creates a WebSocket server that listens on port 5050 and handles incoming connections and messages.

```typescript
import { WebSocketServer } from "ws";

const port = 5050;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const message = data.toString("utf-8");
    console.log("Received:", message);
  });
  ws.send("Hello user!!!");
});

console.log(`Server is running on port: ${port}`);
```

To start the WebSocket server, run the following command in your terminal:

```bash
npm run server
```

## WebSocket Client

### File: `client.ts`

This file creates a WebSocket client that connects to the server running on `localhost:5050`. It sends a message to the server when the connection is established and logs received messages.

```typescript
import WebSocket from "ws";

const port = 5050;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on("open", () => {
  console.log("[Connected] to server");
  ws.send("I am a client");
});

ws.on("message", (data) => {
  console.log(`[Received a message] ${data}`);
});

console.log(`Server is running on port: ${port}`);
```

To start the WebSocket client, run the following command in a separate terminal:

```bash
npm run client
```

## Testing the WebSocket Connection

- Add script in package.json

```json
  "scripts": {
    "start:server": "nodemon server.ts",
    "start:client": "nodemon client.ts"
  },
```

1. Start the WebSocket server in one terminal using `npm run start:server`.

2. In another terminal, start the WebSocket client using `npm run start:client`.

3. You should see the following output:

   - Server terminal:
     ```
     Server is running on port: 5050
     Received: I am a client
     ```

   - Client terminal:
     ```
     Server is running on port: 5050
     [Connected] to server
     [Received a message] Hello user!!!
     ```

Congratulations! You have successfully created a WebSocket client and server in TypeScript.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ws](https://github.com/websockets/ws) library for WebSocket support.

- [@NonoMartinezAlonso](https://www.youtube.com/@NonoMartinezAlonso) Martinez Alonso YouTube.

---