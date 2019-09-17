
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },
    module: {
        rules: {
            test: /\.(js | jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }
    },
    resolve: {
        extension: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                title: 'Template webpack zeroexu',
            }
        })
    ]
}