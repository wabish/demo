module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        },
    }]
  }
};