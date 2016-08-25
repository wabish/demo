var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['./src/house.js'],
    entry1: './src/index.entry1.js',
    entry2: './src/index.entry2.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: 2
    })
  ]
};