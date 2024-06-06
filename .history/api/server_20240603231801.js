const express = require("express");
const studentRoutes = require('./src/student/rout')
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello world");
})
app.listen(port, () => console.log(`app listening on port ${port}`))