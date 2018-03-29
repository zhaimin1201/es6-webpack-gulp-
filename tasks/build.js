import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//注意  顺序不能变
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));