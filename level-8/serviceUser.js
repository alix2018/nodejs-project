const db = require('./db/models');

/**
* Add a new user
*
* @param {Object} newUser
*/
exports.getUser = username => {
  return db.User.findOne({
    attributes: ['username', 'gender', 'birthDate'],
    where: {username}
  })
    .then(user => {
      return user;
    })
}