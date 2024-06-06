const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SE")
}

module.exports = {
    getStudents,
}