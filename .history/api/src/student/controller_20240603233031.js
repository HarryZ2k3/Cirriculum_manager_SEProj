const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM student", (error, resu))
}

module.exports = {
    getStudents,
}