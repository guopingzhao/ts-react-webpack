const path = require("path");
const {
    IgnorePlugin,
    DefinePlugin,
    LoaderOptionsPlugin,
    optimize
} = require("webpack");

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve("dist"),
        filename: "./[name].[chunkhash:8].js",
        chunkFilename: "./[name].[id].[chunkhash:8].js",
    },
    plugins: [
        new optimize.ModuleConcatenationPlugin(),
        new IgnorePlugin(/^\.\/locale$/, /moment$/),
        new DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        })
    ]
}