const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js'
    },
    devServer: {
        port: 9000
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ] 
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}