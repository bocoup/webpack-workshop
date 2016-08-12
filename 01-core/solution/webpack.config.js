module.exports = {
  context: __dirname,
  entry: [
    // './vendor/fabric.js',
    './vendor/jquery-3.1.0.js',
    './src/canvas.js',
    './src/main.js',
  ],
  output: {
    path: 'dist',
    filename: 'main.js',
  },
};
