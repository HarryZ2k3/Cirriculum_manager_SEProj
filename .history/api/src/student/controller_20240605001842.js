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
  });
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







