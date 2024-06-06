const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM student", (error, results))
}

module.exports = {
    getStudents,
}