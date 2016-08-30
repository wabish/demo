var postcssSprites = require('postcss-sprites');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath:'./dist'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader?name=/[hash:8].[name].[ext]'
    }]
  },
  postcss: function () {
    return [
      postcssSprites({ 
        stylesheetPath: './src/css/',
        spritePath: './dist',
        retina: true, 
        padding: 4, 
      })
    ]
  }
}