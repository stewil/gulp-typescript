
let gulp        = require('gulp');
let plugins     = require('gulp-load-plugins')();
let tsProject   = plugins.typescript.createProject('./tsconfig.json', {
    target            : 'ES5',
    declarationFiles  : false,
    noResolve         : true
});

gulp.task('default', ()=>{
    
});

gulp.task('typescript', ()=>{
    let tsResult = gulp.src('./src/*.ts')
        .pipe(tsProject());
    return tsResult.js.pipe(
        gulp.dest('./dist/')
    );
});