const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendStatus("using api route");
});

app