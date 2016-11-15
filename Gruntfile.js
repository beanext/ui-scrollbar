// Generated on 2016-11-15 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    example: 'example',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    usemin: {
      js: ['<%= yeoman.dist %>/beanext-ui-scrollbar.min.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>'
        ]
      }
    },
    uglify: {
      dist: {
        files: [{
          src: 'src/beanext-ui-scrollbar.js',
          dest: '<%= yeoman.dist %>/beanext-ui-scrollbar.min.js'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: '<%= yeoman.dist %>/',
          src: [
            '**'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/malihu-custom-scrollbar-plugin/',
          dest: '<%= yeoman.dist %>/mCustomScrollbar/',
          src: [
            'jquery.mCustomScrollbar.concat.min.js', 'jquery.mCustomScrollbar.min.css', 'mCSB_buttons.png'
          ]
        }]
      },
      example: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'bower_components/malihu-custom-scrollbar-plugin/',
          dest: '<%= yeoman.example %>/scripts/',
          src: [
            'jquery.mCustomScrollbar.concat.min.js', 'jquery.mCustomScrollbar.js', 'mCSB_buttons.png'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/malihu-custom-scrollbar-plugin/',
          dest: '<%= yeoman.example %>/styles/',
          src: [
            'jquery.mCustomScrollbar.min.css'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/angular/',
          dest: '<%= yeoman.example %>/scripts/',
          src: [
            'angular.min.js'
          ]
        }]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy:dist',
    'uglify',
    'usemin',
    'copy:example'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
