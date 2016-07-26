// Require dependencies 
var express = require('express');
var router = require('./routes');
var middleware = require('./middleware');

// Initiate our express app
var app = express();

// Run our middleware and router
// NOTE: It's important that middleware is run before routes are set
middleware(app);
router(app);

// Start our server and listen for requests
app.listen(1337, () => console.log('App listening on port 1337'));
