const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'STUDENTRECORDS',
  password: '123456',
  port: 5432,
})

//lấy điểm của học sinh dựa trên username, học kì,năm học
const getGrades = (request, response) => {
    const username = request.params.username; 
    const SemesterNumber = request.params.SemesterNumber;
    const Year = request.params.Year;
    pool.query(
        `SELECT CourseName, Inclass, Midterm, Final 
         FROM STUDENT.Grades g 
         JOIN COURSES.InforList c ON c.CourseID = g.CourseID
         WHERE g.StudentID = (
             SELECT StudentID 
             FROM STUDENT.InforList s
             JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
             WHERE d.Username = $1
         ) 
         AND g.SemesterID = (
             SELECT SemesterID
             FROM SEMESTERS.InforList
             WHERE SemesterNumber = $2 AND Year = $3
         )`, [username, SemesterNumber, Year], (error, results) => {
            if (error) {
                throw error;
            } else {
                response.status(200).json(results.rows);
            }
        }
    );
};

//Lấy thông tin của môn học dựa trên username học sinh
const GetInfoCourse = (request, response) => {
    const username = request.params.username;
    pool.query(
        `SELECT CourseName, Credit
         FROM DEPARTMENTS.curriculum e
         JOIN COURSES.InforList c ON c.CourseID = e.CourseID
         JOIN DEPARTMENTS.InforList i ON e.DepartmentID = i.DepartmentID
         JOIN STUDENT.InforList u ON e.DepartmentID = u.DepartmentID
         WHERE u.StudentID = (SELECT s.StudentID 
                              FROM STUDENT.InforList s
                              JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
                              WHERE d.Username = $1)`, [username], (error, results) => {
            if (error) {
                throw error;
            } else {
                response.status(200).json(results.rows);
            }
        }
    );
};

//Lấy điểm từng môn của học sinh
const getGradesPerCourse = (request, response) => {
    const username = request.params.username; 
    const SemesterNumber = request.params.SemesterNumber;
    const Year = request.params.Year;
    const Course = request.params.Course;
    pool.query(
        `SELECT c.CourseName, g.Midterm, g.Final
        FROM STUDENT.Grades g
        JOIN COURSES.InforList c ON g.CourseID = c.CourseID
        JOIN SEMESTERS.InforList s ON g.SemesterID = s.SemesterID
        JOIN STUDENT.InforList st ON g.StudentID = st.StudentID
        JOIN ACCOUNT.StudentAccounts a ON st.SAID = a.SAID
        WHERE a.Username = $1  
        AND s.SemesterNumber = $2
        AND s.Year = $3
        AND c.CourseName = $4;`, [username, SemesterNumber, Year, Course], (error, results) => {
            if (error) {
                throw error;
            } else {
                response.status(200).json(results.rows);
            }
        }
    );
};

//Lấy thông tin của môn học dựa trên username học sinh
const GetInfoCourse = (request, response) => {
    const username = request.params.username;
    pool.query(
        `SELECT c.CourseName, g.Midterm, g.Final
        FROM STUDENT.Grades g
        JOIN COURSES.InforList c ON g.CourseID = c.CourseID
        JOIN SEMESTERS.InforList s ON g.SemesterID = s.SemesterID
        JOIN STUDENT.InforList st ON g.StudentID = st.StudentID
        JOIN ACCOUNT.StudentAccounts a ON st.SAID = a.SAID
        WHERE a.Username = $1  
        AND s.SemesterNumber = $2
        AND s.Year = $3
        AND c.CourseName = $4`, [username, SemesterNumber, Year, Course], (error, results) => {
            if (error) {
                throw error;
            } else {
                response.status(200).json(results.rows);
            }
        }
    );
};    

// lấy ID sinh viên từ username
const GetID=(request, respone) =>{
    const username = request.params.username; 
    const Password = request.params.Password;

      pool.query (
        `SELECT s.StudentID 
          FROM STUDENT.InforList s
          JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
          WHERE d.Username = $1 AND d.Password = $2;`, [username,Password], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                respone.status(200).json(results.rows);
            }
        }
    );
};
module.exports={
    GetInfoCourse,
    getGrades,
    GetID,
    getGradesPerCourse,
}
  
