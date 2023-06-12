const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    // defined in local or prod
  ],
  output: {
    // defined in local or prod
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpg|png)?$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // defined in local or prod
  ],
  resolve: {
    modules: ['node_modules', 'bower_components', path.resolve(__dirname, 'frontend/js/')],
    extensions: ['.js', '.jsx'],
  },
};
