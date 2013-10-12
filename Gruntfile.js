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
            compass: ['assets/styles/css/', 'assets/images/sprites/'],
            js: ['assets/scripts/main.optimized.js']
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
                    port: 9000,
                    hostname: 'localhost',
                    open: true
                }
            },
            spec : {
                options: {
                    base: ['.', 'spec'],
                    port: 9001,
                    hostname: 'localhost',
                    keepalive: true,
                    open: 'http://localhost:<%= connect.spec.options.port %>/SpecRunner.html'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            compass: {
                files: ['assets/styles/sass/**/*'],
                tasks: ['compass:dev']
            },
            scripts: {
                files: ['assets/styles/scripts/main.js', 'assets/styles/scripts/modules/*.js'],
                tasks: ['requirejs', 'uglify']
            },
            handlebars: {
                files: ['assets/templates/*.html'],
                tasks: ['requirejs', 'uglify']
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
        },
        mocha: {
            src: ['spec/SpecRunner.html'],
            options: {
                bail: true,
                log: true,
                reporter: 'Nyan'
            }
        }
    });

    grunt.registerTask('server', ['connect:server']);

    grunt.registerTask('uglifyJS', ['uglify', 'clean:js']);

    grunt.registerTask('buildCSS', ['clean:compass', 'compass:dev', 'csslint']);
    grunt.registerTask('buildJS', ['jshint', 'requirejs', 'uglifyJS']);

    grunt.registerTask('build', ['buildCSS', 'buildJS']);

    grunt.registerTask('dev', ['build', 'server', 'watch:compass', 'watch:scripts', 'watch:handlebars']);



};
