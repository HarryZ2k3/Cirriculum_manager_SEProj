const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/getstudent", controller.getStudents);
router.get('/',controller.getGrades);
router.get('/',controller.GetInfoCourse);
router.get('/',controller.GetID);
router.get('/',controller.GradesChart);
router.get('/credits/:username', controller.GetCredit); // lấy tín chỉ tất cả sem
router.get('/credits/:username/:SemesterNumber/:SemesterYear', controller.CreditEachSem); //lấy tín chỉ từng semester
router.get('/GPA/:username', controller.GPAoverYears);

module.exports = router;