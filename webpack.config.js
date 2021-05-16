const path = require('path');

const config = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js/modules'),
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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

module.exports = config;