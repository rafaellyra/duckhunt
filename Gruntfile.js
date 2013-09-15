module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'assets/styles/sass',
                    cssDir: 'assets/styles/css',
                    imagesDir: 'assets/images/compass',
                    fontsDir: 'assets/fonts/',
                    outputStyle: 'compressed',
                    relativeAssets: true
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'assets/scripts/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/styles/sass/**/*'],
                tasks: ['buildCSS', 'csslint'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', ['connect:server']);
    grunt.registerTask('dev', ['csswatch']);

    grunt.registerTask('csswatch', ['watch:styles']);
    grunt.registerTask('buildCSS', ['compass:dist', 'csslint']);
};
