const express = require('express');
const router = express.Router();
const {addUser, usersList, getUserById, checkIfUserLoggedIn, getUserInfo} = require('./serviceUser');

/**
 * [GET] /users
 * Return all the users in a list
 */
router.get('/users', (req, res) => {
  res.status(200);
  res.send(usersList());
});

/**
* [GET] /users/:id
* Return the user requested
*/
router.get('/users/:id', (req, res) => {
  res.status(200);
  res.send(getUserById(req.params.id));
});

/**
* [POST] /users
* Create a new user
*/
router.post('/users', (req, res) => {
  addUser(req.body);
  res.send('user added');
});

/**
* [POST] /login
* Login with a user
*/
router.post('/login', (req, res) => {
  const userLoggedInCallback = token => {
    const bodyResponse = token ? {token} : 'login failed';
    const status = token ? 200 : 403;
    res.status(status);
    res.send(bodyResponse);
  }

  checkIfUserLoggedIn(req.body, userLoggedInCallback);
});

/**
* [GET] /me
* Login with a user
*/
router.get('/me', (req, res) => {
  const getUserInfoCallback = userInfo => {
    const messageResponse = userInfo.username ? `Your user name is ${userInfo.username}` : 'The token is invalid';
    const status = userInfo.username ? 200 : 401;
    res.status(status);
    res.send(messageResponse);
  }
  getUserInfo(req.headers.authorization, getUserInfoCallback);
});

module.exports = router;