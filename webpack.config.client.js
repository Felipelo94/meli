const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./src/frontend/index.tsx",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test:  /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/frontend/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
};
