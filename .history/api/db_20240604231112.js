const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'postgre',
//   port: 5432,
// });
const pool = new Pool({
    user: process.env.USER,
    password: "root",
    host: process.env.HOST,
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
});
module.exports = pool;
