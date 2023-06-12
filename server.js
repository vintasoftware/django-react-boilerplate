// Webpack dev server
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.local.config';

new WebpackDevServer(webpack(config), {
  port: 3000,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000');
});
