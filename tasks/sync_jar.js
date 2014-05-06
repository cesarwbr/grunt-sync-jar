/*
 * grunt-sync-jar
 * https://github.com/cesarwbr/sync-jar
 *
 * Copyright (c) 2014 Cesar William Alvarenga
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('promised-io/fs');
var shell = require('shelljs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sync_jar', 'Task to synchronize your project with a compacted jar.', function() {

    // Iterate over all specified file groups.
    this.files.map(function(filepath) {
      var absLink = shell.exec('readlink -f ' + filepath.jar);
      absLink = absLink.output.replace(/(\r\n|\n|\r)/gm, "");

      filepath.src.map(function(src) {
        if(!grunt.file.isDir(src)) {
          grunt.log.writeln('Copying ' + src + ' -> ' + absLink);

          shell.exec('(cd ' + filepath.cwd + ' &&  jar uf ' + absLink + ' ' + src + ')');
        }
      });
    });
  });

};