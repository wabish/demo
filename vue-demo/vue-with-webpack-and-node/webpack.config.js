var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var PrerenderSpaPlugin = require('prerender-spa-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// dev 模式
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};

// 上线模式
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};

var getPlugins = function() {
  var plugins = [
    new ExtractTextPlugin(isProd() ? '[name].[chunkhash:8].css' : '[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html',
      inject: 'head',
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
  } else {
    plugins.push(
      new PrerenderSpaPlugin(
        path.join(__dirname, 'dist'),
        ['/']
      )
    );
  }

  if (isProd()) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
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
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './dist',
    filename: isProd() ? '[name].[chunkhash:8].js' : '[name].js',
    chunkFilename: isProd() ? '[name].chunk.[chunkhash:8].js' : '[name].chunk.js',
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
    }, 
    // {
    //   test: /\.scss$/,
    //   loader: 'style!css?sourceMap!sass?sourceMap'
    // }, 
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 8192,
        name: isProd() ? '[name].[hash:8].[ext]' : '[name].[ext]'
      }
    }]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      scss: ExtractTextPlugin.extract('vue-style-loader!css-loader!sass-loader')
      // scss: 'vue-style-loader!css-loader!sass-loader'
    }
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    color: true,
    hot: true,
    inline: true,
    noInfo: true,
    host: 'localhost',
    port: '80',
    proxy: {
      '/api/**': {
        target: 'http://localhost:8888',
        secure: false
      }
    }
  },
  devtool: isProd() ? false : '#eval-source-map',
  plugins: getPlugins()
};

