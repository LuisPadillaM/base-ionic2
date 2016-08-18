var gulp = require('gulp');
var argv = require('yargs').argv;
var rename = require("gulp-rename");

module.exports = function(options) {
  var env = argv.env || 'dev';

  options.src = options.src || './appconfig/' + env + '.ts';
  options.dest = options.dest || 'app/constants';

  return gulp.src(options.src)
    .pipe(rename('config.ts'))
    .pipe(gulp.dest(options.dest));
}