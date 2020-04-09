var Webpack = require('webpack');
var WebpackNotifierPlugin = require("webpack-notifier");
const path = require('path');

module.exports = {
  entry: {
    'js/admin': path.resolve(__dirname, 'app/admin.js'),
    'js/shortcode': path.resolve(__dirname, 'app/shortcode.js'),
    'js/widget': path.resolve(__dirname, 'app/widget.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets'),
  },
  devtool: 'cheap-eval-source-map',

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env"],
          plugins: [
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
  ]
}
