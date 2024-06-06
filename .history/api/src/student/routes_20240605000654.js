const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getStudents);
router.get('/users/:username/:SemesterNumber/:Year',db.getGrades);
app.get('/users/:username',db.GetInfoCourse);
app.get('/users/:username/:Password',db.GetID);
app.get('/users/:username/:SemesterNumber/:SemesterYear/:CourseName',db.GradesChart);
app.get('/credits/:username', db.GetCredit); // lấy tín chỉ tất cả sem
app.get('/credits/:username/:SemesterNumber/:SemesterYear', db.CreditEachSem); //lấy tín chỉ từng semester
app.get('/GPA/:username', db.GPAoverYears);

module.exports = router;