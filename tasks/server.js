import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器的包
import args from './util/args';//对命令行参数进行解析

gulp.task('serve',(cb)=>{
    //如果没有监听返回
    if(!args.watch) return cb();
    //否则创建一个服务器
    var server = liveserver.new(['--harmony','server/bin/www']);
    //启动服务
    server.start();
    //监听js,ejs,页面热刷新
    gulp.watch(['server/public/**/*.js','server/public/**/*.ejs'],function (file) {
        server.notify.apply(server,[file]);
    })
    //监听需要重启的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)()
    })

})