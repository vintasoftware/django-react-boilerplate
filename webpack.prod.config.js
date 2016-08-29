var baseConfig = require('./webpack.base.config');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');
var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

baseConfig.entry = [
  'bootstrap-loader/extractStyles',
  './assets/js/index.js',
]

baseConfig.output = {
  path: path.resolve('./assets/bundles/'),
  publicPath: '',
  filename: '[name]-[hash].js',
}

baseConfig.module.loaders.push({
  test: /\.jsx?$/,
  exclude: [node_modules_dir],
  loaders: ['babel?presets[]=react,presets[]=es2015']
});

baseConfig.plugins = [
  new webpack.DefinePlugin({  // removes React warnings
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
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
  new ExtractTextPlugin('[name]-[hash].css', { allChunks: true }),
  new webpack.optimize.UglifyJsPlugin({ comments: false }),
  new BundleTracker({
    filename: './webpack-stats.json'
  })
]

module.exports = baseConfig;
