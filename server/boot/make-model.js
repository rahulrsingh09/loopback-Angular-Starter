'use strict';
/*
const path = require('path');
const fs = require('fs');
const loopback = require('loopback');
const outputPath = __dirname + '/common/models';

const ds = loopback.createDataSource('mysql', {
  'host': '<your host>',
  'port': '<port>',
  'database': '<db>',
  'username': '<username>',
  'password': '<password>',
});

ds.discoverModelDefinitions({schema: '<schema-name>'}, function(err, models) {
  models.forEach(model => {
    ds.discoverSchema(model.name, {associations: false}, function(err, schema) {
      let outputName = outputPath + '/' + schema.name + '.json';
      fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('JSON saved to ' + outputName);
        }
      });
      fs.writeFile(outputPath + '/' + schema.name + '.js', schema.name, function(err) {
        if (err) throw err;
        console.log('Created ' + schema.name + '.json file');
      });
    });
  });
});
*/