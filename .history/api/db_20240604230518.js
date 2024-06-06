const Pool = require("pg").Pool;

const pool = new Pool({
  host: 'postgres',
  user: 'localhost',
  password: 'postgre',
  database: 'root',
  port: 5432,
});

module.exports = pool;
