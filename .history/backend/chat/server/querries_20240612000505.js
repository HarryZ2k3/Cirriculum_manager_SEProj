const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: 'root',
    host: '127.0.0.1',
    database: 'studentrecords',
    port: 5432,
  });
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'STUDENTRECORDS',
//   password: '12345',
//   port: 5432,
// })
