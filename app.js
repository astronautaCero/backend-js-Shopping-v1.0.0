/**
 * Main application file
 */

const express = require('express');
const http = require('http');

// Setup server
const app = express();
const server = http.createServer(app);

// Add this line
const expressConfig = require('./config/express');

const config = {
  port: 8080,
  ip: '127.0.0.1',
};

// Add this line
expressConfig(app);

// Start server
function startServer() {
  app.shoppingCartBK = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;
