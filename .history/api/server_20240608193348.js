const express = require("express");
const studentRoutes = require('./src/student/routes');

const app = express();
const port = process.env.PORT || 3002;

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Welcome and Goodbye");
// });

// app.use("/api/students", studentRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use a different port.`);
    process.exit(1);
  } else {
    throw err;
  }
});




//const cors = require('cors');
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


// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   });