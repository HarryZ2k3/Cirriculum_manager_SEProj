// const express = require("express");
// const studentRoutes = require('./src/student/route');
// const app = express();
// const port = 3002;

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Welcome and Goodbye");
// });

// app.use("/api/v1/students", studentRoutes);

// app.listen(port, () => console.log(`app listening on port ${port}`));

const express = require('express')
const bodyParser = require('body-parser')
const port = 3002;
const cors = require('cors');
const app = express()
const db = require('./querries');
 

app.use(express.json());
 
app.use(cors());

 
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });
app.get('/users/:username/:SemesterNumber/:Year',db.getGrades);
app.get('/users/:username',db.GetInfoCourse);
app.get('/users/:username/:Password',db.GetID);
app.get('/users/:username/:SemesterNumber/:SemesterYear/:CourseName',db.GradesChart);
app.get('/credits/:username', db.GetCredit); // lấy tín chỉ tất cả sem
app.get('/credits/:username/:SemesterNumber/:SemesterYear', db.CreditEachSem); //lấy tín chỉ từng semester
app.get('/GPA/:username', db.GPAoverYears);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });
