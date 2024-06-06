const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getStudents);
router.get('/:username/:SemesterNumber/:Year',controller.getGrades);
router.get('/:username',controller.GetInfoCourse);
router.get('/:username/:Password',controller.GetID);
router.get('/users/:username/:SemesterNumber/:SemesterYear/:CourseName',controller.GradesChart);
router.get('/credits/:username', controller.GetCredit); // lấy tín chỉ tất cả sem
router.get('/credits/:username/:SemesterNumber/:SemesterYear', controller.CreditEachSem); //lấy tín chỉ từng semester
router.get('/GPA/:username', controller.GPAoverYears);

module.exports = router;