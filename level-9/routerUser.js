const express = require('express');
const router = express.Router();
const {getUser, getUserList} = require('./serviceUser');

/**
 * [GET] /users
 * Return all the users in a list
 */
router.get('/users/:username', (req, res) => {
  getUser(req.params.username)
    .then(user => {
      if (user) {
        res.status(200);
        res.send(user);
        return;
      }

      res.status(404);
      res.send('User not found');
    })
});

/**
 * [GET] /countryId
 * Return the users living in a country
 */
router.get('/list/users/:countryId', (req, res) => {
  // TODO
  getUserList(req.params.countryId)
  .then(users => {
    res.status(200);
    res.send(users);
  })
  .catch(err => {
    res.status(400);
    res.send('The request was not valid');
  })
});

module.exports = router;