const { Router } = require('express');
const controller = 
const router = Router();

router.get('/', (req, res) => {
    res.send("using api route");
});

module.exports = router;