var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// dev 模式
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};

// debug 模式
var isDebug = function() {
  return process.env.NODE_ENV.trim() === 'debug';
};

// 上线模式
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};

var getPlugins = function() {
  var plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html',
      inject: true,
      chunkSortMode: 'dependency'
    }),
    new OpenBrowserPlugin({ 
      url: 'http://localhost' 
    })
  ];

  if (isDev()) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    );
  }

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

  return plugins;
}

module.exports = {
  devtool: '#eval-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './dist',
    filename: isProd() ? '[name].[chunkhash:8].js' : '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel!eslint',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue!eslint',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  vue: {
    loaders: {
      sass: 'vue-style-loader!css-loader!sass-loader',
    }
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    color: true,
    hot: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: '80',
    proxy: {
      '/api/**': {
        target: 'http://localhost:8888',
        secure: false
      }
    }
  },
  plugins: getPlugins()
};

