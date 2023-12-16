const url = "ws://localhost:9000";

const socket = new WebSocket(url);

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});
