const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./router');

app.use(bodyParser.json());
app.use(router);


app.listen(8080);