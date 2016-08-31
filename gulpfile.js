var babel = require('gulp-babel');
var browserify = require('browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var gulp = require('gulp')
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');

gulp.task('clean', () => {
  return gulp.src('dist/**/*', { read: false })
    .pipe(clean());
});

gulp.task('server', () => {
  connect.server({
    host: '0.0.0.0',
    root: ['demo', 'build'],
    port: 8001,
    livereload: true
  })
});

gulp.task('sass', () => {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/'))
    .pipe(livereload())
});

gulp.task('source-js', () => {
  return gulp.src('./src/components/*.jsx')
    .pipe(babel({
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react']
    }))
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./build'))
});


gulp.task('demo-html', () => {
  return gulp.src('./src/demo/**/*.html')
    .pipe(gulp.dest('./demo'))
    .pipe(livereload());
});

gulp.task('demo-js', () => {
  watchify(browserify({
    entries: './src/demo/demo.jsx',
    extensions: ['.jsx'],
    debug: true
  }).transform('babelify', {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react']
    }))
    .bundle()
    .pipe(source('demo.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./demo/'))
    .pipe(livereload())
}); // demo-js

gulp.task('demo-sass', () => {
  gulp.src('./src/demo/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./demo/'))
    .pipe(livereload())
});

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch(['src/demo/**/*.html'], ['demo-html'])
  gulp.watch(['src/**/*.jsx'], ['demo-js'])
  gulp.watch(['src/**/*.scss'], ['demo-sass', 'sass'])
});


gulp.task('build', ['clean', 'source-js', 'sass']);
gulp.task('demo', ['demo-js', 'demo-html', 'demo-sass']);
gulp.task('dev', ['build', 'watch', 'demo', 'server']);
