const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    cónt r = await axios.put(
        'http://api.chateg'
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);