var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');
var SpritesmithPlugin = require('webpack-spritesmith');
var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

baseConfig.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  'bootstrap-loader',
  './assets/js/index',
]

baseConfig.output = {
  path: path.resolve('./assets/bundles/'),
  publicPath: 'http://localhost:3000/assets/bundles/',
  filename: '[name].js',
}

baseConfig.module.loaders.push({
  test: /\.jsx?$/,
  exclude: [node_modules_dir],
  loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
});

baseConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),  // don't reload if there is an error
  new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'assets/images/'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, 'assets/images/spritesmith-generated/sprite.png'),
        css: path.resolve(__dirname, 'assets/sass/vendor/spritesmith.scss')
      },
      retina: '@2x'
  }),
  new BundleTracker({
    filename: './webpack-stats.json'
  })
]

module.exports = baseConfig;
