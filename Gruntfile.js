module.exports = function (grunt) {

    grunt.initConfig({

        eslint: {
            target: ['src/**/*.es6']
        },

        webpack: {

            dist: {
                // webpack options
                entry: "./src/app.es6",
                output: {
                    path: "dist/js/",
                    filename: "app.js"
                },

                stats: {
                    // Configure the console output
                    colors: false,
                    modules: true,
                    reasons: true
                },

                module: {
                    loaders: [
                        {
                            test: /\.es6?$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel-loader'
                        }
                    ]
                }

            }

        },

        uglify: {

            options: {
                sourceMap: true
            },

            target: {
                files: {
                    "dist/js/app.min.js": ["dist/js/app.js"]
                }
            }
        },

        shell: {

            mocha: {
                command: 'mocha --compilers js:babel-core/register'
            }
        },

        watch: {
            scripts: {
                files: [].concat("Gruntfile.js",
                    ".eslintrc",
                    "src/**/*.es6",
                    "test/**/*.js"
                ),
                tasks: ["build"],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        esdoc: {
            dist: {
                options: {
                    source: './src',
                    destination: './doc',
                    coverage: true,
                    test: {
                        type: 'mocha',
                        source: './test',
                        includes: ['\\.(js|es6)$'],
                        excludes: ['\\.config\\.(js|es6)$']
                    }
                }
            }
        }

    });

    // linten
    grunt.loadNpmTasks("grunt-eslint");
    // packen
    grunt.loadNpmTasks('grunt-webpack');
    // doku erstellen
    grunt.loadNpmTasks("grunt-esdoc");
    // minifizieren
    grunt.loadNpmTasks("grunt-contrib-uglify");
    // shell used for testing
    grunt.loadNpmTasks("grunt-shell");


    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("release", ["build", "esdoc", "uglify"]);
    grunt.registerTask("test", ["shell:mocha"]);
    grunt.registerTask("build", [ "webpack", "test"]);
    grunt.registerTask("default", ["build", "watch"]);
};