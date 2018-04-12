const {
    HotModuleReplacementPlugin,
    NamedChunksPlugin,
    DefinePlugin
} = require("webpack");

const PORT = 3000;

module.exports = {
    mode: 'development',
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedChunksPlugin(),
        new DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: "dist",
        publicPath: "/",
        historyApiFallback: true,
        disableHostCheck: true,
        stats: {
            colors: true
        },
        host: "localhost",
        port: PORT,
        open: true,
    }
}