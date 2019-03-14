/**
 * Created by RookDeveloper on 14.03.2019.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');


gulp.task('run', function () {
    console.log('Компиляция JS');
    gulp.src('./assets/ts/index.ts')
        .pipe(ts({
            noImplicitAny: true,
            "target": "es5",
            module : 'commonjs'
        }))
        .pipe(gulp.dest('./assets/js/'));


    console.log('Компиляция CSS');
    gulp.src('./assets/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/css/'));
    console.log('Компиляция успешно завершена...');
});


