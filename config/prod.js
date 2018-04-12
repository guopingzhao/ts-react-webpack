const {
    IgnorePlugin,
    DefinePlugin,
    LoaderOptionsPlugin,
    optimize
} = require("webpack");

module.exports = {
    mode: 'production',
    output: {
        path: "dist",
        filename: "./[name].[chunkhash:8].js",
        chunkFilename: "./[name].[id].[chunkhash:8].js",
    },
    pulgins: [
        new optimize.ModuleConcatenationPlugin(),
        new IgnorePlugin(/^\.\/locale$/, /moment$/),
        new DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        // new optimize.UglifyJsPlugin({
        //     comments: false,
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // }),
    ]
}