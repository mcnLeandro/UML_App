
const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
   

    plugins:[new HtmlWebpackPlugin({
        template:"./index.html"
    })],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
                include: path.resolve(__dirname, 'src/css'),
            },
            {
                test: /\.(svg|jpg|png)$/,
                use: ['url-loader'],
                include: path.resolve(__dirname, 'src/images'),
            },
            {
                // Babel 用のローダー
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ],
                resolve: {
                    fullySpecified: false
                }
            }
        ],
    },
    
};