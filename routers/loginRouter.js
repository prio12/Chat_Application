//imports (or dependencies)
const express = require('express');
const router = express.Router();

//internal dependencies
const { getLogin } = require('../controllers/loginController');

//login page
router.get('/', getLogin);

module.exports = router;
