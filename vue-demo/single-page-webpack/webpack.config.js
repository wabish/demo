var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: 'eval-source-map'
};