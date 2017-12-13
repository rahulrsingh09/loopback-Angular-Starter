'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

/**
* $ gulp server
* description: launch the server. If there's a server already running, kill it.
*/
gulp.task('server', function() {
  if (node) node.kill();
  node = spawn('node', ['server/server.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('sdk', function() {
  spawn('./node_modules/.bin/lb-sdk', ['server/server.js', './client/src/app/shared/sdk', '-q'], {stdio: 'inherit'});
});

/**
* $ gulp
* description: start the development environment
*/
gulp.task('default', ['sdk', 'server'], function() {
  gulp.watch(['./common/models/*.js'], ['server']);
  // Need to watch for sass changes too? Just add another watch call!
  // no more messing around with grunt-concurrent or the like. Gulp is
  // async by default.
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill();
});
