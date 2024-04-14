const path = require('path')
const express = require('express')
const {connect,sql} = require('./connect.js');

const app = express()
const port = 3000


app.use(express.urlencoded({
  extended: true
}));


// apply middleware cho việc chuyển thông tin từ form vào controller bằng những phương thức khác ngoài submit
// cho javascript
app.use(express.json());

app.get('/', (req, res) =>{
res.send('hello');


})

app.get ('/course', async (req, res)=>{ 
    // Xem điểm
    const pool = await connect;
    // const sqlString = "SELECT CourseName, Inclass,Midterm, Final FROM STUDENT.Grades g JOIN COURSES.InforList c  ON c.CourseID = g.CourseID WHERE g.StudentID = (SELECT StudentID  FROM STUDENT.InforList s JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID WHERE d.Username = 'Anh12') AND SemesterID = ( SELECT SemesterID FROM SEMESTERS.InforList WHERE SemesterNumber = 2 AND YEAR =2020 );";
    const sqlString = "SELECT * FROM COURSES.InforList";
    return await pool.request().query(sqlString,function(err,data){
      res.send({result: data.recordset});
    });
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
