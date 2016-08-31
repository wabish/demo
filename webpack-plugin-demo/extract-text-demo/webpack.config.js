var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './src/js/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: './dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader!jsx-loader?harmony'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      // loader: 'style-loader!css-loader'
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css')
  ]
};
