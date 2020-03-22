const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routerTrip = require('./routerTrip');
const routerUser = require('./routerUser');

app.use(bodyParser.json());
app.use(routerUser);
app.use(routerTrip);

app.listen(8080);