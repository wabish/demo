var webpack = require('webpack');

var isDev = function() {
  return process.env.NODE_ENV === 'dev';
};

var isProd = function() {
  return process.env.NODE_ENV === 'prod';
};

var plugins = [
  new webpack.DefinePlugin({
    __DEV__ : isDev(),
    __PROD__: isProd()
  })
];

if (isProd()) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: isProd() ? './dist/prod' : './dist/dev',
    filename: isProd() ? '[name].[hash:8].js' : '[name].js'
  },
  plugins: plugins
};