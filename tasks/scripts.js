// import gulp from 'gulp';
// import gulpif from 'gulp-if';
// import concat from 'gulp-concat';
// import webpack from 'webpack';
// import gulpWebpack from 'webpack-stream';
// import named from 'vinyl-named';
// import livereload from 'gulp-livereload';//文件热刷新
// import plumber from 'gulp-plumber';
// import rename from 'gulp-rename';
// import uglify from 'gulp-uglify';//处理js压缩和css压缩
// import {log,colors} from 'gulp-util';
// import args from './util/args';//对命令行参数进行解析
//
//
// //创建gulp任务
// gulp.task('scripts',()=>{
//     return gulp.src(['app/js/index.js'])
//             .pipe(plumber({
//                 errorHandle:function(){
//
//                 }
//             }))
//             .pipe(named())
//             .pipe(gulpWebpack({
//                 module:{
//                     loaders:[{
//                         test:/\.js$/,
//                         loader:'babel-loader'
//                     }]
//                 }
//             }),null,(err,stats)=>{
//             log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
//         chunks:false
//     }))
//     })
//         //放置文件路径
//     .pipe(gulp.dest('server/public/js'))
//     //处理编译压缩的过程
//     .pipe(rename({
//         basename:'cp',
//         extname:'.min.js'
//     }))
//     .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
//     .pipe(gulp.dest('server/public/js'))
//     //监听文件变化 自动刷新
//     .pipe(gulpif(args.watch,livereload()))
// })
// gulp.task('scripts',()=>{
//     return gulp.src(['app/js/index.js'])
//         .pipe(plumber({
//             errorHandle:function(){
//
//             }
//         }))
//         .pipe(named())
//         .pipe(gulpWebpack({
//             module:{
//                 loaders:[{
//                     test:/\.js$/,
//                     loader:'babel'
//                 }]
//             }
//         }),null,(err,stats)=>{
//         log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
//     chunks:false
// }))
// })
// .pipe(gulp.dest('server/public/js'))
//     .pipe(rename({
//         basename:'cp',
//         extname:'.min.js'
//     }))
//     .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
//     .pipe(gulp.dest('server/public/js'))
//     .pipe(gulpif(args.watch,livereload()))
// })
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
    chunks:false
}))
})
.pipe(gulp.dest('server/public/js'))
    .pipe(rename({
        basename:'cp',
        extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
