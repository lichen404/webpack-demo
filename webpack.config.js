let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let base = require('./webpack.config.base.js')
module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist"
    },
    mode: 'development', //比production多注释
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }

};