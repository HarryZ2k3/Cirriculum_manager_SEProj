const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM student", (error, results) => {
        if (error)
    })
}

module.exports = {
    getStudents,
}