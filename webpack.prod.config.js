const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

baseConfig.mode = 'production';
baseConfig.devtool = 'source-map';

baseConfig.entry = ['./frontend/js/index.js'];

baseConfig.output = {
  path: path.resolve('./frontend/webpack_bundles/'),
  publicPath: '/static/webpack_bundles/',
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
    type: 'asset/resource'
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
  new MiniCssExtractPlugin({ filename: '[name]-[hash].css' }),
  new BundleTracker({
    path: __dirname,
    filename: 'webpack-stats.json',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [autoprefixer],
    },
  }),
];

module.exports = baseConfig;
