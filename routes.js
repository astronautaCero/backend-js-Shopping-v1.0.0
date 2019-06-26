/**
 * Main application routes
 */

// Import Endpoints helloWorld
const helloWorld = require('./api/helloworld');
// Import Endpoints Products
const product = require('./api/product');

module.exports = (app) => {

  // Insert routes below helloWorld
  app.use('/api/helloworld', helloWorld);
   // Routes Product
  app.use('/api/products', product);

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
};
