class: center, middle
name: ch1.3-sec1
# Extracting Text
Illustration?

???

We introduced two loaders earlier - `style-loader` and `css-loader` - that combined our css into the JS package. This is useful during development, but for deploying to a web server, loading a `.css` file is preferred.

---

# The Extract Text plugin

* The __ExtractTextWebpackPlugin__ extracts the source of target modules into a file separate from the JavaScript.
* Most often it is used to extract css handled by `css-loader` into a CSS file.

???

The __ExtractTextWebpackPlugin__ extracts the source of target modules into a file separate from the JavaScript. Most often it is used to extract css handled by `css-loader` into a css file.  The output bundle can have this css loaded in a page before the javascript, so any server rendered content in the page can be styled as desired while the javascript loads.

---

# Extracting Text

```shell
npm install extract-text-webpack-plugin --save-dev
```

???

This plugin is called extract text webpack plugin on npm...

--
**`webpack.config.js`:**
```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
```

???

In order to use our plugin, we need to `require` it using node in our webpack.config.js...

---

# Extracting Text

### webpack.config.js

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  /* ... */,
  module: {
    loaders: [
      /* ... */,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
```

???

And we'll need to update the `loaders` and add a `plugins` property.

---

# Extracting Text: Breaking it Down

```js
module: {
  loaders: [
    /* ... */,
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
    },
  ],
},
```

### `ExtractTextPlugin.extract` Arguments

```js
ExtractTextPlugin.extract("style-loader", "css-loader")
```

* The first argument is a _fallback loader_, which gets used if the extraction fails
* The second argument is the loader used to extract the result

???

We need to change the loader for our `.css` files to be marked by the ExtractTextPlugin, and we need to add a new key to the config called `plugins` which will hold an instance of the `ExtractTextPlugin`

In this example, we call `ExtractTextPlugin.extract` with 2 arguments.

The first one is a fallback loader, it will be used when the css text is not extracted, which is an option we will be describing in further detail in another Chapter.

The second argument is the loader that will be used by the plugin to extract its result.

---

# Extracting Text: Breaking it Down

```js
plugins: [
  new ExtractTextPlugin("bundle.css"),
],
```

`"bundle.css"` is the filename we'd like to create from the extracted text.

???

On the new plugins list, we initialize the ExtractTextPlugin with the filename we want to create. In this case it will be `bundle.css`.

We are now able to extract the `css` into it's own file when we build, but our HTML file won't reference it.
