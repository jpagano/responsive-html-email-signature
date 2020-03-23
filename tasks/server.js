const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function serverTask(options) {
  gulp.task('server', function() {
    browserSync.init({
      server: {
        baseDir: options.distDir,
        directory: true
      }
    });

    gulp.watch(
      [
        options.sourceDir + '/**/*.html',
        options.sourceDir + '/**/*.css',
        options.sourceDir + '/**/*.scss',
        options.sourceDir + '/**/*.less',
        options.sourceDir + '/**/conf.json'
      ],
      { delay: 500 },
      gulp.series('run-pipeline')
    ).on('change', browserSync.reload);
  });
}

module.exports = serverTask;
