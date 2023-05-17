const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('sass-watch', function() {
    return gulp.src("srs/sass/**/*.+(sass|scss)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream()); 
});

gulp.tack('watch', function() {
    gulp.watch('srs/sass/**/*.+(sass|scss)', gulp.parallel ('browserSync'));
    gulp.watch('src/*.html'). on('change', browserSync.reload)
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));