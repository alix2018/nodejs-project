const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

let users = [
  {
      id: 1,
      username: 'toto',
      password: 'foo'
  },
  {
    id: 2,
    username: 'toto2',
    password: 'foo2'
  },
  {
    id: 3,
    username: 'toto3',
    password: 'foo3'
  }
];

let nextId = users.length + 1;

/**
* Add a new user
*
* @param {Object} newUser
*/
exports.addUser = newUser => {
  let user = {};
  user.id = nextId;
  nextId++;
  user.username = newUser.username;
  bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
    user.password = hash;
    return users.push(user);
  });
}

/**
* Get the list of users
*/
exports.usersList = () => {
  return users;
}

/**
* Get a user using id
*
* @param {Number} userId
*/
exports.getUserById = userId => {
  return users.find(user => user.id == userId);
}

/**
* Check if user exists
*
* @param {Object} user
*/
exports.checkIfUserLoggedIn = (user, userLoggedInCallback) => {
  const userFound = users.find(userDb => userDb.username == user.username);

  if (userFound) {
    bcrypt.compare(user.password, userFound.password, (error, result) => {
      if (result) {
        const token = jwt.sign(userFound, 'aB123456@');
        userLoggedInCallback(token);
        return;
      }

      userLoggedInCallback();
    });
  } else {
    userLoggedInCallback();
  }

}