// Require dependencies
var controller = require('./controllers/mainController')

// Export this function for use in app.js
module.exports = (app) => {
  // Handles routes for the /hello endpoint
  app.route('/hello')
     .get(controller.helloWorld)
     .post(controller.helloYou);
};
