const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

let trips = [
    {
        id: 1,
        country: 'Ireland',
        city: 'Dublin'
    },
    {
        id: 2,
        country: 'Belgium',
        city: 'Brussels'
    },
    {
        id: 3,
        country: 'Spain',
        city: 'Coruna'
    },
    {
        id: 4,
        country: 'Iceland',
        city: 'Reykjavik'
    }
];

let nextId = trips.length + 1;

/**
 * Add a new trip
 *
 * @param {Object} newTrip
 */
function addTrip(newTrip) {
    let trip = {};
    trip.id = nextId;
    nextId++;
    trip.country = newTrip.country;
    trip.city = newTrip.city
    return trips.push(trip);
}

/**
 * Get the list of trips
 */
function tripsList() {
    return trips;
}

/**
 * Delete a trip
 *
 * @param {Number} tripId
 */
function deleteTrip(tripId) {
    trips = trips.filter(trip => trip.id != tripId);
    return trips;
}

/**
 * Get a trip using id
 *
 * @param {Number} tripId
 */
function getTripById(tripId) {
    return trips.find(trip => trip.id == tripId);
}

/**
 * Update a trip
 *
 * @param {Number} tripId
 * @param {Object} newTripProps
 */
function updateTrip(tripId, newTripProps) {
    const index = trips.findIndex(trip => trip.id == tripId);

    if (index >= 0) {
        trips[index].country = newTripProps.country;
        trips[index].city = newTripProps.city;
    }
}

/**
 * [GET] /trips
 * Return all the trips in a list
 */
app.get('/trips', function(req, res) {
    res.send(tripsList());
});

/**
 * [GET] /trips/:id
 * Return the trip requested
 */
app.get('/trips/:id', function(req, res) {
    res.send(getTripById(req.params.id));
});

/**
 * [POST] /trips
 * Create a new trip
 */
app.post('/trips', function(req, res) {
    addTrip(req.body);
    res.send('Trip added');
});

/**
 * [POST] /trips/:id
 * Update a trip
 */
app.post('/trips/:id', function(req, res) {
    updateTrip(req.params.id, req.body);
    res.send('Trip updated');
});

/**
 * [DELETE] /trips/:id
 * Delete a trip
 */
app.delete('/trips/:id', function(req, res) {
    deleteTrip(req.params.id);
    res.send('Trip deleted');
});

app.listen(8080);