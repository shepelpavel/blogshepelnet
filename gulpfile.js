"use strict";

var gulp = require("gulp"),
  fileinclude = require("gulp-file-include"),
  gutil = require("gulp-util"),
  prefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass")(require("node-sass")),
  cssnano = require("gulp-cssnano"),
  minify = require("gulp-babel-minify"),
  imagemin = require("gulp-imagemin"),
  svgmin = require("gulp-svgmin"),
  cheerio = require("gulp-cheerio"),
  svgsprite = require("gulp-svg-sprite");

var path = {
  src: {
    html: "./pages/**/*.html",
    chunks: "./chunks/**/*.html",
    js: "./source/js/**/*.js",
    style: "./source/css/**/*.scss",
    css: "./source/css/**/*.css",
    img: "./source/img/**/*.*",
    svg: "./source/svg/**/*.svg",
    font: "./source/fonts/**/*.*",
    module: "./source/module/**/*.*",
  },
  build: {
    html: "./docs/",
    js: "./docs/assets/js/",
    style: "./docs/assets/css/",
    css: "./docs/assets/css/",
    img: "./docs/assets/img/",
    svg: "./docs/assets/svg/",
    font: "./docs/assets/fonts/",
    module: "./docs/assets/module/",
  },
};

gulp.task(
  "html:build",
  gulp.series(function () {
    return gulp
      .src(path.src.html)
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file",
          context: {
            prodVer: process.env.npm_package_version,
            rootDir: process.cwd(),
          },
        })
      )
      .pipe(gulp.dest(path.build.html));
  })
);

gulp.task(
  "js:build",
  gulp.series(function () {
    return gulp
      .src(path.src.js)
      .pipe(minify().on("error", gutil.log))
      .pipe(gulp.dest(path.build.js));
  })
);

gulp.task(
  "style:build",
  gulp.series(function () {
    return gulp
      .src(path.src.style)
      .pipe(
        sass({
          outputStyle: "compressed",
        }).on("error", sass.logError)
      )
      .pipe(
        prefixer({
          cascade: false,
        }).on("error", gutil.log)
      )
      .pipe(gulp.dest(path.build.style));
  })
);

gulp.task(
  "css:build",
  gulp.series(function () {
    return gulp
      .src(path.src.css)
      .pipe(
        prefixer({
          cascade: false,
        }).on("error", gutil.log)
      )
      .pipe(cssnano().on("error", gutil.log))
      .pipe(gulp.dest(path.build.css));
  })
);

gulp.task(
  "img:build",
  gulp.series(function () {
    return gulp
      .src(path.src.img)
      .pipe(imagemin())
      .pipe(gulp.dest(path.build.img));
  })
);

gulp.task(
  "svg:build",
  gulp.series(function () {
    return gulp
      .src(path.src.svg)
      .pipe(
        svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      .pipe(
        cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: {
            xmlMode: true,
          },
        })
      )
      .pipe(
        svgsprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg",
            },
          },
        })
      )
      .pipe(gulp.dest(path.build.svg));
  })
);

gulp.task(
  "font:build",
  gulp.series(function () {
    return gulp.src(path.src.font).pipe(gulp.dest(path.build.font));
  })
);

gulp.task(
  "module:build",
  gulp.series(function () {
    return gulp.src(path.src.module).pipe(gulp.dest(path.build.module));
  })
);

gulp.task(
  "build",
  gulp.series([
    "html:build",
    "js:build",
    "style:build",
    "css:build",
    "img:build",
    "svg:build",
    "font:build",
    "module:build",
  ])
);

gulp.task(
  "watch",
  gulp.series(function () {
    gulp.watch(path.src.html, gulp.series("html:build"));
    gulp.watch(path.src.chunks, gulp.series("html:build"));
    gulp.watch(path.src.js, gulp.series("js:build"));
    gulp.watch(path.src.style, gulp.series("style:build"));
    gulp.watch(path.src.css, gulp.series("css:build"));
    gulp.watch(path.src.img, gulp.series("img:build"));
    gulp.watch(path.src.svg, gulp.series("svg:build"));
    gulp.watch(path.src.font, gulp.series("font:build"));
    gulp.watch(path.src.module, gulp.series("module:build"));
  })
);

gulp.task("default", gulp.series(["build", "watch"]));
