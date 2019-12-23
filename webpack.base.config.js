const path = require('path');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: [],
  output: {
    path: path.resolve(__dirname, 'frontend/bundles/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ...(devMode ? ['style-loader'] : ['style-loader', MiniCssExtractPlugin.loader]),
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg|png)?$/,
        loaders: ['file-loader?name=i-[hash].[ext]'],
      },
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: [
      'node_modules',
      path.resolve('.frontend/'),
      path.resolve('.frontend/js/'),
    ],
    extensions: ['.js', '.jsx'],
  },
};
