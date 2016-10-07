name: ch1.3-sec4
# Minifying JS w/ UglifyJS

### Built-in optimization plugin

__UglifyJS__ is a well-known tool for minifying and compressing JavaScript. It is _built in_ to webpack.

???
__UglifyJS__ is a known tool to minify and compress JS code. This is a common and important step for any web application, and a minified output is smaller in bytes transferred (and gets even smaller when gzipped).

Webpack has a built-in __UglifyJSPlugin__ you can use to minify your output source. This integration is important as webpack provides some leverage to the minifier to get better results than running UglifyJS manually or through another tool.

---

# Configuring uglify plugin

```js
var webpack = require('webpack'); // Require webpack...

// .... other modules stuffs
  plugins: [
    // ... other plugins,
    new webpack.optimize.UglifyJsPlugin(),
  ],
```
???

As the __UglifyJSPlugin__ is a built-in plugin, we don't need to install any npm package, we can find it in the webpack namespace as `webpack.optimize.UglifyJsPlugin`.

We need to require `webpack` in our `webpack.config.js`, and add a call to construct __UglifyJSPlugin__ in our plugins list.

The next time you run webpack, you will get a minified bundle!

---

# Removing warnings

```js
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
```

Make Uglify's output less overwhelming...and we're done!

???


Sometimes the UglifyJSPlugin can overwhelm you with warnings. These warnings
are not necessarily errors, and there might be a time you want to silence them.

This is a configuration option we can pass to the plugin.  Just keep in mind that using it might hide other important warnings in the future...

----

Now that we've gotten our build minified, lets take a look at the last plugin we will cover in the Core Chapter.
