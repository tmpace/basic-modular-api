// Export this object to use in routes.js
module.exports = {
  helloWorld(req, res) {
    res.send('Hello, world!');
  },

  helloYou(req, res) {
    const name = req.body.name;
    
    // We use ES2015 template literals here
    res.send(`Hello, ${name}!`); 
  }
};
