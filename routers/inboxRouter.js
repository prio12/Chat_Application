//imports (or dependencies)
const express = require('express');
const router = express.Router();

//internal dependencies
const { getInbox } = require('../controllers/inboxController');

//login page
router.get('/', getInbox);

module.exports = router;
