//imports (or dependencies)
const express = require('express');
const router = express.Router();

//internal dependencies
const { getLogin, login, logout } = require('../controllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require('../middlewares/login/loginValidator');

const { redirectLoggedIn } = require('../middlewares/common/checkLogin');

//login page
router.get('/', decorateHtmlResponse('login'), redirectLoggedIn, getLogin);

//process login
router.post(
  '/',
  decorateHtmlResponse('login'),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

router.delete('/', logout);

module.exports = router;
