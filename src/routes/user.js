const express = require('express');
const userControler = require('../controllers/user');

const router = express.Router();

router.post('/', userControler.addUser);

module.exports = router;
