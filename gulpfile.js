const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src([
      './node_modules/primer-core/index.scss',
      './node_modules/primer-markdown/index.scss',
      './node_modules/github-syntax-light/lib/github-light.css',
      './node_modules/highlight.js/styles/default.css',
    ])
    .pipe(sass({ includePaths: './node_modules' }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/'));
});
