const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'postgre',
//   port: 5432,
// });
const pool = new Pool({
    user: "post",
    password: 'root',
    host: '127.0.0.1',
    database: 'postgre',
    port: 5432,
});
module.exports = pool;