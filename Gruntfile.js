module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir: 'assets/styles/sass',
                    cssDir: 'assets/styles/css',
                    imagesDir: 'assets/images/',
                    fontsDir: 'assets/fonts/',
                    outputStyle: 'expanded',
                    generatedImagesDir: 'assets/images/sprites/',
                    relativeAssets: true
                }
            },
            dist: {
                options: {
                    sassDir: 'assets/styles/sass',
                    cssDir: 'dist/css/',
                    imagesDir: 'assets/images/',
                    fontsDir: 'assets/fonts/',
                    outputStyle: 'compressed',
                    generatedImagesDir: 'dist/img/',
                    relativeAssets: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/main.min.js': ['assets/scripts/**.*js']
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
                    keepalive: true,
                    hostname: '*',
                    open: true
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

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');


    grunt.registerTask('server', ['connect:server']);
    grunt.registerTask('dev', ['csswatch']);
    grunt.registerTask('build', ['compass:dist', 'uglify:dist']);

    grunt.registerTask('csswatch', ['watch:styles']);
    grunt.registerTask('buildCSS', ['compass:dev', 'csslint']);
};
