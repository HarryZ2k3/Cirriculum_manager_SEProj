const db = require ('../Models/uploadExcelFile');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path')
const readXlsxFile = require('read-excel-file/node');

class uploadExcelController{
    
    // [POST] /import-excel
    async upload (req,res){
        try {
            const {excel} = req.files;
            console.log(excel);
            if (excel.mimetype!=='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
                fs.unlinkSync(excel.tempFilePath);
                return res.status(400).json({msg:'File is invalid'});
            }
            await db.UploadTest(excel.tempFilePath);
            
            fs.unlinkSync(excel.tempFilePath);
           
            return res.json({msg: 'Ok'})
            
        } catch (error) {
            console.log(error);
        }
    
}
}

module.exports = new uploadExcelController;