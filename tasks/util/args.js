import yargs from 'yargs';

const  args = yargs

//区分线上还是开发环境
    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

//是否监听开发环境修改的文件
    .options('watch',{
        boolean:true,
        default:false,
        describe:'wathc all files'
    })

//是否详细输出命令行执行的日志
    .options('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })

//源文件映射
    .options('sourcemaps',{
       describe:'force the creation of sroucemaps'
    })

//设置服务器端口
    .options('port',{
        string:true,
        default:8080,
        describe:'server port'
    })

//输入的命令行以字符串作为解析
.argv