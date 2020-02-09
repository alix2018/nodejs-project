const express = require('express');
const router = express.Router();
const {addTrip, tripsList, deleteTrip, getTripById, updateTrip} = require('./service');
const {authMiddleware} = require('./middleware');

router.use((req, res, next) => {
  authMiddleware(req, res, next);
});

/**
 * [GET] /trips
 * Return all the trips in a list
 */
router.get('/trips', (req, res) => {
  res.send(tripsList());
  res.status(200);
});

/**
* [GET] /trips/:id
* Return the trip requested
*/
router.get('/trips/:id', (req, res) => {
  res.send(getTripById(req.params.id));
  res.status(200);
});

/**
* [POST] /trips
* Create a new trip
*/
router.post('/trips', (req, res) => {
  addTrip(req.body);
  res.send('Trip added');
});

/**
* [POST] /trips/:id
* Update a trip
*/
router.post('/trips/:id', (req, res) => {
  updateTrip(req.params.id, req.body);
  res.send('Trip updated');
});

/**
* [DELETE] /trips/:id
* Delete a trip
*/
router.delete('/trips/:id', (req, res) => {
  deleteTrip(req.params.id);
  res.send('Trip deleted');
});

module.exports = router;