const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/operationRoutes');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());

//db connectionString
mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('You are Connected to MongoDB!'))
    .catch(err => console.log('Could not connect, error Message:', '\n', err));

//allow the client to access as well as the localhost for testing.
app.use('*',(req,res,next) =>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header('Content-Type', 'application/json');
    next();
});

//utilize Routes
app.use('/api', routes);

app.listen(process.env.PORT || 5000);