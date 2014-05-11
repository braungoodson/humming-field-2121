module.exports = function (grunt) {
	return {
		pkg: grunt.file.readJSON('package.json'),
		banner: require('./banner'),
		concat_sourcemap: require('./concat_sourcemap'),
		concat: require('/concat'),
		uglify: require('./uglify'),
		jshint: require('./jshint'),
		watch: require('./watch')
	};
}