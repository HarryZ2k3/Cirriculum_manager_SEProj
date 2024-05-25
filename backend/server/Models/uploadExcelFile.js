const pool = require('./index')
const readXlsxFile = require('read-excel-file/node');

const UploadTest = async function(tempFilePath) {
    const rows = await readXlsxFile(tempFilePath);
    rows.shift();

    const successData = [];
    const failureData = [];

    for (const row of rows) {
        const [bookid,bookname] = row;
        const sql = `INSERT INTO book.inforlist(bookid,bookname) values ($1,$2)`;

        try {
            await pool.query(sql, [bookid,bookname]);
            successData.push({bookid,bookname});
        } catch (error) {
            failureData.push({bookid,bookname});
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