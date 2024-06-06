const express = require("express");
const studentRoutes = require('./src/student/routes');
const app = express();
const port = 3002;
const cors = require('cors');
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Welcome and Goodbye");
// });

// app.use("/api/v1/students", studentRoutes);

// app.listen(port, () => console.log(`app listening on port ${port}`));

app.use(cors())