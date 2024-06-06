const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getStudents);
router.get('/users/:username/:SemesterNumber/:Year',db.getGrades);
router.get('/users/:username',db.GetInfoCourse);
router.get('/users/:username/:Password',db.GetID);
router.get('/users/:username/:SemesterNumber/:SemesterYear/:CourseName',db.GradesChart);
router.get('/credits/:username', db.GetCredit); // lấy tín chỉ tất cả sem
router.get('/credits/:username/:SemesterNumber/:SemesterYear', db.CreditEachSem); //lấy tín chỉ từng semester
app.get('/GPA/:username', db.GPAoverYears);

module.exports = router;