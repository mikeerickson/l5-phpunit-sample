/*global require*/

// NOTE: Make sure gulp is installed globally ($ npm i -g gulp)

var gulp = require('gulp');
var phpunit = require('gulp-phpunit');

// any of these files will trigger gulp to run phpunit
var files = ['*/app/**/*.php','./tests/unit/**/*.php'];

// optional, if not supplied the default will be used
var cliApp = './vendor/bin/phpunit';

// see options -- https://www.npmjs.com/package/gulp-phpunit
var options = {};

// $ gulp phpunit (single run)
gulp.task('phpunit', () => {
	gulp.src(files)
		.pipe(phpunit(cliApp,options));
});

// $ gulp phpunit:watch (watch mode, execute on file change)
gulp.task('phpunit:watch',['phpunit'], () => {
	gulp.watch(files, ['phpunit']);
});
