'use strict'
var gulp = require('gulp'),
    sass = require('gulp-sass'),  //sass
    plumber = require('gulp-plumber'); //禁止sass报错

    gulp.task('sass', function () {
      return gulp.src(['public/css/sass_module/*.scss','public/css/sass_module/**/*.scss'])
        .pipe(plumber())
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('public/css/css_module'));
    })

    gulp.task('sass:watch', function () {
      gulp.watch(['public/css/sass_module/*.scss','public/css/sass_module/**/*.scss'],['sass']);
    })
