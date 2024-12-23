//imports (or dependencies)
const express = require('express');
const router = express.Router();
const avatarUpload = require('../middlewares/users/avatarUploads');

//internal dependencies
const {
  getUsers,
  addUser,
  removeUser,
} = require('../controllers/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const {
  addUserValidators,
  addUserValidationHandler,
} = require('../middlewares/users/userValidators');

const { checkLogin } = require('../middlewares/common/checkLogin');

// users page
router.get('/', decorateHtmlResponse('users'), checkLogin, getUsers);

//add user
router.post(
  '/',
  checkLogin,
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete('/:id', removeUser);

module.exports = router;
