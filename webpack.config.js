const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Keys = require('./src/utils/keys');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: Keys.SETTINGS.PORT
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                title: Keys.SETTINGS.APP_NAME
            }
        })
    ]
}