const Pool = require("pg").Pool;

const pool = new Pool({
  host: 'postgre',
  user: 'localhost',
  password: 'postgre',
  database: 'root',
  port: 5432,
});

module.exports = pool;
