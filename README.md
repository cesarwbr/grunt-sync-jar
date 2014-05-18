# grunt-sync-jar [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

> Task to synchronize your project with a compacted jar.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sync-jar --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sync-jar');
```

## The "syncjar" task

### Overview
In your project's Gruntfile, add a section named `syncjar` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  syncjar: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  syncjar: {
    default_options: {
      options: {
        cwd: 'test/fixtures/app/',
        src: '**',
        jar: 'test/dest/test.jar'
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

[downloads-image]: http://img.shields.io/npm/dm/grunt-sync-jar.svg
[npm-url]: https://www.npmjs.org/package/grunt-sync-jar
[npm-image]: http://img.shields.io/npm/v/grunt-sync-jar.svg
