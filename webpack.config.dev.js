const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //第二步导入
module.exports = {
    mode: "development",
    target: "web",
    entry: {
        main: ["./src/index.ts"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
        }]
    },
    plugins: [
        new HtmlWebpackPlugin,
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        host: "localhost",
        // compress: true,
        // overlay: true,
        open: true,
    }




}