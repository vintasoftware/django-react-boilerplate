var baseConfig = require('./webpack.base.config');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');
var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

baseConfig[1].entry = [
  'bootstrap-loader/extractStyles',
  './assets/js/index.js',
]

baseConfig[1].output = {
  path: path.resolve('./assets/bundles/'),
  publicPath: '',
  filename: '[name]-[hash].js',
}

baseConfig[1].module.loaders.push({
  test: /\.jsx?$/,
  exclude: [nodeModulesDir],
  loaders: ['babel?presets[]=react,presets[]=es2015']
});

baseConfig[1].plugins = [
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
