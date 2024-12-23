//imports (or dependencies)
const express = require('express');
const router = express.Router();

//internal dependencies
const { getInbox } = require('../controllers/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { checkLogin } = require('../middlewares/common/checkLogin');

//login page
router.get('/', decorateHtmlResponse('inbox'), checkLogin, getInbox);

module.exports = router;
