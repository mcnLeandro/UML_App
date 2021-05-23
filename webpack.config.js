
const path = require('path');

module.exports = {

    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
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
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
};

;