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

//kiểm tra student có ở trong database hay không
app.get('/CheckStudent', (req, res) => {
  let params = req.query;
  let username = params.username;
  let statement = `SELECT * FROM ACCOUNT.StudentAccounts WHERE Username = "${username}"`;
  console.log(statement);
  con.query(statement, function(error, results, fields) {
    if (error) {
      throw error;
    } else {
      return res.json({ data: results });
    }
  });
});

// tạo Student account
app.get('/makeStuAccount', (req, res) => {
  let params = req.query;
  let ID = params.ID;
  let username = params.username;
  let password = params.password;
  let gender = params.gender;
  let department = params.department;
  let Studentclass = params.Class;
  let studentname = params.studentname;
  let statement = ` INSERT INTO STUDENT.InfoList (StudentID, StudentName, Gender)
                    VALUES ("${ID}", "${studentname}", "${gender}")`;
  console.log(statement);
  con.query(statement, function ( error, results, fields) {
    if (err) {
                console.error('SQL error:', err);
                res.status(500).send('Error fetching course data');
            }
    else {
      let sql_statement = `INSERT INTO ACCOUNT.StudentAccounts (SAID, Username, Password)
                     VALUES ("${ID}", "${username}", "${password}")`;
console.log(sql_statement);

con.query(sql_statement, function (error, results, fields) {
    if (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ error: "An error occurred while inserting data" });
    } else {
        username_in_use = username;
        password_in_use = password;
        return res.json({ data: results });
    }
                                                         });
         }
});
        
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
      });
    }
});
  
  
   


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
