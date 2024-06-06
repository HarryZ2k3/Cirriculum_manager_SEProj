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
  try {
      const results = await pool.query(queries.getGrades);
      res.status(200).json(results.rows); // Assuming you want all rows
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching students' });
    }
}

const GetInfoCourse = async(req, res) => {
  try {
      const results = await pool.query(queries.GetInfoCours);
      res.status(200).json(results.rows); // Assuming you want all rows
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching students' });
    }
}

module.exports = {
    getStudents,
}







