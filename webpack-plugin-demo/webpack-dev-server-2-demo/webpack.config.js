var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: [
      './src/index.js'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html',
      inject: true,
      chunkSortMode: 'dependency'
    }),

    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    port: '8080'
  }
};