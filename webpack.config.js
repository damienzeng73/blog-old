var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // the base directory (absolute path) for resolving the entry point
    context: __dirname,

    // the entry point we created earlier. Note that './' means
    // your current directory. You don't have to specify the extension now,
    // because you will specify extensions later in the 'resolving' section
    entry: './src/js/index',

    output: {
        // where you want your compiled bundle to be stored
        path: path.resolve('./static'),
        // naming convention webpack should use for your files
        filename: '[name].js'
    },

    plugins: [
        // tell webpack where to store data about your bundles
        new BundleTracker({
            filename: './webpack-stats.json'
        }),

        // tell webpack where to store data about scss files
        new ExtractTextPlugin('[name].css'),

        // makes lodash available in every module
        new webpack.ProvidePlugin({
           '_': 'lodash'
        }),
    ],

    module: {
        loaders: [
            // a regexp that tells webpack use the following loader on all
            // .js and .jsb files
            {
                test: /\.jsx?$/,
                // we definitely don't want babel to transpile all the files in
                // node_modules. That would take a long time.
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },

            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    resolve: {
        // tells webpack where to look for modules
        modules: ['node_modules'],
        // extensions that should be used to resolve modules
        extensions: ['.js', '.jsx']
    }
}
