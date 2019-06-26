/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// Add this line express
const expressConfig = require('./config/express');

// Add this line routes
const routeConfig = require('./routes');

// Setup server
const app = express();
const server = http.createServer(app);

const config = {
  port: 8080,
  ip: '127.0.0.1',
};

// Add this instance express
expressConfig(app);

// Add this instance app routes
routeConfig(app);

// Start server
function startServer() {
  app.shoppingCartBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;
