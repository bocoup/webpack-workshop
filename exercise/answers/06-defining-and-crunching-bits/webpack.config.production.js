var DefinePlugin = require('webpack').DefinePlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: '[name]-[hash].js',
  },
  babel: {
    presets: ['es2015'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('[contenthash].css'),
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
