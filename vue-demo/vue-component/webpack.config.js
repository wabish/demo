module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue!eslint',
      exclude: /node_modules/
    }]
  },
  vue: {
    loaders: {
      sass: 'vue-style-loader!css-loader!sass-loader',
    }
  },
  // babel: {
  //   presets: ['es2015']
  // },
  resolve: {
    extensions: ['', '.js', '.css', '.scss','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};