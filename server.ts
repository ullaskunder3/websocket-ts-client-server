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

console.log(`server is running on the port:${port}`);
