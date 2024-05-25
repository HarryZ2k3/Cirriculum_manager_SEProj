const pool = require('./index');


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

const getTotalCourses = (req,res) => {
    pool.query(`SELECT * FROM COURSES.InforList`,(error,results) =>{
        if (error) {
            throw error;
        } else {
            res.status(200).json(results.rows);
        }
    })
}

module.exports = {
    GetInfoCourse,
    getTotalCourses,
}