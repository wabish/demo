var webpack = require('webpack');

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
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
    }]
  }
};