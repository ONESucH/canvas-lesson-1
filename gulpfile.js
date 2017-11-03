'use strict';
const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('connect', function () {
    browserSync.init({
        server: './'
    });
    gulp.watch([
        './*.html'
    ], ['hotReloadHtml']);
    gulp.watch([
        './*.js'
    ], ['hotReloadJs']);
});

gulp.task('hotReloadHtml', function () {
    browserSync.reload();
});

gulp.task('hotReloadJs', function () {
    browserSync.reload();
});

gulp.task('default', ['connect', 'hotReloadHtml', 'hotReloadJs']);