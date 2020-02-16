const express = require('express');
const router = express.Router();
const {addUser, usersList, getUserById, checkIfUserLoggedIn} = require('./serviceUser');

/**
 * [GET] /users
 * Return all the users in a list
 */
router.get('/users', (req, res) => {
  res.send(usersList());
  res.status(200);
});

/**
* [GET] /users/:id
* Return the user requested
*/
router.get('/users/:id', (req, res) => {
  res.send(getUserById(req.params.id));
  res.status(200);
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

  const userLoggedInCallback = (resLoggedIn) => {
    const logginResponse = Boolean(resLoggedIn) ? {token: resLoggedIn} : 'login failed';
    const status = Boolean(resLoggedIn) ? 200 : 403;
    res.send(logginResponse);
    res.status(status);
  }

  checkIfUserLoggedIn(req.body, userLoggedInCallback);
});

module.exports = router;