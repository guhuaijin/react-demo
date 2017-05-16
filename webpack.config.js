const path = require('path');
var webpack = require('webpack');

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
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
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
            loader: 'babel-loader',
            include: [resolve('src')]
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
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
