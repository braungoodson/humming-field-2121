module.exports = function (grunt) {
	var config = require('./build/gruntConfig')(grunt);
	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-concat-sourcemap');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['jshint','concat_sourcemap','concat','uglify'])
	grunt.registerTask('develop',['watch']);
}