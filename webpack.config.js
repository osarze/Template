const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const SITE_NAME = "Agency Template";

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
    entry: {
        main: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader?sourceMap",
                    MiniCssExtractPlugin.loader,
                    "css-loader?sourceMap",
                    "postcss-loader?sourceMap"
                ]
            },
            {
                test: /\.s[c|a]ss$/,
                use: [
                    'style-loader?sourceMap',
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    'postcss-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            disable: true,
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: ['pug-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pug/index.pug',
            hash: true,
            title: "Home",
            inject: false,
            website_name: SITE_NAME,
            portfolios: require('./src/data/portfolios.json')
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                host: HOST,
                port: PORT,
                proxy: PROXY
            }
        ),
        new FaviconsWebpackPlugin('./src/images/home-logo-hi.png'),
        new CleanWebpackPlugin(['dist'])
    ]
};