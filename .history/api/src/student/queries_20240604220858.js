const Pool = require('pg').Pool

const getStudents = "SELECT * FROM STUDENT.InforList";

module.exports = {
    getStudents,
}