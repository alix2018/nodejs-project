const {getUserInfo} = require('./serviceUser');

/**
* Authorize call only if the
* authorization token is correct
*
* @param {Object} req - request object
* @param {Object} res - result
* @param {Function} next - go to next middleware
*/
exports.authMiddleware = (req, res, next) => {
  if (req.headers.authorization === "Basic secret") {
    next();
    return;
  }

  res.status(403);
  res.send('You are not allowed to do this');
}

exports.checkTokenMiddleware = (req, res, next) => {
  const getUserInfoCallback = userInfo => {
    req.current_user = userInfo;
    next();
  }

  if (req.headers.authorization) {
    getUserInfo(req.headers.authorization, getUserInfoCallback);
  } else {
    req.current_user = null;
    next();
  }
}