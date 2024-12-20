const uswds = require("@uswds/compile");
const {parallel, watch, series, src} = require("gulp");
const gulp = require("gulp");
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);

const settings = {
  sass: {
    src: ['./src/sass/**/*.scss']
  },
  js: {
    dest: './dist/js',
    minDest: './dist/js/min',
    minSrc: './src/js/**/*.js',
    src: './src/js/**/*.js',
  }
}

// JS build function.
function buildJS() {
  return src(settings.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(settings.js.dest));
}

// Watch changes on JS files and trigger functions at the end.
function watchJSFiles() {
  watch(
    [
      './src/js/**/*.js'
    ],
    {
      events: 'all',
      ignoreInitial: false
    },
    series(
      buildJS
    )
  );
}

// Compile CSS from scss.
function buildCompStyles() {
  return src(settings.sass.src);
}

// Watch changes on sass files and trigger functions at the end.
function watchCompFiles() {
  watch(
    [
      './src/sass/**/*.scss',
    ],
    {
      events: 'all',
      ignoreInitial: false
    },
    series(
      buildCompStyles
    )
  );
}

/**
 * USWDS version
 */
// Use version 3.
uswds.settings.version = 3;
uswds.settings.compile.sassSourcemaps = true;

/**
 * Path settings
 * Set as many as you need
 * see https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#step-4-create-path-settings-and-export-compile-functions
 */

uswds.paths.dist.theme = './src/sass';
uswds.paths.dist.css = './dist/css';
uswds.paths.dist.img = './dist/assets/img';
uswds.paths.dist.fonts = './dist/assets/fonts';
uswds.paths.dist.js = './dist/js';
uswds.paths.src.projectSass = './src/sass';

/**
 * Exports
 * Add as many as you need
 */

// Various compile functions.
exports.build = series(uswds.copyAssets, buildJS, uswds.compile);
exports.compile = uswds.compile;
exports.default = exports.watch = parallel(watchCompFiles, uswds.watch, watchJSFiles);
exports.update = uswds.updateUswds;
exports.copyAssets = uswds.copyAssets;
