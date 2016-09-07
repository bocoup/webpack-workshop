module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
    publicPath: 'dist/',
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
        loader: 'style!css'
      },
      {
        test: /\.woff$/,
        loader: 'file'
      }
    ]
  }
};
