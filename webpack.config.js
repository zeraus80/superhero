const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    return {
        entry: {
            app: path.resolve(__dirname, 'src/main.ts')
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: '@ngtools/webpack'
                },
                {
                    test: /\.scss$/,
                    use: [
                         // "style-loader", // creates style nodes from JS strings
                        MiniCssExtractPlugin.loader,
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                }
            ]
        },
        plugins: [
/*             new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ]), */
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist'
            }),

            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })

        ]
    };
}