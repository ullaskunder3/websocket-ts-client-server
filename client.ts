import WebSocket from "ws";

const port = 5050;
const ws = new WebSocket(`ws://localhost:${port}`)

ws.on('open', ()=>{
    console.log("[connected] to server");
    ws.send("I am a client")
})
ws.on('message', (data)=>{
    console.log(`[Received a message] ${data}`);  
})
console.log(`server is running on the port:${port}`);
