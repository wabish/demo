var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.jsx',
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: './dist',
        filename: '[name].js'
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]
};
