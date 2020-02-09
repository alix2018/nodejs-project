const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
const router = require('./router');

// app.use(bodyParser.json());
app.use(router);

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
exports.addTrip = newTrip => {
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
exports.tripsList = () => {
    return trips;
}

/**
 * Delete a trip
 *
 * @param {Number} tripId
 */
exports.deleteTrip = tripId => {
    trips = trips.filter(trip => trip.id != tripId);
    return trips;
}

/**
 * Get a trip using id
 *
 * @param {Number} tripId
 */
exports.getTripById = tripId => {
    return trips.find(trip => trip.id == tripId);
}

/**
 * Update a trip
 *
 * @param {Number} tripId
 * @param {Object} newTripProps
 */
exports.updateTrip = (tripId, newTripProps) => {
    const index = trips.findIndex(trip => trip.id == tripId);

    if (index >= 0) {
        trips[index].country = newTripProps.country;
        trips[index].city = newTripProps.city;
    }
}

app.listen(8080);