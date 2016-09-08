# Extracting Text

We introduced two loaders earlier - `style-loader` and `css-loader` - that work in build a project's css into the JS package. That has a lot of benefits for development but for running in a end users computer, loading content over a normal internet connection can be improved or optimized.

The __ExtractTextWebpackPlugin__ extracts the source of modules affected by it into a file separate from the JavaScript. Most often you will see this used for extracting css handled by `css-loader` into a css file separate from the js files output by webpack. The built app can have this css loaded in a page before the js, so any server rendered content in the page can be styled as desired while the js loads.

---

# Extracting the CSS

Let's extract the CSS from the bundle into a separate file!

Back when we used the `style-loader` we set it to return a script to webpack that creates a style tag along with the JS. That means we bundled all the CSS content as well.

To do that, we will extract the return of `css-loader`, and keep the `style-loader` only as a fallback.

As this plugin is a separate npm package, we first need to install it.

```shell
npm install extract-text-webpack-plugin --save-dev
```

---

# Loading the plugin

Plugins are not loaders, this time we will need to require them in the `webpack.config.js` file.

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
```

Right after, we add this plugin as a new entry, but notice how this plugin also manipulates loaders:

```js
module.exports = {
  /* ... */,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css"),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
```

---

# Extracting vs Not Extracting

```js
module.exports = {
  /* ... */,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css"),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
```

On this example, we call `ExtractTextPlugin.extract` with 2 arguments.

The first one is the loader to be used when the css text is not extracted.

The second one is the loader that will be used by the plugin to extract its result.

---

# Creating the separate file

```js
module.exports = {
  /* ... */,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css"),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
```

On the new plugins list, we initialize the ExtractTextPlugin and tell which file we want to create with the extracted css. In this case it will be set as `bundle.css`.
