var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minificss = require('gulp-minify-css');
var notify = require('gulp-notify');
var conact = require('gulp-concat');
var rename = require('gulp-rename');
var babel =  require('gulp-babel');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
gulp.task('minihtml', () => {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    }
    gulp.src('entry/*.html').pipe(htmlmin(options)).pipe(gulp.dest('static'));
})

gulp.task('minicss', () => {
    gulp.src('entry/css/*.css').pipe(conact('maintain_card.css')).pipe(gulp.dest('static/css')).pipe(rename({ suffix: '.min' })).pipe(minificss()).pipe(gulp.dest('static/css')).pipe(notify({
        message: 'css task ok'
    }))
})

gulp.task('babeljs', () => {
    gulp.src('entry/js/*.js').pipe(babel()).pipe(uglify()).pipe(gulp.dest('static/js'))
})

gulp.task('miniimg', () => {
    gulp.src('entry/img/*.*').pipe(imagemin({progressive: true})).pipe(gulp.dest('static/img')).pipe(notify({message: 'img is mini....'}));
})


