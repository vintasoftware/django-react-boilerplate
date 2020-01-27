const path = require('path');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

module.exports = {
  context: __dirname,
  entry: [],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg|png)?$/,
        use: ['file-loader?name=i-[hash].[ext]'],
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
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'frontend/js/')],
    extensions: ['.js', '.jsx'],
  },
};
