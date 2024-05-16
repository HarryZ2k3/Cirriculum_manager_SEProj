const pool = require('./index')
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



module.exports = {
    getGrades,
}