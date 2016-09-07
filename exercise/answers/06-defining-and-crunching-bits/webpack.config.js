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
    noParse: /lodash\/lodash\.js|jquery/,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
