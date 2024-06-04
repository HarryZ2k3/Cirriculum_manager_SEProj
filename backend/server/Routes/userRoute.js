const express = require ('express');
const {registerUser, findUser, getUsers,changePassword} = require('../Controllers/userController');
const router = express.Router();

// router.post("/register", registerUser);
// router.post("/register", registerbuchua);
router.post("/login", registerUser);
router.get("/find/:userID", findUser);
router.post("/changePassword/:userID",changePassword);
router.get("/", getUsers);



module.exports = router;