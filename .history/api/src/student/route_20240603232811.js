const { Router } = require('express');
const controller = require
const router = Router();

router.get('/', (req, res) => {
    res.send("using api route");
});

module.exports = router;