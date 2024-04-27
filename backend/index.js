const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./querries');


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
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });
    
