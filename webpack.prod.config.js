var autoprefixer = require('autoprefixer');
var baseConfig = require('./webpack.base.config');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');
var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

baseConfig[1].entry = [
  'bootstrap-loader/extractStyles',
  'whatwg-fetch',
  'babel-polyfill',
  './assets/js/index.js',
]

baseConfig[1].output = {
  path: path.resolve('./assets/webpack_bundles/'),
  publicPath: '',
  filename: '[name]-[hash].js',
}

baseConfig[1].module.loaders.push({
  test: /\.jsx?$/,
  exclude: [nodeModulesDir],
  loaders: ['babel-loader?presets[]=react,presets[]=es2015']
},
{
  test: /\.(woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file?name=public/fonts/[name].[ext]',
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
  new ExtractTextPlugin({ filename: '[name]-[hash].css', disable: false, allChunks: true }),
  new webpack.optimize.UglifyJsPlugin({ comments: false }),
  new BundleTracker({
    filename: './webpack-stats.json'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [
        autoprefixer,
      ]
    }
  }),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    Tether: "tether",
    "window.Tether": "tether",
    Popper: ['popper.js', 'default'],
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Util: "exports-loader?Util!bootstrap/js/dist/util",
  })
]

module.exports = baseConfig;
