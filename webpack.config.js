var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    './assets/js/index',
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    publicPath: 'http://localhost:3000/assets/bundles/',
    filename: '[name]-[hash].js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: [
        'style',
        'css',
        'postcss',
      ],
    },
    {
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'postcss',
        'sass',
      ],
    },
    {
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports?jQuery=jquery'
    },
    {
      test: /\.jsx?$/,
      exclude: [node_modules_dir],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new ExtractTextPlugin('bundle.css',{allChunks: true}),
    new BundleTracker({
      filename: './webpack-stats.json'
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};
