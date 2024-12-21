//imports (or dependencies)
const express = require('express');
const router = express.Router();

//internal dependencies
const { getUsers } = require('../controllers/usersController');

//login page
router.get('/', getUsers);

module.exports = router;
