const Pool = require("pg").Pool;

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'process.env.DB_USER',
  port: 5432,
});

module.exports = pool;
