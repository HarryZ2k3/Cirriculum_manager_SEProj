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

// const pool = new Pool({
//   user: "root",
//   password: '1234',
//   host: '127.0.0.1',
//   database: 'postgre',
//   port: 5432,
// });

module.exports = pool;