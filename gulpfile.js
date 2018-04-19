const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const pump = require("pump");
const rename = require("gulp-rename");
const cssuglify = require("gulp-uglifycss");
const wrapper = require("gulp-wrapper");
const htmlMin = require("gulp-htmlmin");

const constant = {
    "PATH":{
        "JS":["app/js/utils/*.js","app/js/*.js","app/index.js"],
        "CSS":"app/css/*.css",
        "TEMPLATE":"app/templates/*.html",
        "IMAGE":"app/images/**"
    },
    "OUTPUT":{
        "JS":"build/js",
        "CSS":"build/css",
        "IMAGE":"build/images",
        "TEMPLATE":"build/templates",
        "FILE_NAME":{
            "JS":"app.js",
            "JS_MIN":"app.min.js",
            "CSS":"app.css",
            "CSS_MIN":"app.min.css",
            "TEMPLATE":"app.templates.js",
            "TEMPLATE_MIN":"app.templates.min.js"
        }
    },
    "TASK":{
        "JS":"js",
        "CSS":"css",
        "TEMPLATES":"templates",
        "IMAGE":"image",
        "BUILD":"build",
        "WATCH":"watch"
    }
};

let getCamelCaseName = (input) => {

    if(input.search("-") !== -1){
        // file name contains hyphens ( - )
        return input.split("-").reduce((o,i,index) => {
            if(index === 0){
                // first word
                o += i;
                //return i;
            }else{
                o += i.charAt(0).toUpperCase() + i.substring(1);
            }
            return o;
        },"");
    }
    return input;
};


// JS Concat and Uglify
gulp.task(constant.TASK.JS, (cb) => {
     pump([
         gulp.src(constant.PATH.JS),
         concat(constant.OUTPUT.FILE_NAME.JS),
         gulp.dest(constant.OUTPUT.JS),
         rename(constant.OUTPUT.FILE_NAME.JS_MIN),
         uglify(),
         gulp.dest(constant.OUTPUT.JS)
     ],cb);
});

// CSS Concat and Uglify
gulp.task(constant.TASK.CSS, (cb) => {
    pump([
        gulp.src(constant.PATH.CSS),
        concat(constant.OUTPUT.FILE_NAME.CSS),
        gulp.dest(constant.OUTPUT.CSS),
        rename(constant.OUTPUT.FILE_NAME.CSS_MIN),
        cssuglify(),
        gulp.dest(constant.OUTPUT.CSS)
    ],cb);
});

// Copy Images
gulp.task(constant.TASK.IMAGE,(cb) => {
    pump([gulp.src(constant.PATH.IMAGE),gulp.dest(constant.OUTPUT.IMAGE)],cb);
});

// Concat Templates
gulp.task(constant.TASK.TEMPLATES,(cb) => {
   pump([
       gulp.src(constant.PATH.TEMPLATE),
       htmlMin({"collapseWhitespace":true}),
       wrapper({
           header:function (file) {
               let fileName = file.path.replace(file.base,"").split(".")[0];
               fileName = getCamelCaseName(fileName);
                return `app.templates.${fileName} = '`;
           },
           footer:"';"
       }),
       concat(constant.OUTPUT.FILE_NAME.TEMPLATE),
       gulp.dest(constant.OUTPUT.TEMPLATE)
   ],cb);
});

// Build
gulp.task('build',['js','css','image','templates'],() => {

});

gulp.task(constant.TASK.WATCH,() => {
    gulp.watch(constant.PATH.JS, () => {
        gulp.run(constant.TASK.JS);
    });

    gulp.watch(constant.PATH.CSS, () => {
        gulp.run(constant.TASK.CSS);
    });

    gulp.watch(constant.PATH.TEMPLATE, () => {
        gulp.run(constant.TASK.TEMPLATES);
    });

});
