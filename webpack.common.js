
const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
   

    plugins:[new HtmlWebpackPlugin({
        template:"./index.html"
    })],

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ],
                include: path.resolve(__dirname, 'src/css'),
            },
            {
                // Babel 用のローダー
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime'],
                        }
                    }
                ],
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test:/\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|jpg|png)$/,
                type: "asset/resource",
            },
        ],
    },
    
};