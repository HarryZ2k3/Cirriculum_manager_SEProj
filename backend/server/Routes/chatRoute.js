const express = require('express');
const { findUserChats } = require('../Controllers/chatController');
const {findChat} = require('../Controllers/chatController');
const {createChat}= require('../Controllers/chatController');
const router = express.Router();


router.post("/",createChat);
router.get("/:userId",findUserChats);
router.get("/find/:firstId/:secondId",findChat);

module.exports = router;