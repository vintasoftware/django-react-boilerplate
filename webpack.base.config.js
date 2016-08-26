var autoprefixer = require('autoprefixer');

module.exports = {
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
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpg|png)?$/,
        loaders: [
          'file?name=i-[hash].[ext]'
        ]
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    // defined in local or prod
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};
