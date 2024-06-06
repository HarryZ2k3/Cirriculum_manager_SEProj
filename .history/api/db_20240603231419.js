const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres"
    host: "localhost",
    datatbase: "student",
    password: "root",
})