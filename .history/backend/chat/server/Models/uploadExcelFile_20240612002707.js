const pool = require('./index')
const readXlsxFile = require('read-excel-file/node');

const UploadTest = async function(tempFilePath) {
    const rows = await readXlsxFile(tempFilePath);
    rows.shift();

    const successData = [];
    const failureData = [];

    for (const row of rows) {
        const [studentcode,studentname,gender,departmentid,batch,dateofbirth] = row;
        const sql = `INSERT INTO STUDENT.inforlist(studentcode,studentname,gender,departmentid,batch,dateofbirth) values ($1,$2,$3,$4,$5,$6)`;

        try {
            await pool.query(sql, [studentcode,studentname,gender,departmentid,batch,dateofbirth]);
            successData.push({studentcode,studentname,gender,departmentid,batch,dateofbirth});
        } catch (error) {
            failureData.push({studentcode,studentname,gender,departmentid,batch,dateofbirth});
        }
    }

    console.log("Success Data:", successData);
    console.log("Failure Data:", failureData);
    
    return {successData, failureData};
}

module.exports = 
{
    UploadTest,
}