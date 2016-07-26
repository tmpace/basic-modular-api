// Require dependencies
var bodyParser = require('body-parser');

// Export this function for use in app.js
module.exports = (app) => {
  // Tell our app to use bodyParser middleware
  app.use(bodyParser.json());
};
