const path = require('path');
var rm = require('rimraf')


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var pkg = require('./package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vendor = Object.keys(pkg.dependencies);

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        app: ['./src/app.js'],
        vendor: vendor
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? './js/' : 'http://192.168.201.36:8083/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        // modules: [
        //     resolve('src'),
        //     resolve('node_modules')
        // ],
        alias: {
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'views': path.resolve(__dirname, './src/views'),
            '$redux': path.resolve(__dirname, './src/redux')
        }
    },
    devtool: '#eval-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, './src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: '/images/[name].[ext]?[hash]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: '/fonts/[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new ExtractTextPlugin("styles.css")
    ]
};

if (process.env.NODE_ENV === 'development') {

    module.exports.devtool = '#cheap-module-eval-source-map'

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ])

}


if (process.env.NODE_ENV === 'production') {

    rm(path.resolve(__dirname, './dist'), err => { })


    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.html'),
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
