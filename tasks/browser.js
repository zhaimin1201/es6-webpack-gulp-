import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';//启动服务器的包
import args from './util/args';//对命令行参数进行解析

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});