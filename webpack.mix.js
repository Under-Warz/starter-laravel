const mix = require('laravel-mix');
const Clean = require('clean-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Clean
mix.webpackConfig({
  plugins: [
    new Clean(['public/js', 'public/css', 'public/mix-manifest.json'], {verbose: true})
  ],
});

// Assets
mix
	.js('resources/assets/js/app.js', 'public/js')
	.js('resources/assets/js/admin.js', 'public/js')
	.extract([
		'axios',
		'jquery',
		'lodash',
		'bootstrap-sass'
	])
	.autoload({
		lodash: '_',
		jquery: ['$', 'jQuery']
	})
	.sass('resources/assets/sass/bootstrap.scss', 'public/css')
	.sass('resources/assets/sass/app.scss', 'public/css')
	.sass('resources/assets/sass/admin.scss', 'public/css')
  .options({
    processCssUrls: false
  })
  .sourceMaps(false)
  .copyDirectory('resources/assets/fonts', 'public/fonts')
  .disableNotifications();

 if (!mix.inProduction()) {
  mix.browserSync({
    open: 'local',
    host: 'localhost:8000',
    proxy: 'localhost:8000',
    files: [
      'resources/views/**/*.twig',
      'public/js/**/*.js',
      'public/css/**/*.css'
    ]
  });
}
else {
	mix.version();
}