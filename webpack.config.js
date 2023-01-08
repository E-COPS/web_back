var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode:'development',
    context: __dirname,

    entry: './ecopsback/app/static/js/index.js',

    output: {
    path: path.resolve('./ecopsback/app/static/bundles/'),
    filename: "main-059531419e2b2c1c2344.js",
},

    plugins: [
     new BundleTracker({filename: './ecopsback/webpack-stats.json'}),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
                }
                ]
            },
            resolve: {
            extensions: ['*', '.js', '.jsx']
}

};