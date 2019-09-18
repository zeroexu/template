const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const enviromentRoute =
    process.env.NODE_ENV
        ? `${__dirname}/envs/.env.${process.env.NODE_ENV}`
        : `${__dirname}/envs/.env.development`;

require('dotenv').config({ path: enviromentRoute });

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: process.env.PORT
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
                title: process.env.APP_NAME
            }
        }),
        new webpack.EnvironmentPlugin(['PORT', 'APP_NAME', 'GRAPHQL_API', 'NODE_ENV', 'MAINTENANCE', 'LANGUAGE']),
        new webpack.DefinePlugin({
            'process.env.PORT': JSON.stringify(process.env.PORT),
            'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME),
            'process.env.GRAPHQL_API': JSON.stringify(process.env.GRAPHQL_API),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.MAINTENANCE': JSON.stringify(process.env.MAINTENANCE),
            'process.env.LANGUAGE': JSON.stringify(process.env.LANGUAGE)
        })
    ],

}