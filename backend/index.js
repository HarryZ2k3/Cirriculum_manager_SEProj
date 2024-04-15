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


  // Xem khóa học
 app.get('/course', async (req, res) => { 
    try {
        const pool = await connect;
        const sqlString = `SELECT * FROM COURSES.InforList"`;
        console.log(sqlString);
        
        pool.request().query(sqlString, function(err, data) {
            if (err) {
                console.error('SQL error:', err);
                res.status(500).send('Error fetching course data');
            } else {
                res.send({ result: data.recordset });
            }
        });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Error connecting to database');
    }
});


  // Xem điểm
app.get ('/StudentGrades', async(req, res)=>{
  let params=req.query
  let username=params.USERNAME;
  let semesterNum=params.semNum;
  let semesteryear=params.SemYear;
  let statement= `SELECT CourseName, Inclass,Midterm, Final FROM STUDENT.Grades g JOIN COURSES.InforList c  
    ON c.CourseID = g.CourseID WHERE g.StudentID = (SELECT StudentID  FROM STUDENT.InforList s JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID 
    WHERE d.Username =  "${username}"`;) AND SemesterID = (  SELECT SemesterID  FROM SEMESTERS.InforList WHERE SemesterNumber = "{semesterNum}" 
  AND Year = "{semesteryear}" );
 console.log(statement);
  if (error) throw error;
    else {
      console.log(JSON.stringify(results));
      return res.json({
        data: results
      })
    };
};
  
  
   


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
