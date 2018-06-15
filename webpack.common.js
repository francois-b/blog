const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /(node_modules)|(webpack)/,
        use: ["raw-loader", "mdhl-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|(webpack)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)|(webpack)/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /src\/index.html$/,
        exclude: /(node_modules)|(webpack)/,
        use: ["raw-loader", "static-blog-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("./dist", {
      exclude: [".git"]
    }),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "src/index.html",
      filename: "index.html"
    }),
    new CopyWebpackPlugin([
      { from: "static/404.html", to: "404.html" }, // This will end up under /dist
      { from: "static/fonts", to: "fonts" },
      { from: "static/CNAME", to: "CNAME", toType: "file" }
    ])
  ]
};
