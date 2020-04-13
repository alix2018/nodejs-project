const express = require('express');
const router = express.Router();
const {getUser} = require('./serviceUser');

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

module.exports = router;