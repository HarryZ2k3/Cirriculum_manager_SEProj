const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents,(error, results) => {
        if (error) throw error;
            res.status(200).json(results.row);
    })
    pool.query(queries.getStudents,(error, results) => {
        if (error) throw error;
            res.status(200).json(results.row);
    })
}

module.exports = {
    getStudents,
}




    // try {
    //     const results = await pool.query(queries.getStudents);
    //     res.status(200).json(results.rows); // Assuming you want all rows
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Error fetching students' });
    //   }