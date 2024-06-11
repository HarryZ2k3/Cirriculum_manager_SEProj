const { postRegister } = require("./controller");

const getStudents = "SELECT * FROM ACCOUNT.AdminAccounts";

//lấy điểm của học sinh dựa trên username, học kì,năm học
const getGrades = "SELECT g.Inclass, g.Midterm, g.Final, (0.30 * g.Inclass + 0.30 * g.Midterm + 0.40 * g.Final) AS TotalGrade FROM STUDENT.Grades g JOIN COURSES.InforList c ON g.CourseID = c.CourseID JOIN STUDENT.InforList s ON g.StudentID = s.StudentID JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID JOIN SEMESTERS.InforList si ON g.SemesterID = si.SemesterID WHERE d.Username = $1 AND si.SemesterNumber = $2 AND si.Year = $3";
const postRegister = "INSERT INTO ACCOUNT.AdminAccounts (email, username,password) VALUE (20, 'Nguyen Anh Hoa', 20, 20, 'male')"
// const getInfoCourse = `SELECT CourseName, Credit
// FROM DEPARTMENTS.curriculum e
// JOIN COURSES.InforList c ON c.CourseID = e.CourseID
// JOIN DEPARTMENTS.InforList i ON e.DepartmentID = i.DepartmentID
// JOIN STUDENT.InforList u ON e.DepartmentID = u.DepartmentID
// WHERE u.StudentID = (SELECT s.StudentID 
//                      FROM STUDENT.InforList s
//                      JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
//                      WHERE d.Username = $1)`;


// // lấy ID sinh viên từ username
// const GetID=(request, respone) =>{
//     const username = request.params.username; 
//     const Password = request.params.Password;

//       pool.query (
//         `SELECT s.StudentID 
//           FROM STUDENT.InforList s
//           JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
//           WHERE d.Username = $1 AND d.Password = $2;`, [username,Password], (error, results) => {
//             if (error) {
//                 throw error;
//             }
//             else {
//                 respone.status(200).json(results.rows);
//             }
//         }
//     );
// };

// //Lấy điểm từng môn để làm biểu đồ
// const GradesChart = (request, response) => {
//     const username = request.params.username;
//     const SemesterNumber = request.params.SemesterNumber;
//     const SemesterYear=request.params.SemesterYear;
//     const CourseName=request.params.CourseName;
//     pool.query(
//         `SELECT 
//             g.Inclass, 
//             g.Midterm, 
//             g.Final,
//             (0.30 * g.Inclass + 0.30 * g.Midterm + 0.40 * g.Final) AS TotalGrade
//         FROM 
//             STUDENT.Grades g
//             JOIN COURSES.InforList c ON g.CourseID = c.CourseID
//             JOIN SEMESTERS.InforList s ON g.SemesterID = s.SemesterID
//             JOIN STUDENT.InforList st ON g.StudentID = st.StudentID
//             JOIN ACCOUNT.StudentAccounts a ON st.SAID = a.SAID
//         WHERE 
//             a.Username = $1
//             AND s.SemesterNumber = $2
//             AND s.Year = $3
//             AND c.CourseName = $4 `, [username,SemesterNumber,SemesterYear,CourseName], (error, results) => {
//             if (error) {
//                 throw error;
//             } else {
//                 response.status(200).json(results.rows);
//             }
//         }
//     );
// };

// // lấy tổng số tín chỉ làm biểu đồ
// const GetCredit = (request, response) => {
//     const username = request.params.username; 
//     pool.query(
//         `SELECT si.SemesterNumber, si.Year, SUM(c.Credit) AS TotalCredits
//         FROM STUDENT.Grades g
//         JOIN COURSES.InforList c ON g.CourseID = c.CourseID
//         JOIN STUDENT.InforList s ON g.StudentID = s.StudentID
//         JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
//         JOIN SEMESTERS.InforList si ON g.SemesterID = si.SemesterID
//         WHERE d.Username = $1
//         GROUP BY si.SemesterNumber, si.Year
//         ORDER BY si.Year, si.SemesterNumber;
//         `, [username], (error, results) => {
//             if (error) {
//                 throw error;
//             } else {
//                 response.status(200).json(results.rows);
//             }
//         }
//     );
// };

// //Lấy tổng số tín chỉ của từng học kì đạt được
// const CreditEachSem = (request, response) => {
//     const username = request.params.username; 
//     const SemesterNumber=request.params.SemesterNumber;
//     const SemesterYear=request.params.SemesterYear;
//     pool.query(
//         `SELECT SUM(c.Credit) AS TotalCredits
//         FROM STUDENT.Grades g
//         JOIN COURSES.InforList c ON g.CourseID = c.CourseID
//         JOIN STUDENT.InforList s ON g.StudentID = s.StudentID
//         JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
//         JOIN SEMESTERS.InforList si ON g.SemesterID = si.SemesterID
//         WHERE d.Username = $1
//           AND si.SemesterNumber = $2
//           AND si.Year = $3;
        
//         `, [username, SemesterNumber, SemesterYear], (error, results) => {
//             if (error) {
//                 throw error;
//             } else {
//                 response.status(200).json(results.rows);
//             }
//         }
//     );
// };
// //Lấy tổng GPA cho từng học kì
// const GPAoverYears = (request, response) => {
//     const username = request.params.username; 
//     pool.query(
//         `WITH GradeDetails AS (
//             SELECT 
//                 si.SemesterID,
//                 si.SemesterNumber,
//                 si.Year,
//                 c.Credit,
//                 (0.30 * g.Inclass + 0.30 * g.Midterm + 0.40 * g.Final) AS TotalGrade
//             FROM 
//                 STUDENT.Grades g
//             JOIN 
//                 COURSES.InforList c ON g.CourseID = c.CourseID
//             JOIN 
//                 STUDENT.InforList s ON g.StudentID = s.StudentID
//             JOIN 
//                 ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
//             JOIN 
//                 SEMESTERS.InforList si ON g.SemesterID = si.SemesterID
//             WHERE 
//                 d.Username = $1
//                 AND si.SemesterID IN (1, 2, 3, 4, 5)
//         )
//         SELECT 
//             SemesterID,
//             SemesterNumber,
//             Year,
//             SUM(TotalGrade * Credit) / SUM(Credit) AS GPA
//         FROM 
//             GradeDetails
//         GROUP BY 
//             SemesterID,
//             SemesterNumber,
//             Year
//         ORDER BY 
//             SemesterID;
        
//         `, [username], (error, results) => {
//             if (error) {
//                 throw error;
//             } else {
//                 response.status(200).json(results.rows);
//             }
//         }
//     );
// };
module.exports={
    getStudents,
    //getInfoCourse,
    getGrades,
    postRegister,
    // GetID,
    // GetCredit,
    // GradesChart,
    // GPAoverYears,

}