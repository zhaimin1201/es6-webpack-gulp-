import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';//对命令行参数进行解析

gulp.task('pages',()=>{
    return gulp.src('app/**/*.css')//加载app目录下所有的css
    .pipe(gulp.dest('server/public'))//拷贝到server目录下
    .pipe(gulpif(args.watch,livereload()))//监听是否是热更新
})