const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.export = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname + 'dist'),
        filename: 'bundle.js'
    },

    modules: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}