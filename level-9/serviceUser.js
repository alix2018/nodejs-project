const db = require('./db/models');

/**
* Add a new user
*
* @param {Object} newUser
*/
exports.getUser = username => {
  return db.User.findOne({
    raw: true,
    attributes: ['username', 'gender', 'birthDate'],
    where: {username},
    include: [{model: db.Country, attributes: ['name']}]
  })
    .then(user => {
      return user;
    })
}

exports.getUserList = countryId => {
  return db.Country.findOne({
    attributes: ['id', 'name'],
    where: {id: countryId},
    include: [{model: db.User, as: 'users', attributes: ['username']}]
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error('Error:', err);
    })
}