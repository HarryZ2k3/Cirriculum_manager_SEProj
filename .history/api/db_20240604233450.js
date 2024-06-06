const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'postgre',
//   port: 5432,
// });
const pool = new Pool({
    user: "root",
    password: '1234',
    host: '127.0.0.1',
    database: 'postgre',
    port: 5432,
});
module.exports = pool;
