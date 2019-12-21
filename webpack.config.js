let path = require('path')
module.exports = {
    mode: 'development', //比production多注释
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    }

};