const Pool = require("pg").Pool;
const pool = new Pool({
    user: "root",
    password: 'rôt',
    host: '127.0.0.1',
    database: 'studentrecords',
    port: 5432,
});
module.exports = pool;
