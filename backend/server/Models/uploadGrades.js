const pool = require('./index');
const readXlsxFile = require('read-excel-file/node');

const UploadTest = async function(tempFilePath) {
    const rows = await readXlsxFile(tempFilePath);
    rows.shift(); 

    const successData = [];
    const failureData = [];

    for (const row of rows) {
        const [studentcode, CourseID, SemesterID, Inclass, Midterm, Final] = row;

        // Check if Student exists in the table
        const checkStudentSql = `SELECT * FROM STUDENT.InforList WHERE studentcode = $1`;
        try {
            const studentCheckResult = await pool.query(checkStudentSql, [StudentID]);
            if (studentCheckResult.rowCount > 0) {
                //  If  exists, insert or update grades
                const sql = `
                    INSERT INTO STUDENT.Grades (studentcode, CourseID, SemesterID, Inclass, Midterm, Final)
                     VALUES ($1, $2, $3, $4, $5, $6)
                      ON CONFLICT (username, CourseID, SemesterID)
                       DO UPDATE SET 
                        Inclass = EXCLUDED.Inclass, 
                        Midterm = EXCLUDED.Midterm, 
                         Final = EXCLUDED.Final;

                `;
// SQL này giúp ta điền điểm cho những học sinh mới chưa có cột điểm nào và cập nhật điểm mới cho bảng điểm cũ của học sinh
                await pool.query(sql, [studentcode, CourseID, SemesterID, Inclass, Midterm, Final]);
                successData.push({studentcode, CourseID, SemesterID, Inclass, Midterm, Final});
            } else {
                // Student not exist in Students table
                console.error(`studentcode ${studentcode} does not exist.`);
                failureData.push({studentcode, CourseID, SemesterID, Inclass, Midterm, Final, error: 'StudentID does not exist in Students table'});
            }
        } catch (error) {
            console.error(`Error processing studentcode ${studentcode}:`, error);
            failureData.push({studentcode, CourseID, SemesterID, Inclass, Midterm, Final, error: error.message});
        }
    }

    console.log("Success Data:", successData);
    console.log("Failure Data:", failureData);

    return
