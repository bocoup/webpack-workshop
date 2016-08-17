var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css"),
      },
      {
        test: /\.woff$/,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
