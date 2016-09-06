var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    path: __dirname + '/dist',
    filename: '[chunkhash].js',
  },
  resolve: {
    modulesDirectories: ['vendor'],
  },
  babel: {
    env: {
      preset: ['es2015'],
    },
  },
  module: {
    noParse: /remark\.js/,
    loaders: [
      {
        test: /remark/,
        loader: 'exports-loader?remark',
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        include: new RegExp('^' + __dirname),
        loader: 'babel-loader',
      },
      // {
      //   test: /\.md$/,
      //   loader: 'raw-loader',
      // },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html.js',
    }),
  ],
};