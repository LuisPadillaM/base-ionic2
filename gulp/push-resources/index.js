var gulp = require('gulp');

module.exports = function(options) {

  options.src = options.src || './resources/push-resources/**/*';
  options.dest = options.dest || './platforms/android/res';

  return gulp.src(options.src)
    .pipe(gulp.dest(options.dest));
}