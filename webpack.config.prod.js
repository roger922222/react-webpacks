const webpack = require('webpack')
const path = require('path')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssModuleValues = require('postcss-modules-values')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        bundle: './src/root/index.js',
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
        filename: '[name].[chunkhash].js'
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
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                        minimize: true
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
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    }
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
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: './src/root/index-template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CopyWebpackPlugin([
          {
              from: path.resolve(__dirname, './static'),
              to: path.resolve(__dirname, './build/'),
              ignore: ['.*']
          }
      ]),
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