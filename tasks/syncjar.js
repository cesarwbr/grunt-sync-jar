/*
 * grunt-sync-jar
 * https://github.com/cesarwbr/sync-jar
 *
 * Copyright (c) 2014 Cesar William Alvarenga
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');
var chalk = require('chalk');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('syncjar',
    'Task to synchronize your project with a compacted jar.', function() {

      var options = this.options({
        cwd: '.',
        src: '**',
        jar: ''
      });

      var absLink = shell.exec('readlink -f ' + options.jar);
      absLink = absLink.output.replace(/(\r\n|\n|\r)/gm, "");

      grunt.log.writeln('Sync: ' + chalk.cyan(options.cwd + options.src) + ' -> ' + chalk.cyan(absLink));

      var exec = shell.exec('(cd ' + options.cwd + ' && exec jar uf ' +
            absLink + ' ' + options.src + ')');

    });

};
