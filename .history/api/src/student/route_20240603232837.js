const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', (req, res) => {
    controller.getStudents;
});

module.exports = router;