const express = require('express');
const router = express.Router();

const {addTrip, tripsList, deleteTrip, getTripById, updateTrip} = require('./service');

/**
 * [GET] /trips
 * Return all the trips in a list
 */
router.get('/trips', function(req, res) {
  if (req.headers.authorization === "Basic secret") {
    res.send(tripsList());
    res.status(200);
    return;
  }

  res.status(403);
  res.send('You are not allowed to see this');
});

/**
* [GET] /trips/:id
* Return the trip requested
*/
router.get('/trips/:id', function(req, res) {
  if (req.headers.authorization === "Basic secret") {
    res.send(getTripById(req.params.id));
    res.status(200);
    return;
  }

  res.status(403);
  res.send('You are not allowed to see this');
});

/**
* [POST] /trips
* Create a new trip
*/
router.post('/trips', function(req, res) {
  addTrip(req.body);
  res.send('Trip added');
});

/**
* [POST] /trips/:id
* Update a trip
*/
router.post('/trips/:id', function(req, res) {
  updateTrip(req.params.id, req.body);
  res.send('Trip updated');
});

/**
* [DELETE] /trips/:id
* Delete a trip
*/
router.delete('/trips/:id', function(req, res) {
  deleteTrip(req.params.id);
  res.send('Trip deleted');
});

module.exports = router;