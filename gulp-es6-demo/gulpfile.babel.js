import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('default', () => {
  return gulp.src('./index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});