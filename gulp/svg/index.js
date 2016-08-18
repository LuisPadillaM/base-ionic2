var gulp = require('gulp');
var inject = require('gulp-inject');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

module.exports = function() {
  var svgs = gulp
      .src('./app/assets/svg/*.svg')
      .pipe(svgmin())
      .pipe(svgstore({ inlineSvg: true }));

  return gulp
      .src('www/index.html')
      .pipe(inject(svgs, { transform: (filePath, file) => {
          return file.contents.toString();
      }}))
      .pipe(gulp.dest('www/'));
}
