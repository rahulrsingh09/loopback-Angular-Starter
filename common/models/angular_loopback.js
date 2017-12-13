'use strict';

module.exports = function(Angular) {
  Angular.greet = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, 'Angular and Loopback is now Configured For' + msg);
    });
  };
};
