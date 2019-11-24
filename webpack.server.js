const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const port = process.env.PORT || 3010;

module.exports = {
    target: 'node',
    // mode: 'development',
    entry: './server.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // use: ['babel-loader'],
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',
                            { target: { browsers: ['last 2 version'] } }
                        ]
                    ]
                }
            },
            {
                test: /\.s?css$/,  // scss & css files
                use: ['style-loader', 'css-loader']

            },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=src/[name].[ext]" },

        ]
    },
    externals: [webpackNodeExternals()],
    plugins: [
      
        new webpack.ProvidePlugin({
        "React": "react"
           
         }),
    ],
    // devServer: {
    //     host: 'localhost',
    //     port: port,
    //     historyApiFallback: true,
    //     open: true
    // }
}; 