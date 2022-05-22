const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js',
    },

    module: {
        rules:[
            // txt
            {
            test: /\.txt$/,
            use: 'raw-loader'
            },

            // images
            {
                test: /\.(png|jpg|gif)$/i,
                use: 'url-loader',
            },

            //style.css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html",
            filename: "./index.html"
        }),

        new MiniCssExtractPlugin ({
            filename: '[name].css'
        }),
    ]
};