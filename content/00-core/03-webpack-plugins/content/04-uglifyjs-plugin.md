# Minifying JS w/ UglifyJS

__UglifyJS__ is a known tool to minify / compress JS code. This is a common and important step for any web app as load performance matters, and a minified output is smaller in bytes (and gets even smaller when gzipped).

Webpack has a built-in __UglifyJSPlugin__ you can use to minify your output source. This integration is important as webpack provides some leverage to the minifier to get better results than running UglifyJS manually or through another tool.

---

# Importing webpack plugins

As the __UglifyJSPlugin__ a built-in plugin, we don't need to install any extra npm package, you can find it in the webpack namespace as `webpack.optimize.UglifyJsPlugin`.

In order to to that, you need to import `webpack` in your `webpack.config.js`.

```js
var webpack = require('webpack');
```

---

# Plugging in UglifyJS to Webpack

We'll use the `plugins` list in our `webpack.config.js` to add a call to construct __UglifyJSPlugin__, this is what we need to add:

```js
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
```

---

Your config will look like this:

```js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  // ...
  module: {
    loaders: [
      /* ... */
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),

    // Here goes the UglifyJS Plugin!
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
```

That's it.

---

# Minified files and Source Maps

The next time you run webpack, you will get a minified bundle!

You can also check the UglifyJSPlugin creates - by default - a source map for your bundle. That's useful for debugging your code.

If you don't need source maps or just want faster webpack runs, you can turn it off passing some options to the plugin:

```js
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
  ],
```

---

# Removing warnings

Sometimes the UglifyJSPlugin might become repetitive with some warnings. These warnings
are not necessarily errors, and there might be a time you want to silence them.

You're covered with an option for that. Just keep in mind that using it might hide other important warnings in the future.

```js
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
```
