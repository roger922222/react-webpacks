const webpack = require('webpack')
const path = require('path')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssModuleValues = require('postcss-modules-values')

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        bundle: [
            './src/root/index.js',
            './dev-client.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'react-prop-types',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'whatwg-fetch',
            'babel-polyfill'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
           {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
           },
           {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: '1',
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [precss, autoprefixer({browsers: ['ios >= 7.0', 'Android >= 4.0']}), postcssModuleValues]
                    }
                }
            ]
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            precss,
                            autoprefixer({browsers: ['ios >= 7.0', 'Android >= 4.0']}),
                        ],
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        },
        {
            test: /\.(png|PNG|jpe?g|svg)$/,
            loader: 'url-loader?name=images/[name].[hash].[ext]&limit=5120',
            exclude: /\.base64\./
        },
        {
            test: /\.(gif)$/,
            loader: 'file-loader?name=images/[name].[hash].[ext]',
            exclude: /\.base64\./
        },
        {
            test: /\.(ttf|eot|woff(2)?)$/,
            loader: 'file-loader?name=fonts/[name].[hash].[ext]'
        },
        {
            test   : /glyphicons-halflings-regular\.svg$/,
            loader : 'file-loader?name=fonts/[name].[hash].[ext]'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: './src/root/index-template.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.css', '.less'],
        alias: {
            src: path.resolve(__dirname, './src'),
            ROOT: path.resolve(__dirname, './src/root')
        }
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              name: 'vendor',
              chunks: 'initial',
              test: /node_modules\/(.*)\.js/
            }
          }
        }
    }
}