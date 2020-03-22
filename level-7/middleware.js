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
    if (userInfo.username) {
      req.current_user = userInfo.username
      next();
      return;
    }

    res.status(403);
    res.send('The token is invalid');
  }

  if (req.headers.authorization) {
    getUserInfo(req.headers.authorization, getUserInfoCallback);
  } else {
    res.status(401);
    res.send('You need a token');
  }
}