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

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "";
const CHAT_ENGINE_PRIVATE_KEY = "";

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// vvv On port 3001!
app.listen(3002);