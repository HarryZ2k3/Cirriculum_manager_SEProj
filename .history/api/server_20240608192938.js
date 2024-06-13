const express = require("express");
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3002;

//const cors = require('cors');
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome and Goodbye");
});

app.use("/api/students", studentRoutes);


//app.use(cors());

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// );

// app.get('/', (req, res) => {
//     res.json({info: 'Node.js, Express, and Postgres API'})
// });


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });