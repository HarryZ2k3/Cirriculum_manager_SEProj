const pool = require('../../db');
const queries = require('./queries');

const getStudents = async(req, res) => {
    try {
        const results = await pool.query(queries.getStudents);
        res.status(200).json(results.rows); // Assuming you want all rows
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching students' });
      }
    // pool.query(queries.getStudents,(error, results) => {
    //     if (error) throw error;
    //         res.status(200).json(results.row);
    // })
}
const getGrades = (request, response) => {
  const username = request.params.username; 
  const SemesterNumber = request.params.SemesterNumber;
  const Year = request.params.Year;
  pool.query(
      `SELECT 
      g.Inclass,
      g.Midterm,
      g.Final,
      (0.30 * g.Inclass + 0.30 * g.Midterm + 0.40 * g.Final) AS TotalGrade
  FROM 
      STUDENT.Grades g
  JOIN 
      COURSES.InforList c ON g.CourseID = c.CourseID
  JOIN 
      STUDENT.InforList s ON g.StudentID = s.StudentID
  JOIN 
      ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
  JOIN 
      SEMESTERS.InforList si ON g.SemesterID = si.SemesterID
  WHERE 
      d.Username = $1
      AND si.SemesterNumber = $2
      AND si.Year = $3;`, [username, SemesterNumber, Year], (error, results) => {
          if (error) {
              throw error;
          } else {
              response.status(200).json(results.rows);
          }
      }
  );
};

const getGrades = async(req, res) => {
  const username = request.params.username; 
  const SemesterNumber = request.params.SemesterNumber;
  const Year = request.params.Year;
  pool.query(queries.getStudents, [username, SemesterNumber, Year], (error, results) => {
      if (error) {
        throw error;
    } else {
        response.status(200).json(results.rows);
    }
}
);
}; 

const GetInfoCourse = async(req, res) => {
  try {
      const results = await pool.query(queries.GetInfoCourse);
      res.status(200).json(results.rows); // Assuming you want all rows
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching students' });
    }
}

module.exports = {
    getStudents,
}







