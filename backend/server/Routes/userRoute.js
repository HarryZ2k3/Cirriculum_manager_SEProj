const express = require ('express');
const {registerUser, findUser, getUsers} = require('../Controllers/userController');
const router = express.Router();
const {registerbuchua} = require('../Controllers/userController')

// router.post("/register", registerUser);
// router.post("/register", registerbuchua);
router.post("/login", registerUser);
router.get("/find/:userID", findUser);
router.get("/", getUsers);


module.exports = router;