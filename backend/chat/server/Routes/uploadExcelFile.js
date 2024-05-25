const express = require('express');
const path = require('path')
const fileUpload = require('express-fileupload');
const uploadExcelController = require ('../Controllers/uploadExcelController')
const router = express.Router();
const uploadOpts = {
    useTempFiles: true,
    tempFileDir: path.join(__dirname,'..','tmp')
}

router.post("/",fileUpload(uploadOpts),uploadExcelController.upload);


module.exports = router;