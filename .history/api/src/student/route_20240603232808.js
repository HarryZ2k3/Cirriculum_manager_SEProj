const { Router } = require('express');
const controller = re
const router = Router();

router.get('/', (req, res) => {
    res.send("using api route");
});

module.exports = router;