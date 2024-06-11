const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow frontend to connect
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.send('Chat server is running');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
