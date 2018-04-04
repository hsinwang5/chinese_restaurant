var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var sass = require("gulp-sass");

// uncomment this section when migrating from cloud - requires graphicsmagick
// ==================================================================================
var newer = require("gulp-newer"); 
var gm = require("gulp-gm");

gulp.task('resizeImages', () =>
    gulp.src('src/foodbig/*')
     .pipe(newer('resized'))
      .pipe (gm(function(gmfile){
          gmfile.setFormat('jpg').quality(94);
          return gmfile.resize(1600, 1200);
      }))
      .pipe(imagemin())
        .pipe(gulp.dest('resized'))
);
// ===================================================================================


// //copy all HTML files
// gulp.task("copyHtml", function(){
//     gulp.src("src/*.html")
//         .pipe(gulp.dest("dist"));
// });

//reduces size of images
gulp.task('imageMin', () =>
    gulp.src('src/food/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images/food'))
);

//compiles scss into css
gulp.task("sass", function(){
    gulp.src("src/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("public/stylesheets"));
});

//watch scss files
gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', ['sass']);
});