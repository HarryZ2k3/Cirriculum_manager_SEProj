const Pool = require('pg').Pool
const readXlsxFile = require('read-excel-file/node');
const path = './src/data/test.xlsx';
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'STUDENTRECORDS',
//   password: '123456',
//   port: 5432,
// })

const pool = new Pool({
  user: "postgres",
  password: 'root',
  host: '127.0.0.1',
  database: 'studentrecords',
  port: 5432,
});

module.exports = pool;