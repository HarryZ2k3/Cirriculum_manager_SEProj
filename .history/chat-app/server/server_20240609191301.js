const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Endpoint to check if server is running
app.get('/api', (req, res) => {
  res.send({ message: 'Server is running' });
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
