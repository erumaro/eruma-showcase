const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'axios', 'react', 'react-dom', 'react-redux', 'react-router', 'redux'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.(gif|png|jp(e*)g|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    
    watch: true
};