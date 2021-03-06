
var argv        = process.argv;
    del         = require('del'),
    gulp        = require('gulp'),
    gulpWatch   = require('gulp-watch'),
    runSequence = require('run-sequence'),


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript'),
    buildSass       = require('ionic-gulp-sass-build'),
    copyHTML        = require('ionic-gulp-html-copy'),
    copyFonts       = require('ionic-gulp-fonts-copy'),
    copyScripts     = require('ionic-gulp-scripts-copy'),
    tslint          = require('ionic-gulp-tslint'),
    copyAssets = require('./gulp/copy-assets'),
    envConfig = require('./gulp/config-env-replace'),
    pushResources = require('./gulp/push-resources'),
    svg = require('./gulp/svg');

var isRelease       = argv.indexOf('--release') > -1;

gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts'],
    function(){
      gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
      gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
      gulpWatch('app/assets/**/*', function(){ gulp.start('assets'); });
      gulpWatch('config/**/*', function(){ gulp.start('env-config'); });
      buildBrowserify({ watch: true }).on('end', done);
    }
  );
});

gulp.task('build', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts', 'assets', 'env-config', 'push-res'],
    function(){
      buildBrowserify({
        minify: isRelease,
        browserifyOptions: {
          debug: !isRelease
        },
        uglifyOptions: {
          mangle: false
        }
      }).on('end', done);
    }
  );
});

gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('assets', copyAssets);
gulp.task('svg', svg); // insert svgs in html
gulp.task('env-config', ['clean'], envConfig);
gulp.task('push-res', pushResources); // push notification images
gulp.task('clean', function(){
  return del('www/build');
});
gulp.task('lint', tslint);
