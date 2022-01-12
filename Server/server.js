const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/operationRoutes');
const bsRoutes = require('./routes/bullshitRoutes');
const dotenv = require('dotenv').config();
const app = express();

//db connectionString
mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('You are Connected to MongoDB!'))
    .catch(err => console.log('Could not connect, error Message:', '\n', err));

//utilize Routes
app.use('/api', routes);

//allow the client to access as well as the localhost for testing.
app.use('*',(req,res,next) =>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    next();
});
app.listen(process.env.PORT || 5000);