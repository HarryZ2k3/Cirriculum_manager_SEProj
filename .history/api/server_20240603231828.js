const express = require("express");
const studentRoutes = require('./src/student/route')
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello world");
})
app.use('/api/v1/students')
app.listen(port, () => console.log(`app listening on port ${port}`))