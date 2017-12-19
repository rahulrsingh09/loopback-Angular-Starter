'use strict';

var gulp = require('gulp');
var {spawn} = require('child_process');
var node;
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var basePath = __dirname;

/* Run the npm script npm run buildLsdk using gulp */
spawn(
  './node_modules/.bin/lb-sdk',
  [
    basePath + '/server/server.js',
    basePath + '/client/src/app/shared/sdk',
    '-q'
  ], {stdio: 'inherit'}
);

/* Change detection on Angular app and then do npm build */
var exec = require('child_process').exec;

gulp.task('angular', function(cb) {
  process.chdir('client');
  exec('ng build -w', function(err, stdout, stderr) {
  });
});

/**
* $ gulp
* description: start the development environment
*/
gulp.task('default', function() {
  runSequence('sdk', 'browser-sync', 'server', 'angular', function() {
  });
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill();
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000/home',
    browser: 'google chrome',
    port: 7000,
  });
  gulp.watch(['client/src/app/*.ts'], browserSync.reload);
  let watcher = gulp.watch(['./common/models/**.js', './server/**.js', 'gulpfile.js'], ['sdk', 'server']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('server', function() {
  if (node) {
    node.kill();
  }
  node = spawn('node', [basePath + '/server/server.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});