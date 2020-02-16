const express = require('express');
const router = express.Router();
const {addUser, usersList, getUserById, checkIfUserLoggedIn} = require('./serviceUser');

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
    const bodyResponse = token ? {token: token} : 'login failed';
    const status = token ? 200 : 403;
    res.status(status);
    res.send(bodyResponse);
  }

  checkIfUserLoggedIn(req.body, userLoggedInCallback);
});

module.exports = router;