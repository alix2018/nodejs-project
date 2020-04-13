const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routerUser = require('./routerUser');

app.use(bodyParser.json());
app.use(routerUser);

app.listen(8080);