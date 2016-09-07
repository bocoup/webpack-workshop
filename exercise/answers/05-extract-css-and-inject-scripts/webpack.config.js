var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

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
    new ExtractTextPlugin('[contenthash].css'),
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
