const path = require('path')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');
const messageRoute = require('./Routes/messageRouter');
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages", messageRoute);
//CRUD
app.get("/",(req, res) => {
  res.send("Welcome our chat app APIs..");
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

mongoose
.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log("MongoDB connection established"))
.catch((error) => console.log("MongoDB connection failed: ", error.message));



