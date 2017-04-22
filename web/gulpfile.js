var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('watch', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('sass', function(done) {
    gulp.src('./css/site.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./public/css/'))
        .pipe(minifycss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
        .on('end', done);
});