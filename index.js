'use strict';
require('babel-register')({});
var server = require('./server').default;
const PORT = process.env.PORT || 8080;

server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
