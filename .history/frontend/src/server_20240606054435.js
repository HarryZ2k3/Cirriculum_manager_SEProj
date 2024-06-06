// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
// const { Server } = require('socket.io');
// const cors = require('cors');

// // Allow cross-origin requests (adjust origins as needed)
// app.use(cors({ origin: 'http://localhost:3000' }));

// const io = new Server(http);

// // Serve static files (optional, adjust path if using a CSS framework)
// app.use(express.static('public'));

// io.on('connection', (socket) => {
//   console.log('A user connected!');

//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg); // Broadcast message to all connected clients
//   });
// });

// const port = process.env.PORT || 3000;
// http.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });