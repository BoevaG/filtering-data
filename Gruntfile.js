module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'public/assets/front/js/scripts.js',
				dest: 'public/assets/front/js/scripts.js',
			}
		},
		jshint: {
			options: {
				bitwise: true,
				camelcase: true,
				eqeqeq: true,
				forin: true,
				latedef: 'nofunc',
				newcap: true,
				noarg: true,
				noempty: true,
				nonbsp: true,
				quotmark: 'single',
				undef: true,
				unused: false,
				strict: true,
				trailing: true,
				browser: true,
			},
			all: {
				files: {
					src: ['public/js/src/*.js']
				}
			}
		},
		concat: {
			dist: {
				src: [
				'src/front/js/scripts.js',
				'src/front/js/app.js',
				],
				dest: 'public/assets/front/js/scripts.js',
			},
		},
		autoprefixer: {
			dist: {
				files: {
					'public/assets/front/css/style.css': 'public/assets/front/css/style.css'
				}
			}
		},

		sass: {
			dist: {
				files: {
					'public/assets/front/css/style.css': 'src/front/scss/style.scss',
				}
			}
		},
		production: {
			files: {
				'public/assets/front/css/style.css': 'src/front/scss/style.scss',
			}
		},
		cssmin: {
			compress: {
				files: {
					'public/assets/front/css/style.css': 'public/assets/front/css/style.css',
				}
			}
		},
		watch: {
			scripts: {
				files: 'src/front/js/*.js',
				tasks: ['jshint','concat','uglify'],
				options: {
					debounceDelay: 250
				}
			},
			sass: {
				files: 'src/front/scss/*.scss',
				tasks: ['sass','cssmin', 'autoprefixer'],
				options: {
					debounceDelay: 250
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');


	grunt.registerTask('default', ['jshint','concat','uglify','sass','cssmin','watch']);

};

