var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chuckFilename: 'chuck.js',
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
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};
