//imports (or dependencies)
const createError = require('http-errors');

//not found error handler
function notFoundHandler(req, res, next) {
  next(createError(404, 'Your requested content was not found!'));
}

//default error handler
function errorHandler() {}
