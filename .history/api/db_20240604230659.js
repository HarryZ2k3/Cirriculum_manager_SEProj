const Pool = require("pg").Pool;

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'postgre',
  database: 'postgre',
  port: 5432,
});

module.exports = pool;
