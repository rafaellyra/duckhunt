module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir: 'assets/styles/sass/',
                    cssDir: 'assets/styles/css/',
                    imagesDir: 'assets/images/',
                    fontsDir: 'assets/fonts/',
                    outputStyle: 'expanded',
                    generatedImagesDir: 'assets/images/sprites/',
                    relativeAssets: true
                }
            }
        },
        clean: {
            'no-write': true,
            compass: ['assets/styles/css/', 'assets/images/sprites/']
        },
        uglify: {
            dev: {
                files: {
                    'assets/scripts/main.min.js': ['assets/scripts/main.optimized.js']
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'assets/scripts/require.config.js', 'assets/scripts/main.js', 'assets/scripts/modules/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/styles/sass/**/*'],
                tasks: ['buildCSS']
            },
            javascript: {
                files: ['assets/styles/scripts/main.js', 'assets/styles/scripts/modules/*.js'],
                tasks: ['buildJS']
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: 'assets/scripts/main',
                    baseUrl: './',
                    mainConfigFile: 'assets/scripts/require.config.js',
                    out: 'assets/scripts/main.optimized.js'
                }
            }
        }
    });

    grunt.registerTask('server', ['connect:server']);

    grunt.registerTask('buildCSS', ['clean:compass', 'compass:dev', 'csslint']);
    grunt.registerTask('buildJS', ['jshint', 'requirejs', 'uglify']);

    grunt.registerTask('dev', ['connect', 'watch:styles', 'watch:javascript']);
    grunt.registerTask('build', ['compass:dist', 'uglify:dist']);



};
