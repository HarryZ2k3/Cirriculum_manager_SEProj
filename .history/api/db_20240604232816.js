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
    password: 'root',
    host: 'post',
    port: "5432",
    database: 'postgre',
});
module.exports = pool;
