'use strict';

var gulp = require('gulp');
var {spawn} = require('child_process');
var node;
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var run = require('gulp-run');
var runSequence = require('run-sequence');

/* Run the npm script npm run buildLsdk using gulp */
gulp.task('sdk', function() {
  // process.chdir('server');
  spawn('./node_modules/.bin/lb-sdk', ['server/server.js', './client/src/app/shared/sdk', '-q'], {stdio: 'inherit'});
});

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
    gulp.watch(['./common/models/*.js'], ['server']);
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
});

gulp.task('server', function() {
  if (node) node.kill();
  node = spawn('node', ['server/server.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});