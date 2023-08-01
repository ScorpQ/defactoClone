//list dependences
const { src, dest, watch, series } = require('gulp');
const prefix = require('gulp-autoprefixer'); //?
const minify = require('gulp-clean-css'); //?
const terser = require('gulp-terser'); 
const imagemin = require('gulp-imagemin'); 
const imagewebp = require('gulp-webp');
var jeditor = require("gulp-json-editor");

/*
//JSON merge
gulp.src("jsons/ProductDetail.json")
  .pipe(jeditor({
    'version': '1.2.3'
  }))
  .pipe(gulp.dest("./dest"));
*/

//create functions
//JS
function jsmin(){
    return src("scripts/*.js")
      .pipe(terser())
      .pipe(dest('dist/js'))
}
//minify CSS
function minifyCss(){
    return src("styles/*css")
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"))
}

//create watchtask
function watchtast(){
    watch("scripts/*.js", jsmin);
    watch("styles/*css", minifyCss);
}

//default gulp
exports.default = series(
    jsmin,  
    minifyCss  
);

