'use strict';

var autoprefixer = require('gulp-autoprefixer');
var breakpoints = require('rework-breakpoints');
var browserify = require('gulp-browserify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var rework = require('gulp-rework');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');
var vars = require('rework-vars');
var csso = require('gulp-csso');
var npm = require('rework-npm');
var gulp = require('gulp');

gulp.task('modules', function() {
  gulp
    .src('client/modules/index.js')
    .pipe(browserify({buffer: false, debug: true}))
//    .pipe(uglify({outSourceMap: true}))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('static', function() {
  gulp.src('client/index.html').pipe(gulp.dest(''));
  gulp.src('client/fonts/**').pipe(gulp.dest('build/fonts'));
  gulp.src('client/images/**').pipe(gulp.dest('build/images/'));
  gulp.src("client/vendor/backbone/backbone-min.js").pipe(gulp.dest("build/vendor"));
  gulp.src("client/vendor/backbone/backbone-min.map").pipe(gulp.dest("build/vendor"));
  gulp.src("client/vendor/jquery/jquery.min.js").pipe(gulp.dest("build/vendor"));
  gulp.src("client/vendor/jquery/jquery.min.map").pipe(gulp.dest("build/vendor"));
  gulp.src("client/vendor/lodash/dist/lodash.underscore.min.js").pipe(gulp.dest("build/vendor"));
  gulp.src("client/vendor/react/react.min.js").pipe(gulp.dest("build/vendor"));
});

gulp.task('lint', function() {
  gulp.src(['client/modules/*.js', 'client/modules/**/*.js', 'client/modules/**/**/*.js'])
    .pipe(eslint.format('stylish'))
})

gulp.task('styles', function() {
  gulp
    .src('client/styles/index.css')
    .pipe(rework(npm(), vars(), rework.colors(), rework.extend(), breakpoints))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
    .pipe(csso(true))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('tests', function() {
  gulp
    .src('tests/index.js')
    .pipe(mocha({ui: 'bdd', reporter: 'dot', globals: []}));
});

gulp.task('default', [
  'modules',
  'static',
  'styles',
  'tests'
]);
