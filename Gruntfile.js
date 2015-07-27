module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {}
			},
		},
		sprite: {
			all: {
				src: 'public/images/sprites-ind/*.png',
				dest: 'public/images/sprite.png',
				destCss: 'public/css/sprites.css'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/css/main.css' : 'public/scss/main.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			sprite: {
				files: ['public/images/sprites-ind/*.png'],
				tasks: ['sprite']
			},
			php: {
				files: ['**/*.php']
			},
			js: {
				files: ['public/js/**/*.js'],
			},
			sass: {
				options: {
					livereload: false
				},
				files: ['public/scss/**/*.scss'],
				tasks: ['sass']
			},
			css: {
				files: ['public/css/main.css'],
				tasks: []
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.registerTask('default', ['sass', 'sprite']);
	grunt.registerTask('local', ['sass', 'sprite','watch']);
}