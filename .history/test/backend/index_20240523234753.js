const cors = require("cors");
const axios = require("axios");

const app = express()
app.use(exoress.json())
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "8c63dbce-80a7-455a-890b-9368d16e1dcb" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});