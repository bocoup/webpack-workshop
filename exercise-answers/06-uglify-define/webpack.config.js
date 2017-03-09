const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ]
};
