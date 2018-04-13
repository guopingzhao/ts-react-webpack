const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");
const dev = require('./config/dev');
const prod = require('./config/prod');

module.exports = function (env) {
  const baseConfig = {
    entry: {
      index: "./src/index.tsx",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.jsx?$/,
          loader: "babel-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: "url-loader",
            options: {
              name: "images/[name].[ext]",
              limit: 1,
            },
          }, ],
        },
        {
          test: /\.(eot|ttf|svg|woff|woff2)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "fonts/[name].[ext]",
                limit: 1,
              },
            }, 
          ],
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            publicPath: "../",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: [
                    flexbugs,
                    autoprefixer({
                      browsers: ["last 6 versions", "android >= 4.0", "ios >= 5.0", ">1%", "Firefox ESR", "not ie < 9"]
                    })
                  ]
                }
              },
              "sass-loader"
            ]
          })
        }
      ]
    },
    resolve: {
      modules: [
        ".",
        "src",
        "node_modules"
      ],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        inject: true
      }),
      new ExtractTextPlugin({
        filename: "./[name].[contenthash:8].css",
        allChunks: true,
        disable: process.env.NODE_ENV === "development"
      }),
    ],
  };

  if (process.env.NODE_ENV === "development") {
    return merge(baseConfig, dev);
  } else {
    return merge(baseConfig, prod);
  }
}