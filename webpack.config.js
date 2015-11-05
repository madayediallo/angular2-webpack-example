/**
 * Created by Marko Cen on 11/2/2015.
 */

var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/bootstrap.ts',
        vendor: ['zone.js', 'reflect-metadata', 'angular2/angular2', 'angular2/http', 'angular2/router', '@reactivex/rxjs', 'lodash']
    },
    output:{
        path: './dist/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            'rx': '@reactivex/rxjs'
        }
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename: "vendor.bundle.js"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            include: [/vendor/]
        })
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude:  [/bower_components/, /node_modules/]
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude:  [/bower_components/, /node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude:  [/bower_components/, /node_modules/]
            }
        ],

        noParse: [
            /rtts_assert\/src\/rtts_assert/,
            /reflect-metadata/
        ]
    },
    cache: true,
    watch: {
        watchOptions:{
            aggregateTimeout: 300
        }
    }

};