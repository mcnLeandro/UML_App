
const path = require('path');
const common = require("./webpack.common");
const {merge}= require("webpack-merge");

module.exports = merge(common, {

    mode: "development",

    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: "images/[name][ext]",
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },

});