const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/userManagement');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//app.use(bodyParser); // form data
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({extended: true})); // url-encodeded 

// routes
app.use(user);

app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000');
});