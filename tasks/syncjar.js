/*
 * grunt-sync-jar
 * https://github.com/cesarwbr/sync-jar
 *
 * Copyright (c) 2014 Cesar William Alvarenga
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');
var Q = require('q');
var chalk = require('chalk');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('syncjar',
    'Task to synchronize your project with a compacted jar.', function() {
      var done = this.async();
      // Iterate over all specified file groups.
      this.files.map(function(filepath) {
        var absLink = shell.exec('readlink -f ' + filepath.jar);
        absLink = absLink.output.replace(/(\r\n|\n|\r)/gm, "");
        var promises = [];

        filepath.src.map(function(src) {
          if (!grunt.file.isDir(src)) {
            var deferred = Q.defer();
            grunt.log.writeln('Copying ' + src + ' -> ' + absLink);
            var exec = shell.exec('(cd ' + filepath.cwd + ' &&  jar uf ' +
              absLink + ' ' + src + ')', function(code, output) {
                grunt.log.write(src + '...');
                grunt.log.ok();
                deferred.resolve('ok');
              });
            promises.push(deferred.promise);
          }

        });

        Q.all(promises).spread(function() {
          grunt.log.writeln('Copied ' + chalk.cyan(promises.length) + (
            promises.length === 1 ? ' file' : ' files'));
          grunt.log.writeln('All done!');
          done();
        });


      });


    });

};
