'use strict';

/*
According to angular.io docs, "Routed apps must fallback to index.html".
This means that if loopback cannot "GET" or result in any type of 404, it means that loopback does not
understand the url and it needs to "fallback" to the index.html of the angular2 or angular4 app.
To fix this, you will have to add custom middleware to redirect loopback
to your angular index so that angular's router can take it from there.

This will redirect back to your angular app
and angular's router will route the url correctly while still being served by loopback.
*/
module.exports = function() {
  var path = require('path');
  return function urlNotFound(req, res, next) {
    let angularIndex = path.resolve('client/dist/index.html');
    res.sendFile(angularIndex, function(err) {
      if (err) {
        console.error(err);
        res.status(err.status).end();
      }
    });
  };
};
