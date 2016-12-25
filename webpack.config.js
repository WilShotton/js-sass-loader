const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const paths = {

    sassVars: path.resolve(__dirname, './fixture/styles/config.jsx'),
    src: path.resolve(__dirname, 'fixture')
}

module.exports = {

    context: __dirname,

    entry: {
        main: './fixture/main.jsx'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    resolveLoader: {
        alias: {
            'jstosass-loader': path.join(__dirname, './index.js')
        }
    },

    module: {

        rules: [
            {
                test: /\.jsx?$/,
                include: paths.src,
                use: ['babel-loader']
            }, {
                test: /.scss$/,
                include: paths.src,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader'
                        }, {
                            loader: 'postcss-loader'
                        }, {
                            loader: 'sass-loader'
                        }, {
                            loader: 'jstosass-loader'
                        }
                    ]
                })
            }
        ]
    },

    plugins: [

        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [require('autoprefixer')],
                jsToSass: {
                    path: paths.sassVars
                }
            }
        })
    ]
}
