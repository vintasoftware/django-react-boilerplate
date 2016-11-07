var autoprefixer = require('autoprefixer');
var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = [{
  entry: [
    './assets/js/jquery-index.js',
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: 'bundle-jquery.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        loader: 'babel?presets[]=es2015',
      },
      {
        test: /jquery\/dist\/jquery\.js$/,
        loader: 'expose?$',
      },
      {
        test: /jquery\/dist\/jquery\.js$/,
        loader: 'expose?jQuery',
      }],
  },
  plugins: [
    new BundleTracker({
      filename: './jquery-webpack-stats.json',
    }),
  ],
}, {
  context: __dirname,
  entry: [
    // defined in local or prod
  ],
  output: {
    // defined in local or prod
  },
  module: {
    loaders: [
      {
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
        test: /\.(woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg|png)?$/,
        loaders: [
          'file?name=i-[hash].[ext]',
        ],
      },
    ],
  },
  postcss: [autoprefixer],
  plugins: [
    // defined in local or prod
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
  },
}];
