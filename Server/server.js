const bodyParser = require('body-parser');
const express = require('express');
const { env } = require('process');
const routes = require('./routes');
const app = express();

app.use('/api', routes);
app.use('*',(req,res,next) =>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    next();
});
app.listen(5000 || process.env.PORT);