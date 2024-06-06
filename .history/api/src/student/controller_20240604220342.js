const pool = require('../../db');
const queries = require('./queries');
const getStudents = (req, res) => {
    pool.query(queries.getStudents,(error, results) => {
        if (error) throw error;
            res.status(200).json(results.row);
    })
}

module.exports = {
    getStudents,
}

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

module.exports = pool;