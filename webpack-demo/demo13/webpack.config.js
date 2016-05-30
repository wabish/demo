var webpack = require('webpack');

module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};
