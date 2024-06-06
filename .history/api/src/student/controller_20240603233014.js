const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM ")
}

module.exports = {
    getStudents,
}