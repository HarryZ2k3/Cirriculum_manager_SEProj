const pool = require('./index');
const readXlsxFile = require('read-excel-file/node');

const UploadTest = async function(tempFilePath) {
    const rows = await readXlsxFile(tempFilePath);
    rows.shift(); 

    const successData = [];
    const failureData = [];

    for (const row of rows) {
        const [studentcode, Inclass, Midterm, Final] = row;

        // Check if studentcode exists 
        const checkStudentSql = `SELECT 1 FROM STUDENT.Students WHERE studentcode = $1`;
        try {
            const studentCheckResult = await pool.query(checkStudentSql, [studentcode]);
            if (studentCheckResult.rowCount > 0) {
                // studentcode exists insert grades
                const insertGradeSql = `INSERT INTO STUDENT.Grades(studentcode, Inclass, Midterm, Final) VALUES ($1, $2, $3, $4)`;
                await pool.query(insertGradeSql, [studentcode, Inclass, Midterm, Final]);
                successData.push({studentcode, Inclass, Midterm, Final});
            } else {
                // studentcode  not exist
                console.error(`studentcode ${studentcode} does not exist.`);
                failureData.push({studentcode, Inclass, Midterm, Final, error: 'StudentID does not exist'});
            }
        } catch (error) {
            console.error(`Error processing StudentID ${studentcode}:`, error);
            failureData.push({studentcode, Inclass, Midterm, Final, error: error.message});
        }
    }

    console.log("Success Data:", successData);
    console.log("Failure Data:", failureData);

    return {successData, failureData};
}

module.exports = {
    UploadTestGrades,
};
