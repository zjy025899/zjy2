// 引入gulp插件：利用require来引入插件,一般放在文件的最顶部
let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass");
// console.log(gulp);
// gulp.task("hello",()=>{
//     console.log("hello");
// })
// 测试命令
// gulp.task("test",()=>{
//     console.log("hello world!")
// })


// 转存
// gulp.task("text",()=>{
//     gulp.src("src/*.html").pipe(gulp.dest("server")).pipe(connect.reload());
// })
// 路径写法：转存两个文件的话，需要把两个文件存放到数组进行传参，如果要转存多个的话，直接在需要转存的文件夹后面用*来表示转存所有
// 开启监听，监听文件发生保存时自动执行指定命令
gulp.task("listen",()=>{
    // gulp.watch是开启监听！
    // gulp.watch("src/*.html",["text"]);
    // 监听sass文件
    gulp.watch("scss/list.scss",["sass"]);
})
// 开启监听后不能写其他命令了
gulp.task("server",()=>{
    connect.server({
        root:"1911-zjy", //以哪个文件夹为服务器的根目录
        port:81,     //端口号自己指定
        livereload:true  //是否可以自动刷新
    })
})
gulp.task("Batch",["listen","server"]);
// sass转css的配置命令
gulp.task("sass",()=>{
    return gulp.src("scss/list.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(gulp.dest("css"))//转存
        .pipe(connect.reload());//自动刷新
})

// 4.监听文件更改
// gulp.task("watch",()=>{
//     gulp.watch("sass/*.scss",["sass"])
// })
