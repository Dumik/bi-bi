let gulp = require('gulp'),
    stylus = require('gulp-stylus');


    gulp.task('styl', function(){
        return gulp.src('app/styl/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('dist/css'))
   
    });


    gulp.task('html', function(){
        return gulp.src('app/index.html')
        .pipe(gulp.dest('dist/'))
    })

    gulp.task('js', function(){
        return gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js/'))
    });

    gulp.task('watch', function(){
        gulp.watch('app/styl/*.styl', gulp.parallel('styl'))
        gulp.watch('app/index.html', gulp.parallel('html'))
        gulp.watch('app/js/*.js', gulp.parallel('js'))
    });

    gulp.task('default', gulp.parallel('html', 'js', 'watch'));