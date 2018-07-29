const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

gulp.task('minify-html', function () {
  gulp.src('public/**/*.html')
    .pipe(htmlmin({
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('minify-css', function () {
  gulp.src('public/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('public'))
})

gulp.task('minify-js', function () {
  gulp.src('public/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'))
})

gulp.task('minify-images', function () {
  gulp.src('public/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
})

gulp.task('default', [
  'minify-html',
  'minify-css',
  'minify-js',
  'minify-images'
])
