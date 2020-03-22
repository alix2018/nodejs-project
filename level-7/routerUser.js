const express = require('express');
const router = express.Router();
const {addUser, usersList, getUserById, checkIfUserLoggedIn} = require('./serviceUser');

const {checkTokenMiddleware} = require('./middleware');

router.use(checkTokenMiddleware);

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
  const messageResponse = (req.current_user && req.current_user.username) ? `Your user name is ${req.current_user.username}` : 'The user is not connected';
  res.send(messageResponse);
  res.status(200);
});

module.exports = router;