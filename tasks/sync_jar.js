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
      // for (var name in filepath) {
      //   if (filepath.hasOwnProperty(name)) {
      //     grunt.log.writeln("(" + name + ") Value: " + filepath[name]);
      //   } else {
      //     grunt.log.writeln(name); // toString or something else
      //   }
      // }

      filepath.src.map(function(src) {
        var mysrc = path.join(filepath.cwd, src);
        grunt.log.writeln('src=' + src);
        var absLink = shell.exec('readlink -f ' + filepath.jar);
        absLink = absLink.output.replace(/(\r\n|\n|\r)/gm,"");
        grunt.log.writeln('cmd=' + '(cd ' + filepath.cwd + ' &&  jar uf ' + absLink + ' ' + src + ')');

        shell.exec('(cd ' + filepath.cwd + ' &&  jar uf ' + absLink + ' ' + src + ')');
        //grunt.file.copy(mysrc, 'tmp/teste.js');
      });
      // Read file source.
      grunt.log.writeln('File: ' + filepath.cwd);
    });
  });

};