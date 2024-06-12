const express = require('express');
const path = require('path')
const fileUpload = require('express-fileupload');
const uploadGradesController = require ('../Controllers/uploadGrades')
const router = express.Router();
const uploadOpts = {
    useTempFiles: true,
    tempFileDir: path.join(__dirname,'..','tmp')
}

router.post("/",fileUpload(uploadOpts),uploadGradesController.upload);


module.exports = router;