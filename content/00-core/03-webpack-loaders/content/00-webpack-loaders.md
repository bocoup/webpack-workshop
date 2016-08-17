# The loaders transform your world

As a general package loader, you can use different loaders with webpack.

Loaders can modify individual modules, providing the magic for developing with webpack, beyond the built-in configuration options.

???

A lot of the magic for developing with webpack comes through loaders. Outside of webpack's built in configuration options, loaders and plugins have a large impact on what can be done with webpack. Plugins are well plugins. The surface area of what a plugin can do in webpack is almost anything. In fact most webpack built in features are themselves plugins, including understanding CommonJS and AMD module details. While plugins modify the whole compilation process in webpack, loaders have a smaller focus. Modifying individual modules.

---

# Single Responsibility Loaders

You may have one function that has a single responsiblity. A class. A file.

The ideal for loaders works the same. In the same way you can pair two functions to build more complex behaviour by the second function acting on the output of the first, loaders too are built to work this way.

As an example, you could use one loader to take the doc blocks from a file and another to apply syntax highlight.

---

# Common loaders

- `babel-loader`
- `style-loader`
- `css-loader`
- `file-loader`

---

# Webpack configuration with loaders

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.png$/,
        loader: 'file',
      },
    ],
  },
};
```

---
