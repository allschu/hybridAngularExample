var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'ng1': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/dev'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'config/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/app-old/*.html',
                to: '',
                flatten: true
            },
            {
                from: 'src/app-old/*.css',
                to: '',
                flatten: true
            }
        ])
    ]
}
