const bodyParser = require('body-parser');
const express = require('express');
const { env } = require('process');
const routes = require('./routes');
const app = express();

app.use('/', routes);
app.listen(5000 || process.env.PORT);