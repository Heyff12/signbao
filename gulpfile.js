/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-less gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr gulp-autoprefixer gulp-rev-append gulp-shell amd-optimize fs path browser-sync del --save-dev
 */

// 引入 gulp及组件
var gulp = require('gulp'), //基础库
    imagemin = require('gulp-imagemin'), //图片压缩
    less = require('gulp-less'), //less
    minifycss = require('gulp-minify-css'), //css压缩
    jshint = require('gulp-jshint'), //js检查
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'), //清空文件夹--同del，本例取消clean
    autoprefixer = require('gulp-autoprefixer'), //使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀
    rev = require('gulp-rev-append'), //给页面的引用添加版本号，清除页面引用缓存
    shell = require('gulp-shell'),
    amdOptimize = require('amd-optimize'),  //打包 require.js 模块依赖
    fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync'), //同步浏览器更新
    del = require('del'), //删除文件
    header = require('gulp-header'), //给文件头部增加特殊内容
    changed = require('gulp-changed'), //检测变化的文件
    jscs = require('gulp-jscs'), //代码风格检测
    tinylr = require('tiny-lr'), //livereload
    server = tinylr(),
    port = 35729,
    livereload = require('gulp-livereload'); //livereload
var file_road = {
    cssSrc: './src/less/**/*.less',
    cssSrc_mid: './src/css',
    cssDst: './static/css',

    jsSrc: './src/js/**/*.js',
    jsDst: './static/js',
    jsSrc_no: ['./src/js/**/*.js','!./src/js/plug/wordselect/*.js'],
    jsSrc_nodata: ['./src/js/plug/wordselect/*.js'],
    jsDst_nodata: './static/js/plug/wordselect',

    imgSrc: './src/img/**/*',
    imgDst: './static/img',

    htmlSrc: './html/**/*.html',
    htmlDst: './template',

    w_cssSrc: 'src/less/**/*.less',
    w_jsSrc: 'src/js/**/*.js',
    w_imgSrc: 'src/img/**/*',
    w_htmlSrc: 'html/**/*.html',

    src_source: './src/**/*',
    w_src_source: 'src/**/*',
    w_dst_source: './static/**/*',
    w_dsthtml_source: './template/**/*',

    copy_src:'./bin/src/**/*',
    copy_dest:'./bin/static1',
};
var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');
// 样式处理
gulp.task('css', function() {
    gulp.src(file_road.cssSrc)
        .pipe(less({ style: 'expanded' }))
        //.pipe(gulp.dest(file_road.cssSrc_mid))             //编译成css文件后的中间文件夹--不需要
        //.pipe(rename({ suffix: '.min' }))    //添加后缀--不需要
        .pipe(minifycss()) //todo暂时隐藏压缩
        .pipe(livereload(server))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0', 'last 2 Explorer versions', 'last 3 Safari versions', 'Firefox >= 20', '> 5%'],
            cascade: true, //是否美化属性值 默认：true 像这样：//-webkit-transform: rotate(45deg);transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(header(banner, { pkg: pkg })) //增加头部注释
        .pipe(gulp.dest(file_road.cssDst));
});

//语法检查
gulp.task('jshint', function() {
    return gulp.src(file_road.jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// js处理
gulp.task('js', function() {
    gulp.src(file_road.jsSrc_no)
        .pipe(jshint.reporter('default')) //代码检测
        //.pipe(concat('main.js'))   //全部合并成一个js--不需要
        //.pipe(gulp.dest(jsDst))    //上一步的输出全部合并成一个js--不需要
        //.pipe(rename({ suffix: '.min' }))   //添加后缀--不需要
        //.pipe(uglify())         
        //.pipe(changed(file_road.jsDst)) //--报错不需要 `changed` 任务需要提前知道目标目录位置// 才能找出哪些文件是被修改过的// 只有被更改过的文件才会通过下面操作
        //.pipe(jscs())               //隐藏压缩--同下一个--报错不需要
        .pipe(uglify({ //todo暂时隐藏压缩
            mangle: false, //类型：Boolean 默认：true 是否修改变量名
            compress: true, //类型：Boolean 默认：true 是否完全压缩
            //preserveComments: 'all' //保留所有注释
            mangle: { except: ['require', 'exports', 'module', '$'] }  //排除混淆关键字
        }))
        .pipe(header(banner, { pkg: pkg })) //增加头部注释
        .pipe(livereload(server))
        .pipe(gulp.dest(file_road.jsDst));
    gulp.src(file_road.jsSrc_nodata)
        .pipe(livereload(server))
        .pipe(gulp.dest(file_road.jsDst_nodata));
    //收到合并指定文件---不需要    
    // gulp.src(['./src/js/lib/date/*.js', './src/js/recharge/*.js'])
    //     .pipe(jshint.reporter('default'))
    //     .pipe(concat('recharge_min.js'))
    //     .pipe(rename({ suffix: '.min' }))
    //     .pipe(uglify())
    //     .pipe(livereload(server))
    //     .pipe(gulp.dest('./dest/js'));
});

// 图片处理
gulp.task('images', function() {
    gulp.src(file_road.imgSrc)
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(livereload(server))
        .pipe(gulp.dest(file_road.imgDst));
});

// 清空图片、样式、js
gulp.task('clean', function (cb) {
  del(file_road.w_dst_source, cb);
});

// HTML处理--不使用
gulp.task('html', function() {
    gulp.src(file_road.htmlSrc)
        //.pipe(header('# coding: utf-8 \n')) //增加头部代码
        .pipe(livereload(server))
        .pipe(gulp.dest(file_road.htmlDst))
});

//赋值另一份static
gulp.task('copy', function() {
    //del(file_road.copy_dest);
    gulp.src(file_road.copy_src)
        .pipe(livereload(server))
        .pipe(gulp.dest(file_road.copy_dest));
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function() {

    server.listen(port, function(err) {
        if (err) {
            return console.log(err);
        }
        // 监听html
        //gulp.watch(file_road.w_htmlSrc, ['html']);

        // 监听css
        gulp.watch(file_road.w_cssSrc, ['css']);

        // 监听images
        gulp.watch(file_road.w_imgSrc, ['images']);

        // 监听js
        gulp.watch(file_road.w_jsSrc, ['js']);

    });
    var watcher = gulp.watch([file_road.w_src_source, file_road.w_htmlSrc]);
    watcher.on('change', function(event) {
        //console.log(event.type);
        if (event.type === 'deleted') {
            var src = path.relative(path.resolve('src'), event.path);
            src = src.replace(/.es6$/, '.js');
            console.log(src);
            var dest;
            if (src.split('/')[0] == 'less') {
                //src=src.split('.')[0]+'.css';
                src = src.replace(/less/g, 'css');
            }
            if (src.split('/')[1] == 'html') {
                //src=src.split('.')[0]+'.css';
                src = src.replace(/\.\.\/html\//, '');
                dest = path.resolve(file_road.w_dsthtml_source, src);
                console.log(src);
                del.sync(dest);
                return false;
            }
            console.log(src);
            dest = path.resolve(file_road.w_dst_source, src);
            del.sync(dest);
        }
    });
});
// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('init', ['clean', 'jshint'], function() {
    gulp.start('css', 'images', 'js', 'html','watch');
});
gulp.task('default', function() {
    gulp.start('css', 'images', 'js', 'watch');
});
//重要备注：less文件名和路径中当中不能包含‘less’；html文件名当中不能包含‘.’
