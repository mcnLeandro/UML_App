
const path = require('path');
const common = require("./webpack.common");
const {merge}= require("webpack-merge");

module.exports = merge(common, {

    mode: "development",
    watch: true,

    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },

});