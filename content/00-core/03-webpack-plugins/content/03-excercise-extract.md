class: center, middle
name: ch1.3-ex1

# Exercise!

---

# Recap - CSS and HTML files

## ExtractTextWebpackPlugin

- Uses loaders to determine CSS to extract
- Uses a plugin _instance_ to determine what to call the CSS file
- `[contenthash].css` as the file name will output a CSS file named via a hash of the content

--

## HtmlWebpackPlugin

- Renders a template
- Injects `<link>` and `<script>` tags into the rendered HTML
- Outputs the HTML to the output directory

???



---

# Exercise 05 - Extract CSS & HTML File

### Goals

- **Install plugins**: `extract-text-webpack-plugin` and `html-webpack-plugin`
- **Configure** those plugins in the webpack config file
- **Restart** the `dev` server if its running
- **Remove `<link>` and `<script>`**: Remove **`<link>`** and **`<script>`** tags in the HTML file
- **Refresh the browser** window (notice the script is working thanks to `HtmlWebpackPlugin`)
- **Update the `build` command**: Remove `cp` from the build script
- **Run a build** — you'll have a CSS file output this time
- **Use `[hash]`**: Switch filenames to **`[hash]`** and **`[contenthash]`**
- **Run another build** and, then, open the index.html file in a text editor
- Notice `<link>` and `<script>` tags are added pointing to the right files

---

# Exercise 05 - Answer Overview

**`webpack.config.js`**

```js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
// ....
module: {
  loaders: [
    // other loaders
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    },
  ],
},
plugins: [
  new ExtractTextPlugin('[contenthash].css'),
  new HtmlPlugin({
    template: 'index.html',
    filename: 'index.html',
  }),
],
```

---
# Exercise 05 - Answer Overview (cont.)

**`package.json`**

```json
"scripts": {
  "build": "webpack",
  /* ... */
}
```

???

------

Any questions before we move on to some final details on "production builds" and optimizations?
