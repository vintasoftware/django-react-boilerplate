const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

baseConfig.mode = 'production';
baseConfig.devtool = 'source-map';

baseConfig.entry = ['whatwg-fetch', '@babel/polyfill', './frontend/js/index.js'];

baseConfig.output = {
  path: path.resolve('./frontend/webpack_bundles/'),
  publicPath: '',
  filename: '[name]-[hash].js',
};

baseConfig.module.rules.push(
  {
    test: /\.jsx?$/,
    exclude: [nodeModulesDir],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.(woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
  }
);

baseConfig.optimization = {
  minimize: true,
  splitChunks: {
    chunks: 'all',
  },
};

baseConfig.plugins = [
  new webpack.DefinePlugin({
    // removes React warnings
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new MiniCssExtractPlugin({ filename: '[name]-[hash].css', disable: false, allChunks: true }),
  new BundleTracker({
    filename: './webpack-stats.json',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [autoprefixer],
    },
  }),
  new CircularDependencyPlugin({
    // exclude detection of files based on a RegExp
    exclude: /webpack_bundles|node_modules/,
    failOnError: true,
    // allow import cycles that include an asynchronous import,
    // e.g. via import(/* webpackMode: "weak" */ './file.js')
    allowAsyncCycles: false,
    // set the current working directory for displaying module paths
    cwd: process.cwd(),
  }),
];

module.exports = baseConfig;
