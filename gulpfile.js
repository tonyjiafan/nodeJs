'use strict'
var gulp = require('gulp'),
    sass = require('gulp-sass'),  //sass
    plumber = require('gulp-plumber'), //禁止sass报错
    livereload = require('gulp-livereload'),  // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver');  // 本地服务器 gulp-webserver

    // 注册任务
    gulp.task('sass', function () {
      return gulp.src(['public/css/sass_module/*.scss','public/css/sass_module/**/*.scss'])
        .pipe(plumber())
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('public/css/css_module'));
    })

    // 注册任务
    gulp.task('webserver', function () {
        gulp.src('./') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            port:8000,   //默认端口号是8080
            livereload: true, // 启用LiveReload
            open: 'http://localhost:5000/' // 服务器启动时自动打开网页
            // open: true // 服务器启动时自动打开网页
        }));
    });
    // 监听任务
    gulp.task('watch', function () {
        gulp.watch('./**', function (file) {  //要监听的文件目录
          let date = new Date();
          livereload.changed(file.path);
          console.log(date + "=>监听变化成功" );
        });

    });

    //编译sass
    gulp.task('sass:watch', function () {
      gulp.watch(['public/css/sass_module/*.scss','public/css/sass_module/**/*.scss'],['sass']);
    })

    //执行任务
    gulp.task('start', ['webserver', 'watch','sass:watch']);
